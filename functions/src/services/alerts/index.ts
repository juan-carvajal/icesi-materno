import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { chunk, flatten } from "lodash";
import { Alert, AlertDeliveryMethod } from "../../models/alerts";
import { MakeBatchPhoneCall } from "../twillio";

export const BroadcastAlert = async (alert: Alert) => {

  let use_sms = false;
  let use_calls = false;

  switch (alert.deliveryMethod) {
    case AlertDeliveryMethod.SMS_ONLY:
      use_sms = true;
      break;
    case AlertDeliveryMethod.CALL_ONLY:
      use_calls = true;
      break;
    case AlertDeliveryMethod.BOTH:
      use_sms = true;
      use_calls = true;
      break;
    default:
      throw new functions.https.HttpsError(
        "failed-precondition",
        "Unknown delivery method"
      );
  }

  if (!use_sms && !use_calls) {
    throw new functions.https.HttpsError(
      "aborted",
      "Could not determine a delivery method"
    );
  }

  const db = admin.firestore()

  const userEmails = flatten((await Promise.all(
    chunk(alert.targetRoleIDs, 10).map(async (chunkIds) => {
      const userRoles = await db.collection('userRoles').where('roleID', 'in', chunkIds).get()
      return userRoles.docs.filter(doc => doc.exists).map(doc => doc.data()?.email as string).filter(i => !!i && typeof i === 'string');
    })
  )));


  const userPhones = flatten((await Promise.all(
    chunk(userEmails, 10).map(async (chunkEmails) => {
      const userData = await db.collection('userData').where('email', 'in', chunkEmails).get()
      return userData.docs.filter(doc => doc.exists).map(doc => doc.data()?.phone as string).filter(i => !!i && typeof i === 'string' && /\+57[0-9]{10}/.test(`+57${i}`)).map(i => `+57${i}`);
    })
  )));

  console.info(`Sending alert notifications with: SMS ${use_sms}, CALL ${use_calls}`)

  if (use_sms) {
    const sms_message = `ALERTA CONECTADOS:
    Se ha generado una alerta en la aplicación ConectaDos dirigida a su usuario. Por favor verifique la alerta en https://icesi-materno.web.app/#/alerts/${alert.id}
    La alerta generada posee la siguiente descripción:
    ${alert.description}
    Por favor contáctese inmediatamente al ${alert.emergencyContact}
    `
    await batchMessageDelivery(userPhones, sms_message)
  }

  if (use_calls) {
    const call_message = 'Se ha generado una alerta en la aplicación ConectaDos dirigida a su usuario. Por favor visite la plataforma en https://icesi-materno.web.app'
    await MakeBatchPhoneCall(userPhones, call_message)
  }

  return true
}

const batchMessageDelivery = async (phones: string[], message: string) => {

  const db = admin.firestore()

  const promises = chunk(phones, 10).map(async (chunkPhones) => {
    const batch = db.batch()

    chunkPhones.forEach(phone => {
      batch.create(db.collection('notifications').doc(), {
        to: phone,
        body: message
      })
    })

    return batch.commit()
  })

  return Promise.all(
    promises
  )
}
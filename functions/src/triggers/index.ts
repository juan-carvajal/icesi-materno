import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'
import { diff } from "../services/utils";


exports.updateDisplayName = functions.firestore.document('userData/{uid}').onUpdate((change, context) => {

  const { firstName, lastName }: { firstName?: string, lastName?: string } = change.after.data()

  const newDisplayName = `${firstName ?? ''} ${lastName ?? ''}`

  const uid: string = context.params.uid

  if (!uid) {
    return
  }

  if (process.env.FUNCTIONS_EMULATOR) {
    console.log('dummy activation on dev environment', newDisplayName)
    return
  }

  return admin.auth().updateUser(uid, {
    displayName: newDisplayName
  })
})


exports.updateChats = functions.firestore
  .document('chats/{chatID}/messages/{messageId}')
  .onCreate((change, context) => {

    return admin.firestore().collection('chats').doc(context.params.chatID).update({
      lastUpdated: new Date()
    })

  });


exports.checkCaseDiff = functions.firestore
  .document('cases/{caseID}')
  .onUpdate(async (change, context) => {

    const { newData } = diff(change.before.data(), change.after.data())

    if (!!newData['state']) {
      await admin.firestore().collection('cases').doc(context.params.caseID).update({
        lastUpdateState: new Date()
      })
    }

    return admin.firestore().collection('caseHistory').add({
      caseID: context.params.caseID,
      createdAt: new Date(),
      changes: newData
    })
  });

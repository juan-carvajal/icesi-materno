import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'
import { diff } from "../services/utils";


exports.updateUserData = functions.firestore.document('userData/{uid}').onWrite(async (change, context) => {
  if (!change.after.data()) {
    return
  }

  const { firstName, lastName, email }: { firstName?: string, lastName?: string, email?: string } = change.after.data() as FirebaseFirestore.DocumentData



  const uid: string = context.params.uid

  if (!uid) {
    return
  }

  if (process.env.FUNCTIONS_EMULATOR) {
    console.log('dummy activation on dev environment')
    return
  }

  await admin.firestore().collection('userSearch').doc(uid).set({
    firstName,
    lastName,
    email,
    uid
  })

  if (!firstName || !lastName) {
    return
  }

  const newDisplayName = `${firstName ?? ''} ${lastName ?? ''}`

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

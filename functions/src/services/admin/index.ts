import * as admin from "firebase-admin";
import { UserData } from "../../models/users";
import * as functions from "firebase-functions";



export const DeleteRole = async (roleID: string) => {
  if (!roleID) {
    throw new Error('Please provide a non-empty role id')
  }


  const db = admin.firestore()
  const userRoleCount = await db.collection('userRoles').where('roleID', '==', roleID).get().then((snapshot) => {
    return snapshot.docs.length
  })

  if (userRoleCount > 0) {
    throw new Error('Can not delete role that is assigned to some users')
  }

  return db.collection('roles').doc(roleID).delete()
}

export const ListUserService = async (pageToken?: string, pageSize = 50) => {

  const auth = admin.auth()

  console.log('received token', pageToken)

  return auth.listUsers(pageSize, pageToken ?? undefined)
}

export const CreateUserService = async (email: string, displayName: string) => {
  const auth = admin.auth()

  return auth.createUser({
    email,
    displayName,
    emailVerified: false
  })
}

export const RegisterNewAppEndUserService = async (userData: UserData, roleID: string) => {

  const { email, firstName, lastName, phone } = userData

  if (!email || !firstName || !lastName || !phone) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "Missing parameters: (email,firstName,lastName)"
    );
  }

  if (!(/\+57[0-9]{10}/.test(`+57${phone}`))) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "Invalid phone number"
    );
  }

  const db = admin.firestore()

  const userRecord = await CreateUserService(email, `${firstName} ${lastName}`)

  await db.collection('userData').doc(userRecord.uid).set(userData)

  const roleExists = await db.collection('roles').doc(roleID).get().then(snapshop => {
    return snapshop.exists
  })

  if (!roleExists) {
    throw new functions.https.HttpsError(
      "not-found",
      "Specified role does not exist."
    );
  }

  await admin.firestore().collection('userRoles').doc(userRecord.uid).set({
    email,
    roleID
  })

  const passWordResetLink = await admin.auth().generatePasswordResetLink(email)

  return admin.firestore().collection('notifications').add({
    to: `+57${phone}`,
    message: `Bienvenido a ConectaDos!
    Para acceder a la plataforma por favor actualiza tu contraseña aquí: ${passWordResetLink}
    `
  })
}
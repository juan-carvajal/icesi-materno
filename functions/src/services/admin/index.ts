import * as admin from "firebase-admin";



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

  console.log('received token',pageToken)

  return auth.listUsers(pageSize, pageToken ?? undefined)
}
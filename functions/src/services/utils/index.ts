import * as admin from 'firebase-admin'


export const GetUserPermissions = async (uid: string) => {
  const firestore = admin.firestore()
  const roleID = await firestore.collection('userRoles').doc(uid).get().then(snapshop => {
    if (!snapshop.exists) {
      return undefined
    }

    return snapshop.data()?.roleID as string || undefined
  })

  if (!roleID) {
    return []
  }

  return firestore.collection('roles').doc(roleID).get().then(snapshop => {
    if (!snapshop.exists) {
      return []
    }

    return (snapshop.data()?.permissions ?? []) as Array<string>

  })
}

export const IsAdmin = async (uid: string) => {
  return GetUserPermissions(uid).then(permissions => {
    return permissions.includes('admin')
  })
}
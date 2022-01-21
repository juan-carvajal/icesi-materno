import * as admin from 'firebase-admin'
import { pickBy, isEqual } from 'lodash'

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


interface ObjectComparison {
  added: {};
  updated: {
    [propName: string]: any;
  };
  removed: {};
  unchanged: {};
}

export class ObjectUtils {

  static diff (o1: any, o2: any, deep = false): ObjectComparison {
    const added: { [key: string]: unknown } = {};
    const updated: { [key: string]: any } = {};
    const removed: { [key: string]: unknown } = {};
    const unchanged: { [key: string]: unknown } = {};
    for (const prop in o1) {
      if (o1.hasOwnProperty(prop)) {
        const o2PropValue = o2[prop];
        const o1PropValue = o1[prop];
        if (o2.hasOwnProperty(prop)) {
          if (o2PropValue === o1PropValue) {
            unchanged[prop] = o1PropValue;
          } else {
            updated[prop] = deep && this.isObject(o1PropValue) && this.isObject(o2PropValue) ? this.diff(o1PropValue, o2PropValue, deep) : { newValue: o2PropValue };
          }
        } else {
          removed[prop] = o1PropValue;
        }
      }
    }
    for (const prop in o2) {
      if (o2.hasOwnProperty(prop)) {
        const o1PropValue = o1[prop];
        const o2PropValue = o2[prop];
        if (o1.hasOwnProperty(prop)) {
          if (o1PropValue !== o2PropValue) {
            if (!deep || !this.isObject(o1PropValue)) {
              updated[prop].oldValue = o1PropValue;
            }
          }
        } else {
          added[prop] = o2PropValue;
        }
      }
    }
    return { added, updated, removed, unchanged };
  }

  /**
   * @return if obj is an Object, including an Array.
   */
  static isObject (obj: any) {
    return obj !== null && typeof obj === 'object';
  }
}


export const diff = (oldObject: any, newObject: any) => {
  return {
    oldData: pickBy(oldObject, (value, key) => { return !isEqual(value, newObject[key]); }),
    newData: pickBy(newObject, (value, key) => { return !isEqual(oldObject[key], value); })
  }
}
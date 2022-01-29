import * as functions from "firebase-functions";
import { UserData } from "../models/users";
import { DeleteRole as deleteRole, ListUserService, RegisterNewAppEndUserService } from "../services/admin";
import { IsAdmin, GetUserPermissions } from "../services/utils";

export const DeleteRole = functions.https.onCall(
  async (data: { roleID?: string }, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "The function must be called " + "while authenticated."
      );
    }

    const _isAdmin = await IsAdmin(context.auth.uid)
    if (!_isAdmin) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "Only admins may call this function."
      );
    }

    if (!data.roleID) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Please provide a roleID"
      );
    }

    return deleteRole(data.roleID).catch((err: Error) => {
      console.log(err);
      throw new functions.https.HttpsError(
        "internal",
        `Failed deleting role ${data.roleID}: ${err.message}`
      );
    });
  }
);

export const ListUsers = functions.https.onCall(
  async (data: { pageToken?: string }, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "The function must be called " + "while authenticated."
      );
    }

    const _isAdmin = await IsAdmin(context.auth.uid)
    if (!_isAdmin) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "Only admins may call this function."
      );
    }



    return ListUserService(data?.pageToken).then((result) => {
      return {
        userRecords: result.users,
        pageToken: result.pageToken
      }
    }).catch((err: Error) => {
      console.log(err);
      throw new functions.https.HttpsError(
        "internal",
        `Failed listing users: ${err.message}`
      );
    });
  }
)



export const RegisterNewAppUser = functions.https.onCall(
  async (data: { userData: UserData, roleID: string }, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "The function must be called " + "while authenticated."
      );
    }

    if (!data || !data.roleID || !data.userData) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "Please call this function will all required parameters"
      );
    }

    const { permissions, allowedRoleIdsForCreation } = await GetUserPermissions(context.auth.uid)

    if (!permissions.includes('users.write') && !permissions.includes('admin')) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "You do not have the users.write permission."
      );
    }

    if (!allowedRoleIdsForCreation.includes(data.roleID) && !permissions.includes('admin')) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "You do not have permissions to create a user with roleID " + data.roleID
      );
    }

    return RegisterNewAppEndUserService(data.userData, data.roleID)
  }
)
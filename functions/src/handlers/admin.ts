import * as functions from "firebase-functions";
import { DeleteRole as deleteRole, ListUserService } from "../services/admin";
import { IsAdmin } from "../services/utils";

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
import { GetCaseAssignableUsers as getUsers } from "../services/users";
import * as functions from "firebase-functions";

export const GetCaseAssignableUsers = functions.https.onCall(
  async (_data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "The function must be called " + "while authenticated."
      );
    }

    return getUsers().catch((err) => {
      console.log(err);
      throw new functions.https.HttpsError(
        "internal",
        "Failed getting case assignable users"
      );
    });
  }
);

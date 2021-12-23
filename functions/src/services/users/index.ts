import * as admin from "firebase-admin";
import { Role, CaseUser } from "../../models/shared";
import { chunk, flatten, uniqBy } from "lodash";

export const GetCaseAssignableUsers = async () => {
  const roles = await admin
    .firestore()
    .collection("roles")
    .where("permissions", "array-contains-any", ["admin", "case.write"])
    .get()
    .then((snapshot) =>
      snapshot.docs.map((m) => {
        return { ...m.data(), ID: m.id } as Role;
      })
    );

  const chunckedRoles = chunk(roles, 10);

  const userRoles = flatten(await Promise.all(
    chunckedRoles.map((batch) => {
      return admin
        .firestore()
        .collection("userRoles")
        .where(
          "roleID",
          "in",
          batch.slice(0, 10).map((i) => i.ID)
        )
        .get()
        .then((snapshot) =>
          snapshot.docs.map((userRole) => {
            return { ...userRole.data(), uid: userRole.id } as CaseUser
          })
        );
    })
  ));

  return uniqBy(userRoles, 'uid')
};

import { ref, watch, Ref } from 'vue';
import { onSnapshot, Unsubscribe, doc, collection, query } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { Role, UserRole } from 'src/models/auth';
import { getAuth, User } from 'firebase/auth';

export function useRole (roleID: Ref<string>) {
  const roleRef = ref<Role>()
  const roleUnsubscribeRef = ref<Unsubscribe>()

  const handleRole = () => {
    if (roleUnsubscribeRef.value) {
      roleUnsubscribeRef.value()
    }


    if (!roleID.value) {
      roleRef.value = undefined
      return
    }

    roleUnsubscribeRef.value = onSnapshot(doc(db, 'roles', roleID.value), (snapshot) => {
      if (!snapshot.exists()) {
        roleRef.value = undefined
        return
      }

      roleRef.value = snapshot.data() as Role
    })

  }



  watch(roleID, handleRole, { immediate: true })


  return {
    role: roleRef,
  }
}

export function useRoles () {
  const roles = ref([] as Array<Role>);

  const q = query(collection(db, 'roles'));
  onSnapshot(q, (querySnapshot) => {
    roles.value = [] as Array<Role>;
    querySnapshot.forEach((doc) => {
      const role = doc.data() as Role;
      role.id = doc.id;
      roles.value.push(role);
    });
  });

  return { roles };
}

export function useUserRoles () {
  const userRoles = ref([] as Array<UserRole>);

  const q = query(collection(db, 'userRoles'));
  onSnapshot(q, (querySnapshot) => {
    userRoles.value = [] as Array<UserRole>;
    querySnapshot.forEach((doc) => {
      const userRole = doc.data() as UserRole;
      userRole.id = doc.id;
      userRoles.value.push(userRole);
    });
  });

  return { userRoles };
}

export function useCurrentUser () {
  const currentUser = ref<User>();
  const auth = getAuth();


  auth.onAuthStateChanged((user) => {
    currentUser.value = user ?? undefined;
  });

  return { currentUser }
}

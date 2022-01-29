import { ref, watch, Ref } from 'vue';
import { onSnapshot, Unsubscribe, doc } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { User } from 'firebase/auth';
import { Role } from 'src/models/auth';

export default function useUserAuthorization (user: Ref<User | undefined>) {
  const roleRef = ref<Role>()
  const userRoleRef = ref<{ roleID: string }>()
  const userRoleUnsubscribeRef = ref<Unsubscribe>()
  const roleUnsubscribeRef = ref<Unsubscribe>()

  const handleUserRole = (user: User) => {
    if (userRoleUnsubscribeRef.value) {
      userRoleUnsubscribeRef.value()
    }

    if (!user) {
      userRoleRef.value = undefined
      return
    }

    userRoleUnsubscribeRef.value = onSnapshot(doc(db, 'userRoles', user.uid), (snapshot) => {
      if (!snapshot.exists()) {
        return
      }

      userRoleRef.value = snapshot.data() as { roleID: string }
    })
  }

  const handleRole = (role: { roleID: string } | undefined) => {
    if (roleUnsubscribeRef.value) {
      roleUnsubscribeRef.value()
    }

    if (!role) {
      roleRef.value = undefined
      return
    }

    roleUnsubscribeRef.value = onSnapshot(doc(db, 'roles', role.roleID), (snapshot) => {
      if (!snapshot.exists()) {
        roleRef.value = undefined
        return
      }

      roleRef.value = snapshot.data() as Role
    })

  }

  const handleUser = (user?: User) => {
    if (!user) {
      return
    }

    handleUserRole(user)
  }

  watch(user, handleUser, { immediate: true })
  watch(userRoleRef, handleRole)

  function hasAccess (permission: string) {
    return (roleRef.value?.permissions.includes('admin') || roleRef.value?.permissions.includes(permission)) ?? false
  }


  return {
    authorization: roleRef,
    hasAccess
  }
}

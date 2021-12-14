import { watch, Ref, computed } from 'vue';
import { User } from 'firebase/auth';
import useUserData from './userData';
import useUserAuthorization from './userAuthorization';
import { AuthStateInterface } from 'src/store/auth/state';
import { useStore } from 'src/store';

export default function useUserFullInformation (user: Ref<User | undefined>) {

  const { userData } = useUserData(user)
  const { authorization } = useUserAuthorization(user)
  const store = useStore()

  const fullUserData = computed(() => {

    if (!user.value) {
      return {
        isLoggedIn: false,
        permissions: [],
        userData: {}
      } as AuthStateInterface
    }

    let permissions: Array<string> = []
    let roleName: string | undefined = undefined

    if (authorization.value) {
      permissions = authorization.value.permissions
      roleName = authorization.value.name
    }

    return {
      displayName: user.value.displayName ?? undefined,
      email: user.value.email ?? undefined,
      uid: user.value.uid,
      isLoggedIn: true,
      permissions,
      roleName,
      userData: userData.value
    } as AuthStateInterface

  })

  watch(fullUserData, () => store.commit('auth/setUserProps', fullUserData.value))

  return { fullUserData }
}

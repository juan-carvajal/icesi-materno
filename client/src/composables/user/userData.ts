import { ref, watch, Ref } from 'vue';
import { onSnapshot, Unsubscribe, doc } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { UserData } from 'src/models/users';
import { User } from 'firebase/auth';

export default function useUserData (user: Ref<User | undefined>) {
  const userData = ref<UserData>({});
  const userDataUnsubscribe = ref<Unsubscribe>()

  const refreshUserData = (user: User) => {
    if (userDataUnsubscribe.value) {
      userDataUnsubscribe.value()
    }

    userDataUnsubscribe.value = onSnapshot(doc(db, 'userData', user.uid), (snapshot) => {
      if (!snapshot.exists()) {
        return
      }
      userData.value = snapshot.data() as UserData
    })
  }

  const handleNewUser = () => {
    if (!user.value) {
      userData.value = {}
      return
    }

    refreshUserData(user.value)
  }

  watch(user, handleNewUser, { immediate: true })

  return { userData };
}

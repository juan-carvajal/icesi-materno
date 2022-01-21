import { ref, watch, Ref } from 'vue';
import { collection, query, onSnapshot, Unsubscribe, orderBy, where } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { ChatMessage, Chat } from 'src/models/social';

export function useChatMessageRepository (chatID: Ref<string>) {
  const chats = ref<ChatMessage[]>([]);


  const chatUnsubscribe = ref<Unsubscribe>()
  const isLoading = ref(false)


  function handleParamChange () {
    if (chatUnsubscribe.value) {
      chatUnsubscribe.value()
    }

    isLoading.value = true

    const q = query(collection(db, 'chats', chatID.value, 'messages'), orderBy('sentDate', 'desc'))
    chatUnsubscribe.value = onSnapshot(q, (querySnapshot) => {
      chats.value = [] as Array<ChatMessage>;
      querySnapshot.forEach((doc) => {
        const docChat = doc.data() as ChatMessage;
        chats.value.push(docChat);
      });
      isLoading.value = false
    }, (err => {
      console.log(err)
      isLoading.value = false
    }), () => {
      isLoading.value = false
    });
  }

  watch([chatID], handleParamChange, { immediate: true })

  return { chats, isLoading }

}

export function useChatRepository (uid: Ref<string>) {
  const chats = ref<Chat[]>([]);


  const chatUnsubscribe = ref<Unsubscribe>()
  const isLoading = ref(false)


  function handleParamChange () {
    if (chatUnsubscribe.value) {
      chatUnsubscribe.value()
    }

    isLoading.value = true

    const q = query(collection(db, 'chats'), where('participants', 'array-contains', uid.value), orderBy('lastUpdated', 'desc'))
    chatUnsubscribe.value = onSnapshot(q, (querySnapshot) => {
      chats.value = [] as Array<Chat>;
      querySnapshot.forEach((doc) => {
        const docChat = doc.data() as Chat;
        docChat.ID = doc.id
        chats.value.push(docChat);
      });
      isLoading.value = false
    }, (err => {
      console.log(err)
      isLoading.value = false
    }), () => {
      isLoading.value = false
    });
  }

  watch([uid], handleParamChange, { immediate: true })

  return { chats, isLoading }

}

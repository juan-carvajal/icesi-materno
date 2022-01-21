<template>
  <div class="fit absolute column q-ma-xl">
    <q-inner-loading
      :showing="isLoading"
      label="Cargando..."
      label-class="text-primary"
      label-style="font-size: 1.1em"
    />
    <q-input
      class="col-1 full-width q-px-sm"
      :model-value="chatTitle"
      @update:modelValue="updateChatName"
      placeholder="Chat sin titulo"
      debounce="500"
    ></q-input>
    <div class="col-10 q-pa-xs scroll" ref="divRef">
      <div class="column reverse">
        <q-chat-message
          v-for="(message, idx) in chats"
          :key="idx"
          :name="
            message.sender === currentUserData.uid
              ? 'Yo'
              : message.senderEmail ?? message.sender
          "
          :bg-color="
            message.sender === currentUserData.uid ? 'primary' : 'secondary'
          "
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="[message.message]"
          :sent="message.sender === currentUserData.uid"
          :stamp="message?.sentDate?.toDate()?.toLocaleString() ?? ''"
        >
          <template v-slot:avatar>
            <avatar-vue
              class="q-mx-sm"
              :email="message.senderEmail ?? message.sender"
            ></avatar-vue>
          </template>
        </q-chat-message>
      </div>
    </div>

    <q-input
      v-model="messageText"
      type="text"
      filled
      class="col-1 full-width q-px-sm"
      @keydown.enter.prevent="sendMessage"
    >
      <template v-if="messageText" v-slot:append>
        <q-icon @click="sendMessage" name="send" class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed, ref, watch, nextTick } from 'vue';
import { useChatMessageRepository } from 'src/composables/social/chatRepository';
import { useStore } from 'src/store/index';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import { ChatMessageWrite } from 'src/models/social';
import AvatarVue from './Avatar.vue';
export default defineComponent({
  components: { AvatarVue },
  props: {
    chatID: {
      required: true,
      type: String,
    },
    chatTitle: {
      required: true,
      type: String,
    },
  },
  emits: ['nameChange'],
  methods: {},
  setup(props, { emit }) {
    const { chatID } = toRefs(props);

    const messageText = ref<string>('');

    const divRef = ref<HTMLDivElement>();

    //const { notify } = useQuasar();

    const { chats, isLoading } = useChatMessageRepository(chatID);

    watch(isLoading, () => {
      void nextTick(() => {
        scrollToBottom();
      });
    });

    function scrollToBottom() {
      if (divRef.value) {
        divRef.value.scrollTop = divRef.value.scrollHeight;
      }
    }

    const store = useStore();

    const currentUserData = computed(() => {
      return { uid: store.state.auth.uid ?? '', email: store.state.auth.email };
    });

    function updateChatName(newName: string) {
      updateDoc(doc(db, `chats/${chatID.value}`), { name: newName })
        .then(() => {
          emit('nameChange');
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function sendMessage() {
      if (!messageText.value) {
        return;
      }

      if (!currentUserData.value) {
        return;
      }

      const message: ChatMessageWrite = {
        sender: currentUserData.value.uid,
        senderEmail: currentUserData.value.email,
        message: messageText.value,
        sentDate: serverTimestamp(),
      };

      void addDoc(collection(db, `chats/${chatID.value}/messages`), message);

      messageText.value = '';
      // .then(() => {
      //   notify({
      //     type: 'positive',
      //     message: 'Caso creado con éxito',
      //   });
      // })
      // .catch((err) => {
      //   console.log(err);
      //   notify({
      //     type: 'negative',
      //     message: 'Error creando caso.',
      //   });
      // });
    }

    return {
      chats,
      isLoading,
      currentUserData,
      messageText,
      sendMessage,
      divRef,
      scrollToBottom,
      updateChatName,
    };
  },
});
</script>

<style></style>

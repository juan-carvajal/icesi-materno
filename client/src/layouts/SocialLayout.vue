<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="chat_bubble" />
        <q-toolbar-title>Mensajes</q-toolbar-title>

        <q-btn flat to="/" round dense icon="home" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :breakpoint="500"
      overlay
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-btn
          class="full-width"
          flat
          label="Nueva Conversación"
          icon="inbox"
          color="primary"
          @click="openNewChatDialog"
        ></q-btn>
        <q-separator></q-separator>
        <q-list>
          <template v-for="(chat, index) in chats" :key="index">
            <q-item @click="currentChat = chat" clickable v-ripple>
              <!-- <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section> -->
              <q-item-section>
                {{ chat.name || '(Conversación sin nombre)' }}
              </q-item-section>
            </q-item>
            <q-separator />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page class="message-page flex flex-center relative-position">
        <chat
          v-if="currentChat"
          :chatID="currentChat.ID"
          :chatTitle="currentChat.name"
          @nameChange="updateChatRef"
        />
        <div class="column" v-else>
          <p class="text-center">
            Selecciona una conversación o comienza una nueva
          </p>
          <q-btn
            color="primary"
            icon="inbox"
            label="Nueva conversación"
            @click="openNewChatDialog"
          ></q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useChatRepository } from 'src/composables/social/chatRepository';
import { useStore } from 'src/store';
import Chat from 'src/components/social/Chat.vue';
import { Chat as ChatModel } from 'src/models/social';
import NewChatDialog from 'src/components/social/NewChatDialog.vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  components: { Chat },
  setup() {
    const store = useStore();

    const currentChat = ref<ChatModel>();

    const currentUserUid = computed(() => {
      return store.state.auth.uid ?? '';
    });

    const { dialog } = useQuasar();

    const { chats, isLoading } = useChatRepository(currentUserUid);

    function updateChatRef() {
      if (!currentChat.value) {
        return;
      }

      currentChat.value = chats.value.find(
        (i) => i.ID === currentChat.value?.ID
      );
    }

    function openNewChatDialog() {
      dialog({
        component: NewChatDialog,
      });
    }

    return {
      drawer: ref(true),
      chats,
      isLoading,
      currentChat,
      updateChatRef,
      openNewChatDialog,
    };
  },
});
</script>
<style lang="scss" scoped>
.message-page {
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
}
</style>

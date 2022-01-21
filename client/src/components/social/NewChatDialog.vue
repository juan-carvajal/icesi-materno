<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="full-width" bordered>
      <q-card-section>
        <div class="text-h6 ellipsis">Nueva Conversación</div>
      </q-card-section>
      <q-form @submit.prevent="createConversation">
        <q-card-section class="row q-col-gutter-sm">
          <q-input
            label="Nombre de la conversación"
            placeholder="(sin nombre)"
            class="col-12"
            stack-label
            v-model="conversationName"
          ></q-input>
          <q-input
            label="Buscar participantes"
            v-model="searchString"
            :debounce="500"
            class="col-12"
            type="search"
            :loading="isLoading"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <div class="q-gutter-xs">
            <q-chip
              v-for="(user, idx) in selectedUsers"
              :key="idx"
              removable
              :model-value="true"
              @remove="removeSelectedUser(user.uid)"
              color="primary"
              text-color="white"
            >
              {{ user.email }}
            </q-chip>
          </div>
          <q-scroll-area
            v-if="queriedUsers.length > 0"
            class="full-width"
            style="height: 200px"
          >
            <q-list>
              <q-item clickable v-for="(user, idx) in queriedUsers" :key="idx">
                <q-item-section>
                  <q-item-label
                    >{{ user.firstName }} {{ user.lastName }}</q-item-label
                  >
                  <q-item-label caption>{{ user.email }}</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="add"
                      @click="addSelectedUser(user)"
                      :disable="!!selectedUsers.find((i) => i.uid === user.uid)"
                    />
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-actions>
          <q-btn
            color="negative"
            @click="onDialogCancel"
            flat
            label="Cancelar"
          />
          <q-btn
            :disable="selectedUsers.length === 0"
            color="primary"
            type="submit"
            label="Crear"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useDialogPluginComponent, useQuasar } from 'quasar';
import { defineComponent, ref, computed } from 'vue';
import useUserSearch from 'src/composables/algolia-search/userSearch';
import { UserData } from 'src/models/users';
import { useStore } from 'src/store';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import { Chat } from 'src/models/social';
export default defineComponent({
  emits: [...useDialogPluginComponent.emits],
  setup() {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();

    const searchString = ref('');

    const selectedUsers = ref<UserData[]>([]);

    const { users, isLoading } = useUserSearch(searchString);

    const { notify } = useQuasar();

    const store = useStore();

    const currentUserUid = computed(() => {
      return store.state.auth.uid ?? '';
    });

    const conversationName = ref('');

    function removeSelectedUser(uid?: string) {
      if (!uid) {
        return;
      }

      const idx = selectedUsers.value.findIndex((i) => i.uid === uid);

      if (idx === -1) {
        return;
      }

      selectedUsers.value.splice(idx, 1);
    }

    function addSelectedUser(user: UserData) {
      const found = selectedUsers.value.find((i) => i.uid === user.uid);

      if (found) {
        return;
      }

      selectedUsers.value.push(user);
    }

    function createConversation() {
      if (!currentUserUid.value) {
        return;
      }

      const participantIDs = [
        ...selectedUsers.value.filter((i) => !!i.uid).map((i) => i.uid),
        currentUserUid.value,
      ];

      addDoc(collection(db, 'chats'), {
        name: conversationName.value,
        participants: participantIDs,
        lastUpdated: new Date(),
      } as Chat)
        .then(() => {
          notify({
            type: 'positive',
            message: 'Conversación creada con éxito',
          });
        })
        .catch((err) => {
          console.log(err);
          notify({
            type: 'negative',
            message: 'Error creando conversación.',
          });
        });
    }

    const queriedUsers = computed(() => {
      return users.value.filter((i) => i.uid !== currentUserUid.value);
    });

    return {
      dialogRef,
      onDialogHide,
      onDialogOK,
      onDialogCancel,
      searchString,
      queriedUsers,
      isLoading,
      selectedUsers,
      removeSelectedUser,
      addSelectedUser,
      conversationName,
      createConversation,
    };
  },
});
</script>

<style></style>

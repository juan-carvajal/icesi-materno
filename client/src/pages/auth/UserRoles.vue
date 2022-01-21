<template>
  <q-page class="q-ma-md">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="supervised_user_circle" />
      <q-toolbar-title> Roles </q-toolbar-title>
    </q-toolbar>

    <q-infinite-scroll @load="onLoad" :offset="250">
      <q-list>
        <q-linear-progress
          v-if="userListLoading"
          query
          color="primary"
          class="q-mt-sm"
        />
        <q-item v-for="user in matchedUserList" :key="user.uid">
          <q-item-section avatar>
            <avatar-vue :email="user.email"></avatar-vue>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ user.displayName ?? user.email }}</q-item-label>
            <q-item-label caption lines="1">{{ user.email }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-select
              dense
              clearable
              stack-label
              style="min-width:350px"
              :options="roles"
              option-label="name"
              :model-value="
                roles.find((r) => r.id === user.assignedRole?.roleID)
              "
              filled
              label="Rol actual"
              @update:model-value="(e?:{id:string})=>updateUserRole(user.uid,user.email ?? '',e?.id)"
            ></q-select>
          </q-item-section>
        </q-item>
      </q-list>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script lang="ts">
import { getFunctions, httpsCallable } from '@firebase/functions';
import { User } from '@firebase/auth';
import { defineComponent, ref, computed } from 'vue';
import AvatarVue from 'src/components/social/Avatar.vue';
import { useRoles, useUserRoles } from 'src/composables/auth/rolePermissions';
import { doc, setDoc } from '@firebase/firestore';
import { db } from 'src/boot/firebase';
import { useQuasar } from 'quasar';

interface UserListInterface {
  userRecords: User[];
  pageToken?: string;
}

export default defineComponent({
  components: {
    AvatarVue,
  },
  setup() {
    const functions = getFunctions();
    const listUsersCallable = httpsCallable<
      { pageToken?: string },
      UserListInterface
    >(functions, 'admin-ListUsers');

    const currentPageToken = ref<string>();

    const userListLoading = ref(false);

    const noMoreData = ref(false);

    const listedUsers = ref<User[]>([]);

    const { roles } = useRoles();
    const { userRoles } = useUserRoles();

    const { notify } = useQuasar();

    function onLoad(index: number, done: () => void) {
      if (noMoreData.value) {
        done();
        return;
      }

      userListLoading.value = true;
      listUsersCallable({ pageToken: currentPageToken.value })
        .then((response) => {
          listedUsers.value.push(...response.data.userRecords);

          currentPageToken.value = response.data.pageToken;

          if (!currentPageToken.value) {
            noMoreData.value = true;
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          userListLoading.value = false;
          done();
        });
    }

    function updateUserRole(uid: string, email: string, newRoleID?: string) {
      setDoc(
        doc(db, `userRoles/${uid}`),
        {
          email,
          roleID: newRoleID ?? null,
        },
        { merge: true }
      )
        .then(() => {
          notify({
            type: 'positive',
            message: 'Rol actualizado con éxito',
          });
        })
        .catch((err) => {
          console.log(err);
          notify({
            type: 'negative',
            message: 'Error actualizando rol.',
          });
        });
    }

    const matchedUserList = computed(() => {
      return listedUsers.value.map((i) => {
        return {
          ...i,
          assignedRole: userRoles.value.find((r) => r.id === i.uid),
        };
      });
    });

    return {
      onLoad,
      matchedUserList,
      userListLoading,
      roles,
      updateUserRole,
    };
  },
});
</script>

<style></style>

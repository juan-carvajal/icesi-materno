<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import useUserFullInformation from 'src/composables/user/userDataConsolidate';
import { getAuth, User } from 'firebase/auth';

export default defineComponent({
  name: 'App',
  setup() {
    const currentUser = ref<User>();
    const auth = getAuth();

    auth.onAuthStateChanged((user) => {
      currentUser.value = user ?? undefined;
    });

    provide('currentUser', currentUser);

    useUserFullInformation(currentUser);
  },
});
</script>

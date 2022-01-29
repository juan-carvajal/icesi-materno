<template>
  <q-page class="column items-center q-ma-md">
    <div class="row">
      <p class="text-primary text-h3 text-center">
        Bienvenido a <span class="text-bold text-secondary">ConectaDos</span>
      </p>
    </div>
    <q-separator></q-separator>
    <div class="row q-col-gutter-sm full-width">
      <div v-for="(item, idx) in allowedItems" :key="idx" class="col-6 col-sm-3">
        <q-card class="fit">
          <q-card-section class="row q-gutter-x-sm">
            <div><q-icon :name="item.icon"></q-icon></div>
            <p class="q-mb-none ellipsis">{{ item.label }}</p></q-card-section
          >
          <q-card-actions align="right">
            <q-btn icon="logout" :to="item.to" flat></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, inject, Ref } from 'vue';
import { menuList } from 'src/utils/items';
import useUserAuthorization from 'src/composables/user/userAuthorization';
import { User } from 'firebase/auth';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const currentUser = inject('currentUser') as Ref<User | undefined>;

    const { hasAccess } = useUserAuthorization(currentUser);

    const allowedItems = computed(() => {
      return menuList.filter((i) =>
        (i.requiredPermissions ?? []).every((perm) => hasAccess(perm))
      );
    });

    return { allowedItems };
  },
});
</script>

<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-avatar square
          ><q-img src="~assets/icons/app-logo.ico"></q-img
        ></q-avatar>

        <q-toolbar-title> ConectaDos </q-toolbar-title>

        <q-btn to="/messages" icon="inbox" flat></q-btn>

        <q-avatar
          :style="{
            backgroundColor: getBackgroundColor($store.state.auth.email ?? ''),
          }"
          class="text-black"
          >{{ ($store.state.auth.email ?? 'A').toUpperCase()[0] }}
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item dense clickable v-close-popup to="/profile">
                <q-item-section>Mi perfil</q-item-section>
              </q-item>
              <q-item
                dense
                clickable
                v-close-popup
                @click="signOut"
                class="bg-red text-white"
              >
                <q-item-section>Salir</q-item-section>
                <q-item-section side
                  ><q-icon color="white" name="logout"></q-icon
                ></q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item v-if="hasAccess('alerts.write')">
            <q-btn
              color="red"
              label="Alerta"
              class="fit"
              icon="warning"
              @click="openCreateAlertDialog"
            ></q-btn>
          </q-item>
          <q-separator></q-separator>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              :to="menuItem.to"
              clickable
              :active="menuItem.to === $route.path"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page-sticky
        v-if="hasAccess('alerts.write')"
        position="bottom-right"
        :offset="[18, 18]"
      >
        <q-btn
          @click="openCreateAlertDialog"
          fab
          color="red"
          round
          icon="warning"
        ></q-btn>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { getBackgroundColor } from 'src/utils/color';
import { signOut, User } from 'firebase/auth';
import { auth } from 'boot/firebase';

interface MenuItem {
  icon: string;
  label: string;
  separator: boolean;
  to: string;
  requiredPermissions?: Array<string>;
}

const menuList: Array<MenuItem> = [
  {
    icon: 'cases',
    label: 'Casos',
    separator: true,
    to: '/cases',
    requiredPermissions: ['cases.read'],
  },
  {
    icon: 'podcasts',
    label: 'Podcasts',
    separator: true,
    to: '/podcast',
    requiredPermissions: ['podcasts.read'],
  },
  {
    icon: 'warning',
    label: 'Alertas',
    separator: true,
    to: '/alerts',
    requiredPermissions: ['alerts.read'],
  },
  {
    icon: 'verified',
    label: 'Permisos',
    separator: true,
    to: '/admin/permissions',
    requiredPermissions: ['admin'],
  },
  {
    icon: 'supervised_user_circle',
    label: 'Roles',
    separator: true,
    to: '/admin/user-roles',
    requiredPermissions: ['admin'],
  },
];

import { defineComponent, ref, inject, Ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import CreateAlertDialogVue from 'src/components/alerts/CreateAlertDialog.vue';
import useUserAuthorization from 'src/composables/user/userAuthorization';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    const { dialog } = useQuasar();

    function openCreateAlertDialog() {
      dialog({
        component: CreateAlertDialogVue,
      });
    }

    const currentUser = inject('currentUser') as Ref<User | undefined>;

    const { hasAccess } = useUserAuthorization(currentUser);

    const allowedItems = computed(() => {
      return menuList.filter((i) =>
        (i.requiredPermissions ?? []).every((perm) => hasAccess(perm))
      );
    });

    return {
      menuList: allowedItems,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      getBackgroundColor,
      openCreateAlertDialog,
      hasAccess,
    };
  },
  methods: {
    signOut() {
      signOut(auth).catch((error: { message: string }) => {
        this.$q.notify({
          type: 'negative',
          message: `Error de autenticación inesperado: ${
            error.message ?? 'Desconocido'
          }`,
        });
      });
    },
  },
});
</script>

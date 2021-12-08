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

        <q-toolbar-title> App </q-toolbar-title>

        <q-avatar
          :style="{
            backgroundColor: getBackgroundColor($store.state.auth.email ?? ''),
          }"
          >{{ ($store.state.auth.email ?? 'A').toUpperCase()[0] }}
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item dense
                clickable
                v-close-popup
                to="profile"
                >
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

    <q-drawer v-model="leftDrawerOpen" show-if-above
        :width="200"
        :breakpoint="500"
        bordered>
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item :to="menuItem.to" clickable :active="menuItem.to === $route.path" v-ripple>
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
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { getBackgroundColor } from 'src/utils/color';
import { signOut } from 'firebase/auth';
import { auth } from 'boot/firebase';

const menuList = [
  {
    icon: 'cases',
    label: 'Casos',
    separator: true,
    to: '/cases'
  },
  {
    icon: 'podcasts',
    label: 'Podcasts',
    separator: false,
    to: '/podcast'
  }
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      menuList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      getBackgroundColor,
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

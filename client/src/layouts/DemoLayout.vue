<template>
  <q-layout view="lHh Lpr lFf">
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

        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title> Plataforma Integral de atención materno-perinatal </q-toolbar-title>

        <q-btn flat round dense>
          <q-avatar color="secondary" text-color="white">C</q-avatar>
          <q-menu>
            <q-card>
              <q-card-section>
                <p class="q-ma-xs">Usuario activo: correo@mail.com</p>
                <p class="q-ma-xs">
                  Rol: <span class="text-bold">Agente de campo</span>
                </p>
              </q-card-section>
              <q-card-actions>
                <q-btn label="Salir" color="negative" icon="logout"></q-btn>
              </q-card-actions>
            </q-card>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Opciones </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Mis casos',
    caption: 'Manejo de casos',
    icon: 'medical_services',
  },
  {
    title: 'Mi perfil',
    icon: 'person',
  },
  {
    title: 'Administración',
    icon: 'admin_panel_settings',
  },
  {
    title: 'Comunicaciones',
    icon: 'question_answer',
  },
  {
    title: 'Archivo e historia',
    icon: 'history',
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

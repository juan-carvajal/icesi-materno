<template>
  <q-page class="q-ma-md">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="warning" />
      <q-toolbar-title> Alertas </q-toolbar-title>

      <q-space></q-space>

      <q-btn
        flat
        round
        icon="add"
        @click="openCreateDialog"
        v-if="hasAccess('alerts.write')"
      ></q-btn>
    </q-toolbar>

    <q-list separator>
      <q-item
        v-for="(alert, idx) in alerts"
        :to="`/alerts/${alert.id}`"
        :key="idx"
      >
        <q-item-section>
          <q-item-label>{{
            `Alerta creado por ${
              alert?.createdBy?.displayName || alert?.createdBy?.email
            }`
          }}</q-item-label>
          <q-item-label caption lines="3">{{ alert.description }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{
            'Creada ' + getTimeInterval(handleFirebaseDate(alert.createdAt))
          }}</q-item-label>
          <q-badge
            multi-line
            class="text-bold text-caption q-my-xs wrap"
            style="max-width: 20vw"
            :color="!alert.acknowledgedBy ? 'negative' : 'warning'"
          >
            {{
              !alert.acknowledgedBy
                ? 'Sin Atender'
                : `Atendida por ${
                    alert.acknowledgedBy.displayName ||
                    alert.acknowledgedBy.email
                  }`
            }}<q-icon
              v-if="!alert.acknowledgedBy"
              name="warning"
              color="white"
            />
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, Ref, inject } from 'vue';
import { useAlerts } from 'src/composables/alerts/alerts';
import { useQuasar } from 'quasar';
import CreateAlertDialogVue from 'src/components/alerts/CreateAlertDialog.vue';
import { getTimeInterval, handleFirebaseDate } from 'src/utils/date';
import { User } from 'firebase/auth';
import useUserAuthorization from 'src/composables/user/userAuthorization';

export default defineComponent({
  setup() {
    const { alerts } = useAlerts();

    const { dialog } = useQuasar();

    function openCreateDialog() {
      dialog({
        component: CreateAlertDialogVue,
      });
    }

    const currentUser = inject('currentUser') as Ref<User | undefined>;

    const { hasAccess } = useUserAuthorization(currentUser);

    return {
      alerts,
      openCreateDialog,
      getTimeInterval,
      handleFirebaseDate,
      hasAccess,
    };
  },
});
</script>

<style></style>

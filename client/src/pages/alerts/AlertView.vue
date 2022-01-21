<template>
  <q-page class="q-ma-md">
    <q-toolbar class="text-primary q-px-none q-mb-sm">
      <q-icon name="warning" />
      <q-toolbar-title v-if="alert">
        {{ `Alerta ${alert.id}` }}
      </q-toolbar-title>

      <q-space></q-space>

      <q-btn flat round icon="list" to="/alerts"></q-btn>
    </q-toolbar>

    <q-card v-if="alert">
      <q-card-section class="row q-col-gutter-sm">
        <q-input
          label="Reportada en"
          readonly
          :model-value="translateDate(alert?.createdAt)"
          class="col-12 col-sm-6"
        ></q-input>

        <q-input
          label="Reportada por"
          readonly
          :model-value="
            alert?.createdBy?.displayName || alert?.createdBy?.email
          "
          class="col-12 col-sm-6"
        ></q-input>

        <q-input
          type="textarea"
          readonly
          :model-value="alert.description"
          class="col-12"
        ></q-input>

        <q-input
          label="Tipo de alerta"
          readonly
          :model-value="alert.deliveryMethod"
          class="col-12 col-sm-6"
        ></q-input>

        <q-input
          label="Contacto de emergencia"
          readonly
          :model-value="alert.emergencyContact"
          class="col-12 col-sm-6"
        ></q-input>

        <q-input
          label="Reconocida por"
          readonly
          :model-value="
            alert?.acknowledgedBy?.displayName || alert?.acknowledgedBy?.email
          "
          class="col-12 col-sm-6"
        ></q-input>

        <q-input
          label="Reconocida en"
          readonly
          :model-value="translateDate(alert?.acknowledgedAt)"
          class="col-12 col-sm-6"
        ></q-input>

        <q-field label="Roles objetivo" class="col-12" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">
              <q-chip
                v-for="(delivery, idx) in alert.targetRoleIDs"
                :key="idx"
                >{{ delivery }}</q-chip
              >
            </div>
          </template>
        </q-field>

        <q-field
          v-if="relatedCase"
          label="Caso Relacionado"
          class="col-12"
          stack-label
        >
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">
              <case-card-vue class="q-mt-xs" :caseProp="relatedCase"></case-card-vue>
            </div>
          </template>
        </q-field>
      </q-card-section>
      <q-card-actions vertical>
        <q-btn
          icon="notifications_active"
          label="Reconocer"
          color="warning"
          @click="acknowledgeAlert"
          :disabled="!!alert.acknowledgedBy"
        ></q-btn>
      </q-card-actions>
    </q-card>

    <q-inner-loading
      :showing="!alert || isLoading"
      label="Cargando ..."
      label-class="text-primary"
      label-style="font-size: 1.1em"
    />
  </q-page>
</template>

<script lang="ts">
import { useAlert, AcknowledgeAlert } from 'src/composables/alerts/alerts';
import { defineComponent, toRefs, ref, computed } from 'vue';
import { getAuth } from 'firebase/auth';
import { useQuasar } from 'quasar';
import { User } from 'src/models/auth';
import { Timestamp } from '@firebase/firestore';
import { GetDocument } from 'src/composables/firebase/getDocument';
import { Case } from 'src/components/cases/models';
import CaseCardVue from 'src/components/cases/CaseCard.vue';

export default defineComponent({
  props: {
    alertID: {
      required: true,
      type: String,
    },
  },
  components: {
    CaseCardVue,
  },
  setup(props) {
    const { alertID } = toRefs(props);

    const { alert } = useAlert(alertID);

    const { notify } = useQuasar();

    const isLoading = ref(false);

    const reactiveCaseID = computed(() => {
      return alert.value?.relatedCaseID;
    });

    const { docData: relatedCase } = GetDocument<Case>(
      ref('cases'),
      reactiveCaseID
    );

    function translateDate(dateObject: Date | Timestamp | null | undefined) {
      if (!dateObject) {
        return null;
      }

      if ((dateObject as Timestamp).toDate) {
        return (dateObject as Timestamp).toDate().toLocaleString();
      }

      return (dateObject as Date).toLocaleString();
    }

    function acknowledgeAlert() {
      const user = getAuth().currentUser;

      if (!user) {
        notify({
          type: 'negative',
          message: 'No hay usuario logueado.',
        });
        return;
      }

      isLoading.value = true;

      const { uid, email, displayName }: User = user;

      AcknowledgeAlert(
        alertID.value,
        user ? { uid, email, displayName } : undefined
      )
        .catch((err) => {
          console.log(err);
          notify({
            type: 'negative',
            message: 'Error reconociendo alerta.',
          });
        })
        .finally(() => {
          isLoading.value = false;
        });
    }

    return {
      alert,
      acknowledgeAlert,
      translateDate,
      isLoading,
      relatedCase,
    };
  },
});
</script>

<style></style>

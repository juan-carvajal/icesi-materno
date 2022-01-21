<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="full-width" bordered>
      <q-card-section>
        <div class="text-h6 ellipsis">Crear Nueva Alerta ⚠️</div>
      </q-card-section>
      <q-form @submit.prevent="submit">
        <q-card-section class="row q-col-gutter-sm">
          <q-input
            class="col-12"
            type="text"
            label="Contacto de emergencia"
            outlined
            v-model="alert.emergencyContact"
            mask="phone"
            unmasked-value
            :rules="[(val) => !!val || 'Este campo es requerido']"
          ></q-input>
          <q-input
            class="col-12"
            type="textarea"
            label="Descripción"
            outlined
            maxlength="2500"
            counter
            v-model="alert.description"
            :rules="[(val) => !!val || 'Este campo es requerido']"
          ></q-input>
          <q-select
            class="col-12 col-sm-6"
            label="Roles"
            filled
            v-model="selectedRoles"
            :options="roles"
            option-label="name"
            clearable
            use-chips
            multiple
            :rules="[(val:object[]) => val.length > 0 || 'Este campo es requerido']"
          ></q-select>
          <q-select
            class="col-12 col-sm-6"
            label="Tipo de alerta"
            filled
            v-model="alert.deliveryMethod"
            :options="alertDeliveries"
            clearable
            :rules="[(val) => !!val || 'Este campo es requerido']"
          ></q-select>
          <template v-if="relatedCase">
            <div class="col-12">
              <q-separator></q-separator>
              <p class="text-caption q-my-sm">Caso relacionado:</p>
              <case-card-vue :caseProp="relatedCase"></case-card-vue>
            </div>
          </template>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-actions align="right">
          <q-btn
            color="negative"
            @click="onCancelClick"
            flat
            label="Cancelar"
          />
          <q-btn color="warning" type="submit" label="Crear" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';
import { useDialogPluginComponent, useQuasar } from 'quasar';
import { Alert, AlertDeliveryMethod } from 'src/models/alerts';
import { useRoles } from 'src/composables/auth/rolePermissions';
import { GetDocument } from 'src/composables/firebase/getDocument';
import { Role, User } from 'src/models/auth';
import { getAuth } from '@firebase/auth';
import { addDoc, collection } from '@firebase/firestore';
import { db } from 'src/boot/firebase';
import { Case } from '../cases/models';
import CaseCardVue from '../cases/CaseCard.vue';
export default defineComponent({
  emits: [...useDialogPluginComponent.emits],
  props: {
    relatedCaseID: {
      type: String,
      required: false,
    },
  },
  components: {
    CaseCardVue,
  },
  setup(props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();

    const { relatedCaseID } = toRefs(props);

    const caseCollectionName = ref('cases');

    const { notify } = useQuasar();

    const alert = ref<Alert>({
      description: '',
      targetRoleIDs: [],
      emergencyContact: '',
      deliveryMethod: AlertDeliveryMethod.SMS_ONLY,
    } as Alert);

    const { docData: relatedCase } = GetDocument<Case>(
      caseCollectionName,
      relatedCaseID
    );

    const selectedRoles = ref<Role[]>([]);

    const isLoading = ref(false);

    const { roles } = useRoles();

    function submit() {
      const user = getAuth().currentUser;

      if (!user) {
        notify({
          type: 'negative',
          message: 'No hay un usuario logueado.',
        });
        return;
      }

      isLoading.value = true;

      const alertUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      } as User;

      const newAlert = {
        ...alert.value,
        createdBy: alertUser,
        createdAt: new Date(),
        targetRoleIDs: selectedRoles.value.map((i) => i.id),
      } as Alert;

      if (relatedCase.value) {
        newAlert.relatedCaseID = relatedCase.value.ID;
      }

      addDoc(collection(db, 'alerts'), newAlert)
        .then(() => {
          notify({
            type: 'positive',
            message: 'Alerta creada con éxito',
          });
          onDialogOK();
        })
        .catch((err) => {
          console.log(err);
          notify({
            type: 'negative',
            message: 'Error creando alerta.',
          });
        })
        .finally(() => {
          isLoading.value = false;
        });
    }

    return {
      dialogRef,
      onDialogHide,
      onCancelClick: onDialogCancel,
      alert,
      roles,
      selectedRoles,
      alertDeliveries: Object.values(AlertDeliveryMethod),
      isLoading,
      submit,
      relatedCase,
    };
  },
});
</script>

<style></style>

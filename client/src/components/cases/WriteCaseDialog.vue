<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="full-width" bordered>
      <q-card-section>
        <div class="text-h6 ellipsis">
          {{ caseState.ID ? 'Editar Caso' : 'Crear Caso' }}:
          {{ caseState.title }}
        </div>
      </q-card-section>
      <q-form @submit.prevent="onOKClick">
        <q-card-section class="row q-col-gutter-sm">
          <q-select
            class="col-12"
            label="Tipo de caso"
            :options="caseTypes"
            v-model="caseState.type"
            :rules="[(val) => !!val || 'Este campo es requerido']"
            filled
          ></q-select
        ></q-card-section>
        <q-separator inset=""></q-separator>
        <q-card-section class="row q-col-gutter-sm">
          <q-input
            class="col-12"
            type="text"
            label="Título"
            outlined
            v-model="caseState.title"
            maxlength="50"
            counter
            :rules="[(val) => !!val || 'Este campo es requerido']"
          ></q-input>
          <q-input
            class="col-12"
            type="textarea"
            label="Descripción"
            outlined
            maxlength="2500"
            counter
            v-model="caseState.description"
          ></q-input>
          <q-select
            class="col-12 col-sm-6"
            label="Responsable"
            filled
            v-model="caseState.assignee"
            @filter="filterFn"
            :options="assigneeOptions"
            option-label="email"
            clearable
          ></q-select>
          <q-select
            class="col-12 col-sm-6"
            label="Prioridad"
            filled
            :options="casePriorities"
            map-options
            v-model="caseState.priority"
            emit-value
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                  <q-icon :color="scope.opt.color" :name="scope.opt.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>

            <template v-if="!Number.isNaN(caseState?.priority)" v-slot:prepend>
              <q-icon
                :color="getCasePriorityProps(caseState.priority).color"
                :name="getCasePriorityProps(caseState.priority).icon"
              />
            </template>
          </q-select>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-actions align="right">
          <q-btn
            color="negative"
            @click="onCancelClick"
            flat
            label="Cancelar"
          />
          <q-btn color="primary" type="submit" label="Crear" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useDialogPluginComponent, useQuasar } from 'quasar';
import { defineComponent, PropType, computed, ref, toRefs } from 'vue';
import { Case, CaseType, CasePriority, CaseState, CaseUser } from './models';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'boot/firebase';

export default defineComponent({
  props: {
    targetCase: {
      type: Object as PropType<Case>,
      required: true,
    },
  },
  emits: [...useDialogPluginComponent.emits],
  setup(props) {
    const caseTypes = Object.values(CaseType);
    const caseStates = Object.values(CaseState);
    const assigneeOptions = ref<Array<CaseUser>>([]);
    const { targetCase } = toRefs(props);
    const caseState = ref(targetCase.value);
    const { notify, loading } = useQuasar();

    const functions = getFunctions();
    const getAssignees = httpsCallable<Record<string, never>, Array<CaseUser>>(
      functions,
      'users-GetCaseAssignableUsers'
    );

    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();

    function getCasePriorityProps(casePriority: CasePriority) {
      switch (casePriority) {
        case CasePriority.LOW:
          return {
            color: 'blue',
            icon: 'low_priority',
            label: 'Prioridad baja',
            value: casePriority,
          };
        case CasePriority.NORMAL:
          return {
            color: 'green',
            icon: 'lens',
            label: 'Prioridad normal',
            value: casePriority,
          };
        case CasePriority.HIGH:
          return {
            color: 'red',
            icon: 'priority_high',
            label: 'Prioridad alta',
            value: casePriority,
          };
        default:
          return {
            color: 'purple',
            icon: 'question_mark',
            label: 'Prioridad desconocida',
            value: casePriority,
          };
      }
    }

    const casePriorities = computed(() =>
      Object.keys(CasePriority)
        .filter((f) => !isNaN(Number(f)))
        .map((i) => getCasePriorityProps(Number(i) as CasePriority))
    );

    const createCase = () => {
      return addDoc(collection(db, 'cases'), caseState.value)
        .then(() => {
          notify({
            type: 'positive',
            message: 'Caso creado con éxito',
          });
        })
        .catch((err) => {
          console.log(err);
          notify({
            type: 'negative',
            message: 'Error creando caso.',
          });
        });
    };

    return {
      dialogRef,
      onDialogHide,
      onOKClick() {
        loading.show();
        createCase().finally(() => {
          loading.hide();
          onDialogOK();
        });
      },
      onCancelClick: onDialogCancel,
      caseTypes,
      caseStates,
      caseState,
      casePriorities,
      getCasePriorityProps,
      assigneeOptions,
      filterFn(val: unknown, update: () => void) {
        if (assigneeOptions.value.length !== 0) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          update();
          return;
        }
        void getAssignees()
          .then((caseUsers) => {
            assigneeOptions.value = caseUsers.data;
          })
          .then(() => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            update();
          });
      },
    };
  },
});
</script>

<template>
  <q-page class="q-ma-md column">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="cases" />
      <q-toolbar-title> Casos </q-toolbar-title>

      <q-space></q-space>

      <q-btn
        v-if="hasAccess('alerts.write')"
        flat
        round
        icon="add"
        @click="createNewCase"
      ></q-btn>
    </q-toolbar>

    <div class="row q-gutter-sm q-mb-sm">
      <q-select
        label="Responsable"
        v-model="selectedEmails"
        multiple
        :options="availableEmails"
        counter
        :max-values="10"
        stack-label
        dense
        outlined
        style="width: 250px"
        clearable
      />

      <q-select
        v-model="caseTypeCategory"
        :options="caseTypeCategoryOption"
        stack-label
        dense
        outlined
        emit-value
        label="Estado"
      />
    </div>

    <div class="row q-gutter-sm col-grow">
      <q-linear-progress query v-if="isLoading" />
      <q-card
        class="col bg-grey-2"
        flat
        v-for="caseState in caseStates"
        :key="caseState"
      >
        <q-card-section>
          <div class="text-subtitle2 text-grey text-center ellipsis">
            {{ caseState }}
          </div>
        </q-card-section>

        <q-separator></q-separator>

        <draggable
          :list="filteredCases(caseState)"
          class="column q-gutter-y-sm q-pa-sm"
          tag="div"
          :key="`column-${caseState}`"
          :group="{ name: caseState, pull: true, put: true }"
          item-key="ID"
          :animation="120"
          @change="(e) => checkAdd(e, caseState)"
        >
          <template #item="{ element }">
            <case-card
              @click="editCase(element)"
              class="cursor-pointer"
              :caseProp="element"
            ></case-card>
          </template>
        </draggable>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, inject, Ref, computed, watch } from 'vue';
import {
  Case,
  CaseType,
  CaseState,
  CasePriority,
} from 'components/cases/models';

import CaseCard from 'components/cases/CaseCard.vue';
import useCasesRepositories, {
  CaseTypeCategory,
} from 'src/composables/cases/caseRepositories';
import draggable from 'vuedraggable';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { useQuasar } from 'quasar';
import { useStore } from 'src/store/index';
import WriteCaseDialog from 'src/components/cases/WriteCaseDialog.vue';
import { User } from 'firebase/auth';
import useUserAuthorization from 'src/composables/user/userAuthorization';

interface DragEventInput {
  added?: { element: Case };
  moved?: { element: Case };
  removed?: { element: Case };
}

export default defineComponent({
  components: {
    CaseCard,
    draggable,
  },
  setup() {
    const $q = useQuasar();

    const store = useStore();

    const caseStates = ref(Object.values(CaseState));

    const caseTypeCategory = ref(CaseTypeCategory.ACTIVE);
    const selectedEmails = ref<Array<string>>([]);

    const currentUser = inject('currentUser') as Ref<User | undefined>;

    const { hasAccess } = useUserAuthorization(currentUser);

    const { cases, isLoading } = useCasesRepositories(
      selectedEmails,
      caseTypeCategory
    );

    function createNewCase() {
      const newCase: Case = {
        title: '',
        type: CaseType.ADMINISTRATIVE,
        state: CaseState.TODO,
        created: new Date(),
        lastUpdateState: new Date(),
        reported: {
          email: store.state.auth.email,
          uid: store.state.auth.uid,
        },
        priority: CasePriority.NORMAL,
      };

      openDialog(newCase);
    }

    function openDialog(targetCase: Case) {
      $q.dialog({
        component: WriteCaseDialog,
        componentProps: {
          targetCase: targetCase,
        },
      });
    }

    function editCase(targetCase: Case) {
      openDialog(targetCase);
    }

    function filteredCases(type: CaseState) {
      return cases.value.filter((i) => i.state === type);
    }

    function checkAdd(event: DragEventInput, caseState: CaseState) {
      if (!event.added) {
        return;
      }

      if (!event?.added?.element?.ID) {
        return;
      }

      void updateDoc(doc(db, 'cases', event.added.element.ID), {
        state: caseState,
      }).catch((err) => {
        console.log(err);
      });
    }

    watch(selectedEmails, () => {
      if (!selectedEmails.value) {
        return;
      }

      if (
        selectedEmails.value.includes('Sin asignar') &&
        selectedEmails.value.length > 1
      ) {
        selectedEmails.value = ['Sin asignar'];
      }
    });

    const availableEmails = computed(() => {
      if (!cases.value) {
        return [];
      }

      if (selectedEmails.value && selectedEmails.value.includes('Sin asignar')) {
        return ['Sin asignar'];
      }

      const emails = Array.from(
        new Set(
          cases.value
            .filter((c) => !!c.assignee?.email)
            .map((c) => c.assignee?.email ?? '')
        )
      );

      emails.push('Sin asignar');

      return emails;
    });

    return {
      caseStates,
      isLoading,
      cases,
      filteredCases,
      checkAdd,
      openDialog,
      createNewCase,
      editCase,
      hasAccess,
      caseTypeCategoryOption: Object.values(CaseTypeCategory).map((i) => {
        return {
          label: i,
          value: i,
        };
      }),
      caseTypeCategory,
      availableEmails,
      selectedEmails,
    };
  },
});
</script>

<style></style>

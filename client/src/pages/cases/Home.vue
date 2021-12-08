<template>
  <q-page class="q-ma-md column">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="cases" />
      <q-toolbar-title> Casos </q-toolbar-title>

      <q-space></q-space>

      <q-btn flat round icon="add"></q-btn>
    </q-toolbar>

    <div class="row q-gutter-sm col-grow">
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

        <q-card-section class="column q-gutter-y-sm q-pa-sm">
          <case-card v-for="i in Math.round(Math.random()*10)" :key="i" :caseProp="testCase"></case-card>
          <case-card :caseProp="testCase"></case-card>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  Case,
  CaseType,
  CaseState,
  CasePriority,
} from 'components/cases/models';
import CaseCard from 'components/cases/CaseCard.vue';
export default defineComponent({
  components: {
    CaseCard,
  },
  setup() {
    const caseStates = ref(Object.values(CaseState));

    const testCase: Case = {
      ID: '1',
      title: 'test test test test test test test test test test',
      type: CaseType.ADMINISTRATIVE,
      state: CaseState.TODO,
      created: new Date(),
      lastUpdateState: new Date(),
      assignee: {
        email: 'egeffffg',
        uid: 'fff',
      },
      reported: {
        email: 'egeg',
        uid: 'fff',
      },
      priority: CasePriority.HIGH,
    };

    return { caseStates, testCase };
  },
});
</script>

<style></style>

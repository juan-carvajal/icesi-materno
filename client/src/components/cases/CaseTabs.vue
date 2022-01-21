<template>
  <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
  >
    <q-tab name="comments" label="Comentarios" />
    <q-tab disable name="history" label="Historial" />
    <q-tab name="alerts" label="Alertas" />
  </q-tabs>

  <q-separator />

  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="comments">
      <case-comment-manager-vue :caseID="caseID"></case-comment-manager-vue>
    </q-tab-panel>

    <q-tab-panel name="history">
      <div class="text-h6">Alarms</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="alerts">
      <!-- <q-scroll-area style="height: 200px" class="full-width"> -->
        <q-list dense separator>
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
              <q-item-label caption lines="3">{{
                alert.description
              }}</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>{{
                'Creada ' + getTimeInterval(handleFirebaseDate(alert.createdAt))
              }}</q-item-label>
              <q-badge
                class="text-bold text-caption q-my-xs"
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
      <!-- </q-scroll-area> -->
    </q-tab-panel>
  </q-tab-panels>
</template>

<script lang="ts">
import { where } from 'firebase/firestore';
import { useAlerts } from 'src/composables/alerts/alerts';
import { getTimeInterval, handleFirebaseDate } from 'src/utils/date';
import { defineComponent, ref, toRefs } from 'vue';
import CaseCommentManagerVue from './CaseCommentManager.vue';
export default defineComponent({
  props: {
    caseID: {
      type: String,
      required: true,
    },
  },
  components:{
    CaseCommentManagerVue
  },
  setup(props) {
    const tab = ref<string>();

    const { caseID } = toRefs(props);

    const { alerts } = useAlerts(
      50,
      where('relatedCaseID', '==', caseID.value)
    );

    return { tab, alerts, getTimeInterval, handleFirebaseDate };
  },
});
</script>

<style></style>

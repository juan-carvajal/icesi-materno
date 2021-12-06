<template>
  <q-card style="max-width:100%;">
    <q-card-section class="q-pa-sm">
      <p class="q-mb-none ellipsis-3-lines">{{ caseProp.title }}</p>
      <q-badge
        text-color="black"
        :style="{ backgroundColor: getBackgroundColor(caseProp.type) }"
      >
        {{ caseProp.type }}
      </q-badge>
      <div class="q-gutter-x-sm">
        <q-icon :name="casePriorityProps.icon" :color="casePriorityProps.color">
          <q-tooltip>
            {{ casePriorityProps.tooltip }}
          </q-tooltip>
        </q-icon>

        <q-avatar
          size="xs"
          :style="{
            backgroundColor: getBackgroundColor(caseProp.assignee.email),
          }"
          >{{ caseProp.assignee.email[0].toUpperCase() }}
          <q-tooltip>
            Asignado a: {{ caseProp.assignee.email }}
          </q-tooltip>
        </q-avatar>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Case, CasePriority } from './models';
import { PropType, defineComponent } from 'vue';
import { getBackgroundColor } from 'src/utils/color';
export default defineComponent({
  props: {
    caseProp: {
      type: Object as PropType<Case>,
      required: true,
    },
  },
  data() {
    return {
      test: 2,
    };
  },
  setup() {
    return { getBackgroundColor };
  },
  computed: {
    casePriorityProps() {
      switch (this.caseProp.priority) {
        case CasePriority.LOW:
          return {
            color: 'blue',
            icon: 'low_priority',
            tooltip: 'Prioridad baja',
          };
        case CasePriority.NORMAL:
          return { color: 'green', icon: 'lens', tooltip: 'Prioridad normal' };
        case CasePriority.HIGH:
          return {
            color: 'red',
            icon: 'priority_high',
            tooltip: 'Prioridad alta',
          };
        default:
          return {};
      }
    },
  },
});
</script>

<style lang="scss" scoped>

</style>

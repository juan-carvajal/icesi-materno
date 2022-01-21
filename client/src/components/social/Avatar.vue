<template>
  <q-avatar
    :style="{
      backgroundColor: getBackgroundColor(email ?? ''),
    }"
    class="text-black"
    >{{ (email ?? 'A').toUpperCase()[0] }}
  </q-avatar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { getBackgroundColor } from 'src/utils/color';
export default defineComponent({
  props: {
    email: {
      type: String,
      required: false,
    },
  },
  setup() {
    return { getBackgroundColor };
  },
});
</script>

<style></style>

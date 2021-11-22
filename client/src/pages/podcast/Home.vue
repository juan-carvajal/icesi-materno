<template>
  <q-page>
    <q-btn @click="openDialog" label="create"></q-btn>
    <q-list> </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import { Podcast } from 'src/models/podcast';
import CreateDialog from './Create.vue';
export default defineComponent({
  setup() {
    const $q = useQuasar();

    function openDialog() {
      const podcast: Podcast = {
        title: '',
        description: '',
      };

      $q.dialog({
        component: CreateDialog,
        componentProps: {
          podcast,
        },
      });
    }

    return {openDialog}
  },
  methods: {},
});
</script>

<style lang="ts"></style>

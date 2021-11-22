/* eslint-disable @typescript-eslint/no-unsafe-assignment */
<template>
  <q-page class="flex flex-center">
    <div class="fit">
      <q-table
        title="Casos"
        :rows="rows"
        class="q-ma-md"
        :columns="columns"
        row-key="name"
        :filter="filter"
        v-model:pagination="pagination"
        :rows-per-page-options="rowsPerPageOptions"
      >
        <template v-slot:body-cell-avatarURL="props">
          <q-td :props="props">
            <q-avatar>
              <q-img :src="props.value"></q-img>
            </q-avatar>
          </q-td>
        </template>
      </q-table>
    </div>
    <!-- <av-line
      :line-width="2"
      line-color="lime"
      audio-src="sample-audio.mp3"
      ref="exRef"
    ></av-line> -->
    <audio ref="foo" src="sample-audio.mp3"></audio>
    <av-waveform
      :line-width="2"
      line-color="lime"
      canv-class="full-width"
      ref-link="foo"
      v-if="foo"
      playtime-font-family="Roboto"
    ></av-waveform>
    <q-btn icon="play_arrow" @click="playFile"></q-btn>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import { ref, computed, watch, watchEffect } from 'vue';
import * as faker from 'faker';

const numberOfFakes = 100;

interface FakeCaseData {
  date: Date;
  uuid: string;
  birthDate: Date;
  avatarURL: string;
  assignedDoctor: string;
  description: string;
  patientName: string;
}

const rows: FakeCaseData[] = [];

for (let index = 0; index < numberOfFakes; index++) {
  rows.push({
    birthDate: faker.date.between(1980, 2005),
    uuid: faker.datatype.uuid(),
    date: faker.date.recent(25),
    avatarURL: faker.image.avatar(),
    assignedDoctor: faker.name.findName(),
    patientName: faker.name.findName(undefined, undefined, 1),
    description: faker.lorem.paragraph(),
  });
}

export default defineComponent({
  setup() {
    const $q = useQuasar();

    const foo = ref<HTMLAudioElement>();

    const exRef = ref(null);

    watchEffect(
      () => {
        console.log(foo.value);
        console.log(exRef.value); // => <div>This is a root element</div>
        if (foo.value) {
          void foo.value.play();
        }
      },
      {
        flush: 'post',
      }
    );

    function playFile(){
      if(!foo.value){
        return
        }

        void foo.value.play()

      }

    function getItemsPerPage() {
      if ($q.screen.lt.sm) {
        return 3;
      }
      if ($q.screen.lt.md) {
        return 6;
      }
      return 9;
    }

    const filter = ref('');
    const pagination = ref({
      page: 1,
      rowsPerPage: getItemsPerPage(),
    });

    watch(
      () => $q.screen.name,
      () => {
        pagination.value.rowsPerPage = getItemsPerPage();
      }
    );

    return {
      exRef,
      rows,
      foo,
      filter,
      pagination,
      playFile,
      columns: [
        { name: 'uuid', label: 'ID', field: 'uuid' },
        {
          name: 'date',
          label: 'Fecha',
          field: 'date',
          format: (val: Date) => `${val.toISOString()}`,
        },
        { name: 'patientName', label: 'Paciente', field: 'patientName' },
        { name: 'avatarURL', label: 'Avatar', field: 'avatarURL' },
        {
          name: 'birthDate',
          label: 'Fecha nacimiento',
          field: 'birthDate',
          format: (val: Date) => `${val.toISOString()}`,
        },

        { name: 'assignedDoctor', label: 'Medico', field: 'assignedDoctor' },
        {
          name: 'description',
          label: 'Descripción',
          field: 'description',
          format: (val: string) =>
            val.length < 25 ? val.length : val.substring(0, 22) + '...',
        },
      ],

      cardContainerClass: computed(() => {
        return $q.screen.gt.xs
          ? 'grid-masonry grid-masonry--' + ($q.screen.gt.sm ? '3' : '2')
          : null;
      }),

      rowsPerPageOptions: computed(() => {
        return $q.screen.gt.xs ? ($q.screen.gt.sm ? [3, 6, 9] : [3, 6]) : [3];
      }),
    };
  },
});
</script>

<style lang="sass">
.grid-masonry
  flex-direction: column
  height: 700px

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
</style>
<style lang="scss">
@import '~assets/kanban.scss';
</style>

<template>
  <q-page class="q-ma-md">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="podcasts" />
      <q-toolbar-title> Podcasts </q-toolbar-title>

      <q-space></q-space>

      <q-btn @click="openDialog" flat round icon="add"></q-btn>
    </q-toolbar>

    <q-input v-model="search" filled type="search">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-list>
      <podcast-line
        @click="selectPodcast(podcast)"
        v-for="podcast in podcasts"
        :key="podcast.ID"
        :podcast="podcast"
      ></podcast-line>
    </q-list>

    <q-dialog v-model="podcastDialogOpen" seamless position="bottom">
      <podcast-player :podcast="selectedPodcast"></podcast-player>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { Podcast } from 'src/models/podcast';
import CreateDialog from './Create.vue';
import usePodcastRepositories from 'src/composables/podcast/podcastRepositories';
import PodcastLine from 'components/podcast/PodcastLine.vue';
import PodcastPlayer from 'components/podcast/PodcastPlayer.vue';
export default defineComponent({
  components: {
    PodcastLine,
    PodcastPlayer,
  },
  setup() {
    const $q = useQuasar();

    const audioRef = ref<HTMLAudioElement>();

    const selectedPodcast = ref<Podcast>();

    const { podcasts } = usePodcastRepositories();

    function openDialog() {
      const podcast: Podcast = {
        title: '',
        description: '',
        creationDate: new Date(),
      };

      $q.dialog({
        component: CreateDialog,
        componentProps: {
          podcast,
        },
      });
    }

    return {
      openDialog,
      podcasts,
      audioRef,
      selectedPodcast,
    };
  },
  methods: {
    selectPodcast(podcast: Podcast) {
      this.selectedPodcast = podcast;
      this.podcastDialogOpen = true;
    },
  },
  data() {
    return {
      search: '',
      podcastDialogOpen: false,
    };
  },
});
</script>

<style lang="ts"></style>

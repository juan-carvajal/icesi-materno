<template>
  <q-page class="q-ma-md">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="podcasts" />
      <q-toolbar-title> Podcasts </q-toolbar-title>

      <q-space></q-space>

      <q-btn
        @click="openDialog"
        flat
        round
        icon="add"
        v-if="hasAccess('podcasts.write')"
      ></q-btn>
    </q-toolbar>

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
import { defineComponent, ref, inject, Ref } from 'vue';
import { useQuasar } from 'quasar';
import { Podcast } from 'src/models/podcast';
import CreateDialog from './Create.vue';
import usePodcastRepositories from 'src/composables/podcast/podcastRepositories';
import PodcastLine from 'components/podcast/PodcastLine.vue';
import PodcastPlayer from 'components/podcast/PodcastPlayer.vue';
import { User } from 'firebase/auth';
import useUserAuthorization from 'src/composables/user/userAuthorization';
export default defineComponent({
  components: {
    PodcastLine,
    PodcastPlayer,
  },
  setup() {
    const $q = useQuasar();

    const currentUser = inject('currentUser') as Ref<User | undefined>;

    const { hasAccess } = useUserAuthorization(currentUser);

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
      hasAccess,
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

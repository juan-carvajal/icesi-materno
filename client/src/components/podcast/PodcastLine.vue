<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-avatar rounded>
        <q-img
          v-if="podcast.imageURL"
          placeholder-src="icons/favicon-32x32.png"
          fit="fill"
          class="fit"
          :src="imageURL"
        ></q-img>
        <q-img
          v-else
          fit="fill"
          class="fit"
          src="icons/favicon-32x32.png"
        ></q-img>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-bold">{{ podcast.title }}</q-item-label>
      <q-item-label caption lines="2">{{ podcast.description }}</q-item-label>
    </q-item-section>
    <!-- TODO -->
    <!-- <q-item-section side>
      <q-icon name="turned_in_not"></q-icon>
    </q-item-section> -->
    <q-item-section side>
      <q-btn @click.stop="openEditDialog" icon="edit" flat round></q-btn>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Podcast } from 'src/models/podcast';
import { defineComponent, PropType, computed } from 'vue';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from 'boot/firebase';
import { useStore } from 'src/store';
import EditPodcastDialog from 'src/pages/podcast/Create.vue';
export default defineComponent({
  props: {
    podcast: {
      type: Object as PropType<Podcast>,
      required: true,
    },
  },
  data() {
    return {
      imageURL: '',
    };
  },
  setup() {
    const store = useStore();
    const userPermissions = computed(() => {
      return store.state.auth?.permissions ?? [];
    });

    return { userPermissions };
  },
  mounted() {
    if (!this.podcast.imageURL) {
      return;
    }
    void getDownloadURL(ref(storage, this.podcast.imageURL)).then((url) => {
      this.imageURL = url;
    });
  },
  watch: {
    'podcast.imageURL': {
      handler(value: string) {
        if (!value) {
          return;
        }

        void getDownloadURL(ref(storage, this.podcast.imageURL)).then((url) => {
          this.imageURL = url;
        });
      },
    },
  },
  methods: {
    openEditDialog() {
      this.$q.dialog({
        component: EditPodcastDialog,
        componentProps: {
          podcast: this.podcast,
        },
      });
    },
  },
});
</script>

<style></style>

<template>
  <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <q-img v-if="podcast.imageURL" placeholder-src="icons/favicon-32x32.png" fit="fill" class="fit" :src="imageURL"></q-img>
            <q-img v-else fit="fill" class="fit" src="icons/favicon-32x32.png"></q-img>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">{{podcast.title}}</q-item-label>
          <q-item-label caption lines="2">{{podcast.description}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="turned_in_not"></q-icon>
        </q-item-section>
      </q-item>
</template>

<script lang="ts">
import { Podcast } from 'src/models/podcast';
import { defineComponent, PropType } from 'vue';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from 'boot/firebase';
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
  mounted() {
    if (!this.podcast.imageURL) {
      return;
    }
    void getDownloadURL(ref(storage, this.podcast.imageURL)).then((url) => {this.imageURL=url});
  },
});
</script>

<style></style>

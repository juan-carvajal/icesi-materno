<template>
  <q-card style="max-width: 70vw;">
    <q-card-section class="row items-center no-wrap">
      <div>
        <div class="text-weight-bold">{{podcast.title}}</div>
        <div class="text-grey">{{podcast.description}}</div>
      </div>

      <q-space />

      <q-btn flat round @click="playAudio" icon="play_arrow" />
      <q-btn flat round @click="stopAudio" icon="pause" />
      <q-btn flat round icon="close" v-close-popup />
    </q-card-section>

    <q-card-section>
      <controlled-audio-wave-form
        ref="waveFormRef"
        :audioSource="audioLinkRef"
      ></controlled-audio-wave-form>
    </q-card-section>

    <q-inner-loading :showing="!audioLinkRef">
      <q-spinner-puff size="50px" color="primary" />
    </q-inner-loading>
  </q-card>
</template>

<script lang="ts">
import { getDownloadURL, ref as firestoreRef } from 'firebase/storage';
import { Podcast } from 'src/models/podcast';
import { defineComponent, PropType, ref } from 'vue';
import { storage } from 'boot/firebase';
import ControlledAudioWaveForm from 'components/podcast/ControlledAudioWaveForm.vue';

interface AudioPlayer {
  playAudio(): void;
  stopAudio(): void;
}

export default defineComponent({
  components: {
    ControlledAudioWaveForm,
  },
  props: {
    podcast: {
      type: Object as PropType<Podcast>,
      required: true,
    },
  },
  setup() {
    const audioLinkRef = ref<string>();

    const waveFormRef = ref<AudioPlayer>();

    function playAudio() {
      waveFormRef.value?.playAudio();
    }

    function stopAudio() {
      waveFormRef.value?.stopAudio();
    }

    return { audioLinkRef, playAudio, stopAudio, waveFormRef };
  },
  watch: {
    podcast: {
      immediate: true,
      handler(value: Podcast) {
        if (!value) {
          return;
        }

        this.audioLinkRef = '';

        void this.stopAudio();

        getDownloadURL(firestoreRef(storage, value.mediaURL))
          .then((url) => {
            this.audioLinkRef = url;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  },
});
</script>

<style></style>

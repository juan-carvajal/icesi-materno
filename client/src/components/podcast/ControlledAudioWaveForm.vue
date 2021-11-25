<template>
  <div v-if="audioSource">
    <audio
      ref="audioRef"
      style="display: none"
      crossorigin="anonymous"
      :src="audioSource"
      autoplay
    ></audio>
    <av-waveform
      line-color="lime"
      canv-class="fit"
      ref-link="audioRef"
      playtime-font-family="Roboto"
    ></av-waveform>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: {
    audioSource: {
      type: String,
      required: true,
    },
  },
  setup() {
    const audioRef = ref<HTMLAudioElement>();

    function playAudio() {
      if (audioRef.value) {
        audioRef.value.play().catch((err) => {
          console.log(err);
          console.log(audioRef.value);
        });
      }
    }

    function stopAudio() {
      if (audioRef.value) {
        void audioRef.value.pause();
      }
    }

    return { audioRef, playAudio, stopAudio };
  },
  watch: {
    audioSource: {
      immediate: true,
      handler(value: string) {
        if (!value) {
          return;
        }

        this.playAudio();
      },
    },
  },
});
</script>

<style></style>

<template>
  <div>
    <q-carousel
      v-model="index"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      padding
      arrows
      thumbnails
      infinite
      height="50vh"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide @click="showIndex(idx)" class="cursor-pointer" v-for="(source,idx) in imageSources" :key="idx" :name="idx" :img-src="source">
      </q-carousel-slide>
    </q-carousel>
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      :visible="visible"
      :imgs="imageSources"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
export default defineComponent({
  props: {
    imageSources: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      index: 0,
      visible: false,
    };
  },
  methods: {
    handleHide() {
      this.visible = false;
    },
    showIndex(index:number){
      this.index = index;
      this.visible = true;
    }
  },
});
</script>

<style></style>

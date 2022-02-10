<template>
  <q-page class="q-ma-md">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="insights" />
      <q-toolbar-title> Infografiás </q-toolbar-title>

      <q-space></q-space>

      <q-btn
        flat
        round
        icon="add"
        v-if="hasAccess('infographics.write')"
        @click="openDialog"
      ></q-btn>
    </q-toolbar>

    <image-viewer-vue
      ref="imageViewerRef"
      :imageSources="infographicImageURLs"
    ></image-viewer-vue>

    <q-separator class="q-my-md"></q-separator>
    <q-list v-for="(infographic, id) in infographics" :key="id">
      <infographic-line-vue
        @clickedInfographic="handleClickInfoList"
        :infographic="infographic"
      ></infographic-line-vue>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import useUserAuthorization from 'src/composables/user/userAuthorization';
import { computed, defineComponent, inject, Ref, watch, ref } from 'vue';
import { User } from 'firebase/auth';
import { useQuasar } from 'quasar';
import { Infographic } from 'src/models/infographics';
import CreateVue from './Create.vue';
import { GetDocuments } from 'src/composables/firebase/getDocument';
import { orderBy } from '@firebase/firestore';
import InfographicLineVue from 'src/components/infographics/InfographicLine.vue';
import ImageViewerVue from 'src/components/images/ImageViewer.vue';
import { getDownloadURL, ref as fbStorageRef } from '@firebase/storage';
import { storage } from 'src/boot/firebase';

interface IImageViewer {
  showIndex: (index: number) => void;
}

export default defineComponent({
  components: {
    InfographicLineVue,
    ImageViewerVue,
  },
  setup() {
    const currentUser = inject('currentUser') as Ref<User | undefined>;

    const { docs: infographicMap } = GetDocuments<Infographic>(
      'infographics',
      orderBy('creationDate', 'desc')
    );

    const imageViewerRef = ref<IImageViewer>();

    const infographics = computed(() => {
      if (!infographicMap.value) {
        return [];
      }

      const values: Infographic[] = [];

      for (const key in infographicMap.value) {
        values.push({ ...infographicMap.value[key], ID: key });
      }

      return values;
    });

    const infographicImageURLs = ref<string[]>([]);

    watch(
      infographics,
      async () => {
        infographicImageURLs.value = await Promise.all(
          infographics.value.map((i) =>
            getDownloadURL(fbStorageRef(storage, i.imageURL))
          )
        ).catch((err) => {
          console.log(err);
          return [];
        });
      },
      { immediate: true }
    );

    const $q = useQuasar();

    const { hasAccess } = useUserAuthorization(currentUser);

    function openDialog() {
      const infographic: Infographic = {
        title: '',
        description: '',
        creationDate: new Date(),
      };

      $q.dialog({
        component: CreateVue,
        componentProps: {
          infographic,
        },
      });
    }

    function handleClickInfoList(infoID: string) {
      const idx = infographics.value.findIndex((i) => i.ID === infoID);

      if (idx === -1) {
        return;
      }

      if (!imageViewerRef.value) {
        return;
      }

      imageViewerRef.value.showIndex(idx);
    }

    return {
      hasAccess,
      openDialog,
      infographics,
      infographicImageURLs,
      imageViewerRef,
      handleClickInfoList,
    };
  },
});
</script>

<style></style>

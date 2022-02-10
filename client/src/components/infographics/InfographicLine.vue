<template>
  <q-slide-item
    right-color="red"
    @right="(e) => openDeleteDialog(infographic.ID ?? '', e)"
  >
    <template v-if="hasAccess('infographics.write')" v-slot:right>
      <q-icon name="delete" />
    </template>

    <q-item
      clickable
      v-ripple
      @click="$emit('clickedInfographic', infographic.ID)"
    >
      <q-item-section avatar>
        <q-avatar rounded>
          <q-img
            v-if="infographic.imageURL"
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
        <q-item-label class="text-bold">{{ infographic.title }}</q-item-label>
        <q-item-label caption lines="2">{{
          infographic.description
        }}</q-item-label>
      </q-item-section>
      <!-- TODO -->
      <!-- <q-item-section side>
      <q-icon name="turned_in_not"></q-icon>
    </q-item-section> -->
      <q-item-section v-if="hasAccess('infographics.write')" side>
        <q-btn @click.stop="openEditDialog" icon="edit" flat round></q-btn>
      </q-item-section>
    </q-item>
  </q-slide-item>
</template>

<script lang="ts">
import { Infographic } from 'src/models/infographics';
import { defineComponent, PropType, computed, inject, Ref } from 'vue';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from 'boot/firebase';
import { useStore } from 'src/store';
import EditInfographicDialog from 'src/pages/infographic/Create.vue';
import { deleteDoc, doc } from '@firebase/firestore';
import { User } from 'firebase/auth';
import useUserAuthorization from 'src/composables/user/userAuthorization';
export default defineComponent({
  props: {
    infographic: {
      type: Object as PropType<Infographic>,
      required: true,
    },
  },
  emits: ['clickedInfographic'],
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

    const currentUser = inject('currentUser') as Ref<User | undefined>;
    const { hasAccess } = useUserAuthorization(currentUser);

    return { userPermissions, hasAccess };
  },
  mounted() {
    if (!this.infographic.imageURL) {
      return;
    }
    void getDownloadURL(ref(storage, this.infographic.imageURL)).then((url) => {
      this.imageURL = url;
    });
  },
  watch: {
    'infographic.imageURL': {
      handler(value: string) {
        if (!value) {
          return;
        }

        void getDownloadURL(ref(storage, this.infographic.imageURL)).then(
          (url) => {
            this.imageURL = url;
          }
        );
      },
    },
  },
  methods: {
    openEditDialog() {
      this.$q.dialog({
        component: EditInfographicDialog,
        componentProps: {
          infographic: this.infographic,
        },
      });
    },
    openDeleteDialog(infographicID: string, e: { reset: () => void }) {
      this.$q
        .dialog({
          title: 'Acción destructiva ⚠️',
          message:
            'Esta acción no se puede deshacer. Se eliminara la infografía definitivamente. ¿Esta seguro que desea continuar?',
          cancel: 'Cancelar',
          persistent: true,
        })
        .onOk(() => {
          e.reset();
          this.$q.loading.show();
          deleteDoc(doc(db, 'infographics', infographicID))
            .then(() => {
              this.$q.notify({
                type: 'positive',
                message: 'Infografía eliminada con éxito',
              });
            })
            .catch((err) => {
              console.log(err);
              this.$q.notify({
                type: 'negative',
                message: 'Error eliminando Infografía.',
              });
            })
            .finally(() => {
              this.$q.loading.hide();
            });
        });
    },
  },
});
</script>

<style></style>

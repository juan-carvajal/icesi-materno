<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="full-width" bordered>
      <q-form @submit.prevent="handleFormSubmit">
        <q-card-section>
          <div class="text-h6">
            {{ infographic.ID ? 'Editando Infografiá' : 'Nueva Infografiá' }}:
            {{ internalInfographic.title }}
          </div>
        </q-card-section>

        <q-card-section class="row wrap">
          <q-card-section class="col-12 col-sm-6 flex flex-center">
            <q-img
              class="rounded-borders"
              :src="imageSourceComputed"
              ratio="1"
              @click="pickImageFile"
            >
              <div class="fit flex flex-center">
                <q-btn round size="lg" flat icon="edit"></q-btn>
              </div>
            </q-img>
            <div class="text-caption">Max: 20Mb</div>
          </q-card-section>

          <q-card-section class="col-12 col-sm-6">
            <div class="text-h5 q-mt-sm q-mb-xs">
              <q-input
                required
                v-model="internalInfographic.title"
                label="Titulo"
              ></q-input>
            </div>
            <div class="text-caption text-grey">
              <q-input
                label="Descripción"
                v-model="internalInfographic.description"
                type="textarea"
                required
              />
            </div>

            <q-file
              v-model="imageFile"
              ref="imageFilePickerRef"
              max-file-size="20971520"
              style="display: none"
              @rejected="handleImageFileRejection"
              accept=".jpg, image/*"
            ></q-file>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn
            type="submit"
            flat
            color="primary"
            :disable="!imageFile && !infographic.ID"
          >
            {{ infographic.ID ? 'Editar' : 'Crear' }}
          </q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Infographic } from 'src/models/infographics';
import { useDialogPluginComponent, QFile, useQuasar } from 'quasar';
import { db, storage } from 'boot/firebase';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { collection, updateDoc, doc, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export default defineComponent({
  props: {
    infographic: {
      type: Object as PropType<Infographic>,
      required: true,
    },
  },
  async mounted() {
    if (this.infographic.imageURL) {
      this.accessURLToResource = await getDownloadURL(
        storageRef(storage, this.infographic.imageURL)
      ).catch((err) => {
        console.log(err);
        return '';
      });
    }
  },
  data() {
    return {
      internalInfographic: { ...this.infographic },
      imageFile: null,
      imageSource: '',
      accessURLToResource: '',
    };
  },
  emits: [
    // REQUIRED
    'ok',
    'hide',
  ],
  watch: {
    imageFile: 'handleImageFileChange',
  },
  methods: {
    async handleFormSubmit() {
      try {
        if (!this.imageFile && !this.internalInfographic.ID) {
          return;
        }

        this.loading.show();

        const imageURL = `infographic/images/${uuidv4()}`;
        const imageRef = storageRef(storage, imageURL);

        if (this.imageFile) {
          await uploadBytes(imageRef, this.imageFile);
          this.internalInfographic.imageURL = imageURL;
        }

        if (!this.internalInfographic.ID) {
          await addDoc(collection(db, 'infographics'), this.internalInfographic);
          this.notify({
            type: 'positive',
            message: 'Infografiá creada con éxito',
          });
          return;
        }

        await updateDoc(
          doc(db, 'infographics', this.internalInfographic.ID),
          this.internalInfographic
        );

        this.notify({
          type: 'positive',
          message: 'Infografiá editada con éxito',
        });
      } catch (error) {
        console.log(error);
        this.notify({
          type: 'negative',
          message: 'Error creando Infografiá.',
        });
      } finally {
        this.$q.loading.hide();
        this.dialogRef?.hide();
      }
    },
    handleImageFileRejection(
      e: Array<{ failedPropValidation: string; file: File }>
    ) {
      this.notify({
        type: 'negative',
        message: 'Error cambiando imagen: ' + e[0].failedPropValidation,
      });
    },
    handleImageFileChange(file: File) {
      if (!file) {
        this.imageSource = '';
        return;
      }

      if (!file.type.startsWith('image')) {
        return;
      }

      const reader = new FileReader();
      reader.onloadend = (e) => {
        this.imageSource = String(e.target?.result);
      };

      reader.readAsDataURL(file);
    },
  },
  computed: {
    imageSourceComputed() {
      if (this.imageSource) {
        return this.imageSource;
      }

      if (this.accessURLToResource) {
        return this.accessURLToResource;
      }

      return '';
    },
  },
  setup() {
    const imageFilePickerRef = ref<QFile>();
    const { notify, loading } = useQuasar();

    function pickImageFile() {
      if (!imageFilePickerRef.value) {
        return;
      }

      imageFilePickerRef.value.pickFiles();
    }

    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      notify,
      loading,
      dialogRef,
      onDialogHide,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
      imageFilePickerRef,
      pickImageFile,
    };
  },
});
</script>

<style></style>

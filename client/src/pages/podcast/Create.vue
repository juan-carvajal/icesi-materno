<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="full-width" bordered>
      <q-form @submit.prevent="handleFormSubmit">
        <q-card-section>
          <div class="text-h6">Nuevo podcast: {{ internalPodcast.title }}</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="row wrap">
          <q-card-section class="col-12 col-sm-6 flex flex-center">
            <q-img
              class="rounded-borders"
              :src="imageSource"
              ratio="1"
              @click="pickImageFile"
            >
              <div class="fit flex flex-center">
                <q-btn round size="lg" flat icon="edit"></q-btn>
              </div>
            </q-img>
            <div class="text-caption">Max: 2Mb</div>
          </q-card-section>

          <q-card-section class="col-12 col-sm-6">
            <div class="text-h5 q-mt-sm q-mb-xs">
              <q-input
                required
                v-model="internalPodcast.title"
                label="Titulo"
              ></q-input>
            </div>
            <div class="text-caption text-grey">
              <q-input
                label="Descripción"
                v-model="internalPodcast.description"
                type="textarea"
                required
              />
            </div>

            <q-file
              accept=".mp3, audio/mpeg"
              v-model="file"
              label="Media"
              hint="Solo mp3"
            >
              <template v-slot:prepend>
                <q-icon name="audiotrack" />
              </template>
            </q-file>

            <q-file
              v-model="imageFile"
              ref="imageFilePickerRef"
              max-file-size="2097152"
              style="display: none"
              @rejected="handleImageFileRejection"
              accept=".jpg, image/*"
            ></q-file>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn type="submit" flat color="primary" :disable="!file">
            Crear
          </q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Podcast } from 'src/models/podcast';
import { useDialogPluginComponent, QFile, useQuasar } from 'quasar';
import { db, storage } from 'boot/firebase';
import { ref as storageRef, uploadBytes } from 'firebase/storage';
import { collection, updateDoc, doc, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export default defineComponent({
  props: {
    podcast: {
      type: Object as PropType<Podcast>,
      required: true,
    },
  },
  data() {
    return {
      internalPodcast: { ...this.podcast },
      file: null,
      imageFile: null,
      imageSource: '',
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
        if (!this.file) {
          return;
        }

        this.loading.show();

        const imageURL = `podcast/images/${uuidv4()}`;
        const imageRef = storageRef(storage, imageURL);

        if (this.imageFile) {
          await uploadBytes(imageRef, this.imageFile);
        }

        this.internalPodcast.imageURL = imageURL;

        const fileURL = `podcast/media/${uuidv4()}.mp3`;
        const fileRef = storageRef(storage, fileURL);

        await uploadBytes(fileRef, this.file);
        this.internalPodcast.mediaURL = fileURL;

        if (!this.internalPodcast.ID) {
          await addDoc(collection(db, 'podcasts'), this.internalPodcast);
          this.notify({
            type: 'positive',
            message: 'Podcast creado con éxito',
          });
          return;
        }

        await updateDoc(
          doc(db, 'podcasts', this.internalPodcast.ID),
          this.internalPodcast
        );

        this.notify({
          type: 'positive',
          message: 'Podcast creado con éxito',
        });
      } catch (error) {
        console.log(error);
        this.notify({
          type: 'negative',
          message: 'Error creando podcast.',
        });
      } finally {
        this.$q.loading.hide();
        this.dialogRef?.hide();
      }
    },
    handleImageFileRejection(e: Array<{ failedPropValidation: string, file: File } >) {
      this.notify({
          type: 'negative',
          message: 'Error cambiando imagen: '+e[0].failedPropValidation,
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

<template>
  <q-card>
    <q-card-section>
      <q-list v-if="caseData?.attachments">
        <q-item v-for="(file, idx) in caseData.attachments" :key="idx">
          <q-item-section>
            <q-item-label lines="2">{{ file.description }}</q-item-label>
            <q-item-label caption>{{ file.mimeType }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon
              name="download"
              class="cursor-pointer"
              v-if="file.path"
              @click="downloadAttachment(file?.path ?? '')"
            />
          </q-item-section>
        </q-item>
      </q-list>

      <template v-if="hasAccess('cases.write')">
        <q-separator class="q-my-sm"></q-separator>
        <q-form @submit.prevent="submitFiles">
          <q-markup-table>
            <thead>
              <tr>
                <th colspan="5">
                  <q-toolbar class="fit q-px-none">
                    <q-space></q-space>
                    <q-btn
                      icon="add"
                      label="Nuevo"
                      color="primary"
                      @click="files.push({})"
                    ></q-btn>

                    <q-btn
                      class="q-ml-sm"
                      icon="upload"
                      type="submit"
                      v-if="files.length > 0"
                      label="Subir"
                      color="positive"
                    ></q-btn>
                  </q-toolbar>
                </th>
              </tr>
              <tr>
                <th class="text-center text-bold">Archivo</th>
                <th class="text-center text-bold">Tipo</th>
                <th class="text-center text-bold">Tamaño</th>
                <th class="text-center text-bold">Descripción</th>
                <th class="text-center text-bold">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="files.length > 0">
                <tr v-for="(file, idx) in files" :key="idx">
                  <td class="text-center">
                    <q-file
                      :hint="`Máximo ${humanStorageSize(maxFileSize)}`"
                      filled
                      required
                      :max-file-size="maxFileSize"
                      v-model="file.file"
                    >
                    </q-file>
                  </td>
                  <td class="text-center">{{ file.file?.type }}</td>
                  <td class="text-center">
                    {{ humanStorageSize(file.file?.size ?? 0) }}
                  </td>
                  <td class="text-center">
                    <q-input
                      type="text"
                      filled
                      required
                      v-model="file.description"
                    ></q-input>
                  </td>
                  <td class="text-center">
                    <div>
                      <q-btn
                        icon="delete"
                        color="red"
                        @click="files.splice(idx, 1)"
                        round
                      ></q-btn>
                    </div>
                  </td>
                </tr>
              </template>
              <tr v-else>
                <td colspan="5" class="text-bold">No hay archivos adjuntos</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-form>
      </template>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';
import { Case, CaseAttachment } from './models';
import { format, useQuasar } from 'quasar';
import { GetDocument } from 'src/composables/firebase/getDocument';
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
  //getDownloadURL,
} from 'firebase/storage';
import {
  //collection,
  updateDoc,
  doc,
  //addDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db, storage } from 'boot/firebase';
import { v4 as uuidv4 } from 'uuid';
import { openURL } from 'quasar';
import { useCurrentUser } from 'src/composables/auth/rolePermissions';
import useUserAuthorization from 'src/composables/user/userAuthorization';
// destructuring to keep only what is needed
const { humanStorageSize } = format;

export default defineComponent({
  props: {
    caseID: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const maxFileSize = 20971520;
    const files = ref<CaseAttachment[]>([]);

    const { caseID } = toRefs(props);

    const { notify, loading } = useQuasar();

    const { docData: caseData } = GetDocument<Case>(ref('cases'), caseID);

    const { currentUser } = useCurrentUser();

    const { hasAccess } = useUserAuthorization(currentUser);

    const fileDownloadURLCache = ref<{ [key: string]: string }>({});

    async function downloadAttachment(fileURL: string) {
      if (fileURL in fileDownloadURLCache.value) {
        openURL(fileDownloadURLCache.value[fileURL]);
        return;
      }

      const url = await getDownloadURL(storageRef(storage, fileURL));
      fileDownloadURLCache.value[fileURL] = url;
      openURL(url);
    }

    function submitFiles() {
      loading.show();
      Promise.all(
        files.value.map(async (i) => {
          let extension = '';

          const nameParts = i.file?.name.split('.');

          if (nameParts && nameParts.length > 0) {
            extension = `.${nameParts.pop() ?? ''}`;
          }

          const fileURL = `cases/${caseID.value}/files/${uuidv4()}${extension}`;
          const fileRef = storageRef(storage, fileURL);

          const buf = await i.file?.arrayBuffer();

          if (!buf) {
            return Promise.reject('Could not retrieve file contents');
          }

          return uploadBytes(fileRef, buf, {
            contentType: i.file?.type,
          }).then(() => {
            const att: CaseAttachment = {
              path: fileURL,
              mimeType: i.file?.type,
              size: i.file?.size,
              description: i.description,
              uploadedBy: '',
            };
            return att;
          });
        })
      )
        .then((results) => {
          return updateDoc(doc(db, 'cases', caseID.value), {
            attachments: arrayUnion(...results),
          });
        })
        .then(() => {
          notify({
            message: 'Adjuntos agregados con éxito.',
            type: 'positive',
          });
          files.value = [];
        })
        .catch((err) => {
          console.log(err);

          notify({
            message: 'Falla agregando adjuntos.',
            type: 'negative',
          });
        })
        .finally(() => {
          loading.hide();
        });
    }

    return {
      files,
      humanStorageSize,
      maxFileSize,
      caseData,
      submitFiles,
      downloadAttachment,
      hasAccess,
    };
  },
});
</script>

<style></style>

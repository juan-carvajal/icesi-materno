<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card flat>
      <template v-for="(comment, id) in caseComments" :key="id">
        <q-card-section class="col">
          <div class="row">
            <avatar-vue
              class="q-mr-sm"
              :email="comment.createdBy.email || comment.createdBy.displayName"
            ></avatar-vue>
            <div class="column">
              <p class="text-bold">
                {{ comment.createdBy.email || comment.createdBy.displayName }}
              </p>
              <p class="text-caption">
                {{ getTimeInterval(handleFirebaseDate(comment.createdAt)) }}
              </p>
            </div>
          </div>
          <div v-html="sanitizeHtml(comment.text)"></div>
        </q-card-section>
        <q-separator></q-separator>
      </template>
    </q-card>
    <q-editor
      v-model="qeditor"
      :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify'],
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify'],
          },
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7',
            ],
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana',
            ],
          },
          'removeFormat',
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource'],
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana',
      }"
    />
    <q-btn
      :disable="!qeditor"
      @click="AddComment"
      label="Comentar"
      color="primary"
    ></q-btn>
  </div>
</template>

<script lang="ts">
import { addDoc, orderBy, where, collection } from '@firebase/firestore';
import { defineComponent, ref, toRefs } from 'vue';
import { GetDocuments } from 'src/composables/firebase/getDocument';
import sanitizeHtml from 'sanitize-html';
import { CaseComment } from 'src/models/caseComments';
import AvatarVue from '../social/Avatar.vue';
import { handleFirebaseDate, getTimeInterval } from 'src/utils/date';
import { getAuth } from '@firebase/auth';
import { User } from 'src/models/auth';
import { db } from 'src/boot/firebase';
import { useQuasar } from 'quasar';

export default defineComponent({
  props: {
    caseID: {
      type: String,
      required: true,
    },
  },
  components: {
    AvatarVue,
  },
  setup(props) {
    const qeditor = ref('');

    const { caseID } = toRefs(props);

    const { docs: caseComments, error } = GetDocuments<CaseComment>(
      'caseComments',
      where('caseID', '==', caseID.value),
      orderBy('createdAt', 'desc')
    );

    const { notify } = useQuasar();

    function AddComment() {
      const user = getAuth().currentUser;

      if (!user) {
        return;
      }

      const { uid, email, displayName } = user;

      const dataUser: User = { uid, email, displayName };

      addDoc(collection(db, 'caseComments'), {
        text: qeditor.value,
        createdAt: new Date(),
        createdBy: dataUser,
        caseID: caseID.value,
      } as CaseComment)
        .then(() => {
          qeditor.value = '';
        })
        .catch((err) => {
          console.log(err);
          notify({
            type: 'negative',
            message: 'Ha ocurrido un error creando el comentario.',
          });
        });
    }

    return {
      qeditor,
      caseComments,
      error,
      sanitizeHtml,
      handleFirebaseDate,
      getTimeInterval,
      AddComment,
    };
  },
});
</script>

<style></style>

<template>
  <q-page class="q-ma-md">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="account_circle" />
      <q-toolbar-title> Perfil de Usuario </q-toolbar-title>
    </q-toolbar>
    <div class="row q-col-gutter-sm">
      <div class="col-12">
        <q-card>
          <q-card-section class="text-center">
            <q-avatar
              class="q-mb-md"
              size="75px"
              :style="{
                backgroundColor: getBackgroundColor(currentUser.email ?? ''),
              }"
            >
              {{ currentUser.email?.toUpperCase()?.charAt(0) ?? '' }}
            </q-avatar>
            <p class="text-h6 text-grey" v-if="currentUser.displayName">
              {{ currentUser.displayName }}
            </p>
            <p class="text-body1 text-grey q-mb-none" v-if="currentUser.email">
              {{ currentUser.email }}
            </p>
          </q-card-section>
          <q-separator> </q-separator>
          <q-card-section class="text-center">
            <q-badge class="text-overline">
              {{ currentUser.roleName ?? 'Anónimo' }}
            </q-badge>
          </q-card-section>
          <q-separator> </q-separator>
          <q-card-section>
            <q-form
              @submit.prevent="updateUserData(userData, currentUser?.uid ?? '')"
              class="row q-col-gutter-sm"
            >
              <q-input
                class="col-12 col-sm-6"
                type="text"
                label="Nombres"
                v-model="userData.firstName"
                :rules="[(val) => !!val || 'Este campo es requerido']"
              ></q-input>
              <q-input
                class="col-12 col-sm-6"
                type="text"
                label="Apellidos"
                v-model="userData.lastName"
                :rules="[(val) => !!val || 'Este campo es requerido']"
              ></q-input>
              <q-select
                class="col-12 col-sm-6"
                label="Tipo de documento"
                :options="documentTypes"
                v-model="userData.documentType"
                :rules="[(val) => !!val || 'Este campo es requerido']"
              ></q-select>
              <q-input
                class="col-12 col-sm-6"
                type="text"
                label="Número de documento"
                mask="###.###.###.###.###"
                reverse-fill-mask
                unmasked-value
                maxlength="15"
                v-model="userData.documentNumber"
                :rules="[(val) => !!val || 'Este campo es requerido']"
              ></q-input>
              <q-input
                class="col-12"
                type="text"
                mask="phone"
                label="Teléfono"
                unmasked-value
                v-model="userData.phone"
                :rules="[
                  (val) => !!val || 'Este campo es requerido',
                  (val) =>
                    val.length === 10 || 'Por favor ingrese un número valido',
                ]"
              >
                <template v-slot:prepend>
                  <p class="q-mb-none text-body1">+57</p>
                </template>
              </q-input>
              <div>
                <q-btn color="primary" type="submit" label="Actualizar"></q-btn>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { getBackgroundColor } from 'src/utils/color';
import { defineComponent, ref, watch } from 'vue';
import { DocumentType, UserData } from 'src/models/users';
import { useStore } from 'src/store';
import { db } from 'src/boot/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useQuasar } from 'quasar';
export default defineComponent({
  setup() {
    const documentTypes = Object.values(DocumentType);
    const store = useStore();
    const q = useQuasar();

    const userData = ref<UserData>({ ...store.state.auth.userData } ?? {});
    watch(
      () => store.state.auth.userData,
      () => {
        userData.value = { ...store.state.auth.userData } ?? {};
      }
    );

    function updateUserData(userData: UserData, uid: string) {
      q.loading.show();
      setDoc(
        doc(db, 'userData', uid),
        {
          ...userData,
        },
        { merge: true }
      )
        .then(() => {
          q.notify({
            message: 'Usuario actualizado con éxito',
            type: 'positive',
          });
        })
        .catch((err) => {
          console.log(err);
          q.notify({
            message: 'Ha ocurrido un error. Intente de nuevo',
            type: 'negative',
          });
        })
        .finally(() => {
          q.loading.hide();
        });
    }

    return { getBackgroundColor, documentTypes, userData, updateUserData };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth;
    },
  },
});
</script>

<style lang="sass" scoped></style>

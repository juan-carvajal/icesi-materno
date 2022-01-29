<template>
  <q-page class="q-ma-md">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="how_to_reg" />
      <q-toolbar-title> Registrar Usuarios </q-toolbar-title>
    </q-toolbar>

    <q-card>
      <q-card-section>
        <div class="text-h6 ellipsis">Registrar Nuevo Usuario/Usuaria</div>
      </q-card-section>
      <q-form @submit.prevent="confirm">
        <q-card-section class="row q-col-gutter-sm">
          <q-input
            class="col-12 col-sm-6"
            type="text"
            label="Nombres"
            v-model="newUserData.firstName"
            :rules="[(val) => !!val || 'Este campo es requerido']"
          ></q-input>
          <q-input
            class="col-12 col-sm-6"
            type="text"
            label="Apellidos"
            v-model="newUserData.lastName"
            :rules="[(val) => !!val || 'Este campo es requerido']"
          ></q-input>
          <q-select
            class="col-12 col-sm-6"
            label="Tipo de documento"
            :options="documentTypes"
            v-model="newUserData.documentType"
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
            v-model="newUserData.documentNumber"
            :rules="[(val) => !!val || 'Este campo es requerido']"
          ></q-input>
          <q-input
            class="col-12 col-sm-6"
            type="text"
            label="Correo electrónico"
            v-model="newUserData.email"
            :rules="[(val) => !!val || 'Este campo es requerido']"
          ></q-input>
          <q-input
            class="col-12 col-sm-6"
            type="text"
            mask="phone"
            label="Teléfono"
            unmasked-value
            v-model="newUserData.phone"
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
          <q-select
            class="col-12"
            v-model="selectedRole"
            :options="allowedRoles"
            emit-value
            map-options
            label="Rol"
            :rules="[(val) => !!val || 'Este campo es requerido']"
          />
          <div>
            <q-btn color="primary" type="submit" label="Crear"></q-btn>
          </div>
        </q-card-section>
      </q-form>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, inject, computed } from 'vue';
import { DocumentType, UserData } from 'src/models/users';
import { useRoles } from 'src/composables/auth/rolePermissions';
import { User } from 'firebase/auth';
import useUserAuthorization from 'src/composables/user/userAuthorization';
import { useQuasar } from 'quasar';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { FirebaseError } from '@firebase/util';

export default defineComponent({
  setup() {
    const newUserData = ref<UserData>({});

    const documentTypes = Object.values(DocumentType);

    const { roles } = useRoles();

    const selectedRole = ref<string>();

    const currentUser = inject('currentUser') as Ref<User | undefined>;

    const { authorization } = useUserAuthorization(currentUser);

    const { dialog, notify, loading } = useQuasar();

    const createUser = httpsCallable<
      { userData: UserData; roleID: string },
      void
    >(getFunctions(), 'admin-RegisterNewAppUser');

    function confirm() {
      dialog({
        title: 'Confirmación',
        message:
          'Por favor verifique con el usuario/usuaria que la información ingresada es verídica. Solo el/ella la podrá cambiar después.',
        cancel: 'Cancelar',
        ok: 'Crear Nuevo',
        persistent: true,
      }).onOk(() => {
        loading.show();
        createUser({
          userData: newUserData.value,
          roleID: selectedRole.value as string,
        })
          .then(() => {
            notify({
              message: 'Usuario creado con éxito.',
              type: 'positive',
            });
            newUserData.value = {};
            selectedRole.value = undefined;
          })
          .catch((err: FirebaseError) => {
            console.log(err);
            notify({
              message: `Creación de usuario fallida: ${err.message}`,
              type: 'negative',
            });
          })
          .finally(() => {
            loading.hide();
          });
      });
    }

    const allowedRoles = computed(() => {
      return roles.value
        .filter(
          (i) =>
            authorization.value?.permissions.includes('admin') ||
            authorization.value?.allowedRoleIdsForCreation?.includes(
              i?.id ?? ''
            )
        )
        .map((i) => {
          return {
            label: i.name,
            value: i.id,
          };
        });
    });

    return { newUserData, documentTypes, allowedRoles, selectedRole, confirm };
  },
});
</script>

<style></style>

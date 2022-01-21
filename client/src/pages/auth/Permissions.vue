<template>
  <q-page class="q-ma-md">
    <q-toolbar class="text-primary q-px-none">
      <q-icon name="verified" />
      <q-toolbar-title> Administrador de Permisos </q-toolbar-title>

      <q-space></q-space>

      <q-btn flat round icon="add" @click="createRoleDialog"></q-btn>
    </q-toolbar>
    <q-select
      v-model="selectedRole"
      :options="roles"
      option-label="name"
      filled
      label="Rol"
    ></q-select>
    <permissions-manager-vue
      class="q-pa-sm q-my-sm"
      v-if="selectedRoleID"
      :roleID="selectedRoleID"
      @deleted="handleRoleDeletion"
    ></permissions-manager-vue>
  </q-page>
</template>

<script lang="ts">
import { addDoc, collection } from '@firebase/firestore';
import { useQuasar } from 'quasar';
import { db } from 'src/boot/firebase';
import PermissionsManagerVue from 'src/components/auth/PermissionsManager.vue';
import { useRoles } from 'src/composables/auth/rolePermissions';
import { Role } from 'src/models/auth';
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  components: {
    PermissionsManagerVue,
  },
  setup() {
    const { roles } = useRoles();
    const selectedRole = ref<Role>();

    const selectedRoleID = computed(() => {
      if (!selectedRole.value) {
        return undefined;
      }

      return selectedRole.value.id;
    });

    const { dialog, notify } = useQuasar();

    function createNewRole(role: Role) {
      addDoc(collection(db, 'roles'), role)
        .then(() => {
          notify({
            type: 'positive',
            message: 'Rol creado con éxito',
          });
        })
        .catch((err) => {
          console.log(err);
          notify({
            type: 'negative',
            message: 'Error creando rol.',
          });
        });
    }

    function handleRoleDeletion(){
      selectedRole.value = undefined
    }

    function createRoleDialog() {
      dialog({
        title: 'Crear rol',
        message: 'Nombre del rol (Mínimo 3 caracteres)',
        prompt: {
          model: '',
          isValid: (val: string) => val.length > 2, // << here is the magic
          type: 'text', // optional
        },
        cancel: 'Cancelar',
        persistent: true,
      }).onOk((roleName: string) => {
        const newRole: Role = {
          name: roleName,
          permissions: [],
        };
        createNewRole(newRole);
      });
    }

    return { roles, selectedRole, selectedRoleID, createRoleDialog, handleRoleDeletion };
  },
});
</script>

<style></style>

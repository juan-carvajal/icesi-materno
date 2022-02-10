<template>
  <q-card>
    <q-card-section
      class="row items-center justify-center bg-grey-1 q-ma-md rounded-border"
      v-for="(permission, idx) in permissionsList"
      :key="idx"
    >
      <div class="col-3 text-bold">
        {{ permission.name }}
        <q-icon name="help">
          <q-tooltip style="max-width: 25vw">
            {{ permission.description }}
          </q-tooltip>
        </q-icon>
      </div>

      <div class="col-9 q-gutter-sm justify-evenly items-center">
        <div class="row justify-evenly">
          <q-toggle
            v-for="(perm, idx2) in permission.permissions"
            :key="`perm-${idx}-${idx2}`"
            color="primary"
            :label="perm.label"
            v-model="rolePermissions"
            :val="perm.value"
          />
        </div>
      </div>
    </q-card-section>
    <template v-if="role?.permissions.includes('users.write')">
      <q-separator inset></q-separator>
      <q-card-section>
        <q-select
          v-model="allowedRoleIdsForCreation"
          :options="creationRolesData"
          multiple
          use-chips
          emit-value
          map-options
          :input-debounce="250"
          label="Roles habilitados para crear"
        >
        </q-select>
      </q-card-section>
    </template>

    <q-card-actions vertical>
      <q-btn
        @click="deleteRoleIntent"
        icon="delete"
        label="Borrar rol"
        color="red"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { PermissionGroup } from 'src/models/auth';
import {
  defineComponent,
  toRefs,
  ref,
  computed,
  WritableComputedRef,
} from 'vue';
import { useRole, useRoles } from 'src/composables/auth/rolePermissions';
import { doc, updateDoc } from '@firebase/firestore';
import { useQuasar } from 'quasar';
import { db } from 'src/boot/firebase';
import { getFunctions, httpsCallable } from 'firebase/functions';

const permissionsList: PermissionGroup[] = [
  {
    name: 'Administrador',
    permissions: [{ label: 'Habilitar', value: 'admin' }],
    description:
      'Este permiso concede acceso a todos los recursos de la aplicación sin restricciones. Debe ser de uso extremadamente limitado.',
  },
  {
    name: 'Casos',
    permissions: [
      { label: 'Ver', value: 'cases.read' },
      { label: 'Escritura', value: 'cases.write' },
    ],
    description:
      'Acceso a los casos creados por los usuarios de la aplicación.',
  },
  {
    name: 'Podcasts',
    permissions: [
      { label: 'Ver', value: 'podcasts.read' },
      { label: 'Escritura', value: 'podcasts.write' },
    ],
    description: 'Acceso al módulo de podcasts y aprendizaje para maternas.',
  },
    {
    name: 'Infografías',
    permissions: [
      { label: 'Ver', value: 'infographics.read' },
      { label: 'Escritura', value: 'infographics.write' },
    ],
    description: 'Acceso al módulo de podcasts y aprendizaje para maternas.',
  },
  {
    name: 'Notificaciones',
    permissions: [
      { label: 'Ver', value: 'notifications.read' },
      { label: 'Escritura', value: 'notifications.write' },
    ],
    description:
      'Los roles con acceso a notificaciones podrán ver y/o crear notificaciones que serán entregadas por sms a otros usuarios.',
  },
  {
    name: 'Alertas',
    permissions: [
      { label: 'Ver', value: 'alerts.read' },
      { label: 'Escritura', value: 'alerts.write' },
    ],
    description:
      'Los roles con acceso a alertas podrán crear alertas globales o focalizada que serán entregadas vía llamada y sms al número de contacto de los usuarios implicados. Esta funcionalidad puede acarrear altos costos con el proveedor de comunicación, por lo que su acceso debe ser extremadamente limitado.',
  },
  {
    name: 'Registrar usuarios',
    permissions: [{ label: 'Escritura', value: 'users.write' }],
    description:
      'Los roles con acceso a crear usuarios podrán registrar nuevos usuarios.',
  },
];

export default defineComponent({
  props: {
    roleID: {
      type: String,
      required: true,
    },
  },
  emits: ['deleted'],
  setup(props, { emit }) {
    const { roleID } = toRefs(props);

    const selectedPermissions = ref<string[]>([]);

    const { role } = useRole(roleID);

    const { roles } = useRoles();

    const creationRolesData = computed(() => {
      return (roles.value ?? []).map((i) => {
        return {
          label: i.name,
          value: i.id,
          f: i.allowedRoleIdsForCreation,
        };
      });
    });

    const allowedRoleIdsForCreation: WritableComputedRef<string[]> = computed({
      get() {
        return role?.value?.allowedRoleIdsForCreation ?? [];
      },
      set(newValue: string[]) {
        updateDoc(doc(db, `roles/${roleID.value}`), {
          allowedRoleIdsForCreation: newValue,
        })
          .then(() => {
            notify({
              type: 'positive',
              message: 'Rol actualizado con éxito',
            });
          })
          .catch((err) => {
            console.log(err);
            notify({
              type: 'negative',
              message: 'Error actualizando rol.',
            });
          });
      },
    });

    const { notify, dialog } = useQuasar();

    const rolePermissions: WritableComputedRef<string[]> = computed({
      get() {
        if (!role.value) {
          return [];
        }

        return role.value.permissions;
      },
      set(newValue: string[]): void {
        updateDoc(doc(db, `roles/${roleID.value}`), { permissions: newValue })
          .then(() => {
            notify({
              type: 'positive',
              message: 'Rol actualizado con éxito',
            });
          })
          .catch((err) => {
            console.log(err);
            notify({
              type: 'negative',
              message: 'Error actualizando rol.',
            });
          });
      },
    });

    const functions = getFunctions();
    const deleteRole = httpsCallable<{ roleID: string }, void>(
      functions,
      'admin-DeleteRole'
    );

    function deleteRoleIntent() {
      dialog({
        title: 'Acción destructiva ⚠️',
        message:
          'Esta acción no se puede deshacer. ¿Esta seguro que desea continuar?',
      }).onOk(() => {
        deleteRole({ roleID: roleID.value })
          .then(() => {
            emit('deleted');
            notify({
              type: 'positive',
              message: 'Rol eliminado con éxito',
            });
          })
          .catch((err: Error) => {
            console.log(err);
            notify({
              type: 'negative',
              message: `Error eliminando rol: ${err.message}`,
            });
          });
      });
    }

    return {
      permissionsList,
      role,
      selectedPermissions,
      rolePermissions,
      deleteRoleIntent,
      creationRolesData,
      allowedRoleIdsForCreation,
    };
  },
});
</script>

<style></style>

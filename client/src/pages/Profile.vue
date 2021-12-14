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
            <q-badge class="text-overline"> {{ currentUser.roleName ?? 'Anónimo' }} </q-badge>
          </q-card-section>
          <q-separator> </q-separator>
          <q-card-section>
            <q-form class="row q-col-gutter-sm">
              <q-input
                class="col-12 col-sm-6"
                type="text"
                label="Primer nombre"
              ></q-input>
              <q-input
                class="col-12 col-sm-6"
                type="text"
                label="Primer nombre"
              ></q-input>
              <q-select
                class="col-12 col-sm-6"
                label="Tipo de documento"
                :options="documentTypes"
              ></q-select>
              <q-input
                class="col-12 col-sm-6"
                type="text"
                label="Número de documento"
              ></q-input>
              <q-input class="col-12" type="text" mask="phone" label="Teléfono">
                <template v-slot:prepend>
                  <p class="q-mb-none text-body1">+57</p>
                </template>
              </q-input>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { getBackgroundColor } from 'src/utils/color';
import { defineComponent } from 'vue';
import { DocumentType } from 'src/models/users';
export default defineComponent({
  setup() {
    const documentTypes = Object.values(DocumentType);
    return { getBackgroundColor, documentTypes };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth;
    },
  },
});
</script>

<style lang="sass" scoped>
.my-content
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
</style>

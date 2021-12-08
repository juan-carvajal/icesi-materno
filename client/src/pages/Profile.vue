<template>
  <q-page class="q-ma-md">
    <p class="text-h6 text-grey">Perfil de Usuario</p>
    <div class="row q-col-gutter-sm">
      <div class="col-4">
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
            <q-badge>Administrador</q-badge>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-8">
        <q-card>hola </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { getBackgroundColor } from 'src/utils/color';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return { getBackgroundColor };
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

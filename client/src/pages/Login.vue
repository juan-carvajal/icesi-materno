<template>
  <q-page class="bg-primary fullscreen row justify-center items-center">
    <div class="column">
      <div class="row items-center justify-center">
        <h5 class="text-h5 text-center text-white q-my-md">Company & Co</h5>
      </div>
      <div class="row">
        <q-card bordered class="q-pa-lg q-ma-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="Email"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="Contraseña"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="primary"
              class="full-width"
              label="Login"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">¿No tienes cuenta? Regístrate.</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
});
</script>

<style></style>

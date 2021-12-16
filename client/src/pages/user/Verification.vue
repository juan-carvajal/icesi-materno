<template>
  <div class="bg-primary fullscreen row justify-center items-center">
    <div class="column">
      <div class="row items-center justify-center">
        <h5 class="text-h5 text-center text-white q-my-md">ConectaDos</h5>
      </div>

      <q-card>
        <q-card-section class="text-center">
          <p class="text-h6">Gracias por iniciar sesión</p>
          <p class="text-body1">
            Para poder continuar por favor verifica tu correo electrónico
          </p>
        </q-card-section>
        <q-card-actions v-if="!emailSent" align="center">
          <q-btn
            @click="sendVerificationEmail"
            :loading="isLoading"
            color="positive"
            label="Verificar mi correo"
          ></q-btn>
        </q-card-actions>
        <q-card-section class="text-center" v-else>
          <p class="text-caption q-mb-none">
            Hemos enviado un link de verificación a tu correo. Por favor
            revíselo para continuar. Recuerda revisar la carpeta de spam
            también.
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getAuth, sendEmailVerification } from 'firebase/auth';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
export default defineComponent({
  setup() {
    const isLoading = ref(false);
    const emailSent = ref(false);
    const auth = getAuth();
    const route = useRoute();
    const { notify } = useQuasar();

    const queryParams = route.query.redirect?.toString() ?? '';

    const baseRoute =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080/#/'
        : 'https://icesi-materno.web.app/#/';
    const url = `${baseRoute}${queryParams}`;

    function sendVerificationEmail() {
      if (!auth.currentUser) {
        return;
      }

      isLoading.value = true;

      sendEmailVerification(auth.currentUser, { url })
        .then(() => {
          emailSent.value = true;
        })
        .catch((err) => {
          console.log(err);
          notify({
            message: 'Ocurrió un error. Intente más tarde.',
            type: 'negative',
          });
        })
        .finally(() => {
          isLoading.value = false;
        });
    }

    return { sendVerificationEmail, isLoading, emailSent };
  },
});
</script>

<style></style>

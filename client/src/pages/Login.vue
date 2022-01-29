<template>
  <div class="bg-primary fullscreen row justify-center items-center">
    <div class="column q-pa-sm justify-center items-center">
      <q-img style="max-width: 60vw" src="~assets/icons/app-logo.svg"></q-img>
      <div class="row" v-if="!showSentResetPasswordEmail">
        <q-form @submit.prevent="logInUser">
          <q-card bordered class="q-pa-lg q-ma-lg shadow-1">
            <q-card-section class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="Email"
                :rules="[(value) => !!value || 'Este campo es requerido']"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="Contraseña"
                :rules="[(value) => !!value || 'Este campo es requerido']"
              />

              <q-btn @click="openForgotPasswordDialog" flat no-caps
                >He olvidado mi contraseña</q-btn
              >
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                unelevated
                color="primary"
                class="full-width"
                label="Entrar"
                type="submit"
                :loading="isLoading"
              />
            </q-card-actions>

            <!-- <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">¿No tienes cuenta? Regístrate.</p>
          </q-card-section> -->
          </q-card>
        </q-form>
      </div>
      <div v-else>
        <q-card class="q-ma-lg q-pa-lg">
          <p class="q-mb-none">
            Se ha enviado un correo de recuperación a
            <span class="text-bold">{{ passwordResetEmail }}</span
            >. Por favor revise su buzón y siga las instrucciones.
          </p>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from 'src/store';
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from 'boot/firebase';
import { useQuasar } from 'quasar';
import { FirebaseError } from '@firebase/util';
export default defineComponent({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  setup() {
    const store = useStore(storeKey);

    const { dialog, loading, notify } = useQuasar();

    const validateEmail = (email: string) => {
      const re =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      return re.test(email);
    };

    const showSentResetPasswordEmail = ref(false);
    const passwordResetEmail = ref('');

    function openForgotPasswordDialog() {
      dialog({
        title: 'Olvido de contraseña',
        message: '¿Cual es su usuario (correo electrónico)?',
        prompt: {
          model: '',
          isValid: (val: string) => validateEmail(val), // << here is the magic
          type: 'text', // optional
        },
        cancel: true,
        persistent: true,
      }).onOk((email: string) => {
        loading.show();

        sendPasswordResetEmail(getAuth(), email)
          .then(() => {
            passwordResetEmail.value = email;
            showSentResetPasswordEmail.value = true;
          })
          .catch((err: FirebaseError) => {
            const message =
              err.code === 'auth/user-not-found'
                ? 'El correo especificado no esta registrado'
                : 'Ha ocurrido un error enviando el correo de recuperación. Intente mas tarde.';

            notify({
              message,
              type: 'negative',
            });
            console.log(err);
          })
          .finally(() => {
            loading.hide();
          });
      });
    }

    const isLoading = ref(false);
    const isLoggedIn = computed(() => store.state.auth.isLoggedIn);

    return {
      isLoggedIn,
      isLoading,
      openForgotPasswordDialog,
      showSentResetPasswordEmail,
      passwordResetEmail,
    };
  },
  methods: {
    logInUser() {
      this.isLoading = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(({ user }) => {
          this.$q.notify({
            type: 'positive',
            message: `Bienvenido ${user.displayName ?? user.email ?? ''}`,
          });
        })
        .catch((err) => {
          console.log(err);
          this.$q.notify({
            type: 'negative',
            message: 'Ocurrió un error de autenticación.',
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  watch: {
    isLoggedIn: {
      immediate: true,
      handler(value: boolean) {
        if (value) {
          void this.$router.push({
            path: this.$route.query.redirect?.toString() ?? '/',
          });
        }
      },
    },
  },
});
</script>

<style></style>

<template>
  <div class="bg-primary fullscreen row justify-center items-center">
    <div class="column">
      <div class="row items-center justify-center">
        <h5 class="text-h5 text-center text-white q-my-md">App Name</h5>
      </div>
      <div class="row">
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from 'src/store';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'boot/firebase';
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

    const isLoading = ref(false);
    const isLoggedIn = computed(() => store.state.auth.isLoggedIn)

    return { isLoggedIn, isLoading };
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

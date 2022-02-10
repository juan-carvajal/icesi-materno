<template>
  <div
    class="fullscreen bg-warning text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">403</div>

      <div class="text-h2" style="opacity: 0.4">Contenido no autorizado</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="warning"
        unelevated
        to="/"
        label="Ir al home"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Error404',
  setup() {
    const store = useStore();

    const userPermissions = computed(() => store.state.auth.permissions);

    return { userPermissions };
  },
  watch: {
    userPermissions: {
      immediate: true,
      handler(value: string[]) {
        if (!value) {
          return;
        }

        const requiredPermissions = Array.isArray(
          this.$route.query.requiredPermissions
        )
          ? this.$route.query.requiredPermissions
          : [this.$route.query.requiredPermissions];

        const allFullfilled =
          value.includes('admin') ||
          requiredPermissions.every((i) => value.includes(i?.toString() ?? ''));

        if (allFullfilled) {
          void this.$router.push({
            path: this.$route.query.redirect?.toString() ?? '/',
          });
        }
      },
    },
  },
});
</script>

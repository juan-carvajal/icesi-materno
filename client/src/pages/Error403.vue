<template>
  <div class="fullscreen bg-warning text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        403
      </div>

      <div class="text-h2" style="opacity:.4">
        Contenido no autorizado
      </div>

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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>

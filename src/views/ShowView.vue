<template>
  <div class="view-container">
    <h2>Estructura de Control: v-show</h2>
    <p class="description">
      La directiva <code>v-show</code> altera unicamente el estilo CSS <code>display</code> del elemento. A diferencia de <code>v-if</code>, el elemento permanece en el arbol DOM aunque no sea visible.
    </p>

    <div class="demo-box">
      <button @click="mostrar = !mostrar">
        {{ mostrar ? 'Ocultar' : 'Mostrar' }} Contenido
      </button>

      <div v-show="mostrar" class="info-card">
        Este bloque utiliza <strong>v-show</strong>. Al ocultarlo, permanece en el codigo HTML pero con la propiedad CSS <code>display: none;</code>.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const mostrar = ref(true)
</script>

<style scoped>
.view-container { max-width: 650px; margin: 0 auto; padding: 20px; }
.description { line-height: 1.6; color: #4a5568; }
.demo-box { background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 15px; }
button { background: #42b883; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-weight: bold; }
button:hover { background: #33a06f; }
.info-card { margin-top: 15px; padding: 15px; background: #e0f2fe; border-left: 4px solid #0284c7; border-radius: 4px; color: #0369a1; }
</style>

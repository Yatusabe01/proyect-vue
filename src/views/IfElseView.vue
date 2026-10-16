<template>
  <div class="view-container">
    <h2>Estructura de Control: v-if / v-else-if / v-else</h2>
    <p class="description">
      Las directivas <code>v-if</code>, <code>v-else-if</code> y <code>v-else</code> condicionan la renderizacion de elementos en el DOM. El bloque se inserta o se remueve fisicamente segun la evaluacion logica.
    </p>

    <div class="demo-box">
      <label for="nota">Ingresa la calificacion (0 - 100): </label>
      <input id="nota" type="number" min="0" max="100" v-model.number="calificacion" />

      <div class="result">
        <p v-if="calificacion >= 90" class="excelente">Excelente (Aprobado con distincion)</p>
        <p v-else-if="calificacion >= 70" class="regular">Satisfactorio (Aprobado)</p>
        <p v-else class="reprobado">Reprobado (Requiere regularizacion)</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const calificacion = ref(85)
</script>

<style scoped>
.view-container { max-width: 650px; margin: 0 auto; padding: 20px; }
.description { line-height: 1.6; color: #4a5568; }
.demo-box { background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 15px; }
input { padding: 8px 12px; font-size: 16px; margin-left: 10px; width: 100px; border-radius: 4px; border: 1px solid #cbd5e1; }
.result { margin-top: 20px; font-weight: bold; font-size: 1.1rem; }
.excelente { color: #15803d; }
.regular { color: #b45309; }
.reprobado { color: #b91c1c; }
</style>

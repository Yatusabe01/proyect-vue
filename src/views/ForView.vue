<template>
  <div class="view-container">
    <h2>Estructura de Control: v-for y v-bind:key</h2>
    <p class="description">
      La directiva <code>v-for</code> itera sobre un arreglo de datos para generar listas dinamicas. La propiedad <code>v-bind:key</code> asigna un identificador unico que optimiza el rastreo de nodos en el Virtual DOM de Vue.
    </p>

    <div class="demo-box">
      <h3>Lista de Tecnologias del Proyecto</h3>
      <ul>
        <li v-for="item in moduloTecnologia" :key="item.id" class="item-card">
          <span class="badge">ID: {{ item.id }}</span>
          <strong>{{ item.nombre }}</strong> — <em>{{ item.rol }}</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const moduloTecnologia = ref([
  { id: 101, nombre: 'Vue.js 3', rol: 'Framework Progresivo SPA' },
  { id: 102, nombre: 'Vue Router', rol: 'Enrutamiento en cliente' },
  { id: 103, nombre: 'Vite / Bun', rol: 'Entorno de desarrollo y empaquetado' },
  { id: 104, nombre: 'GitHub Pages', rol: 'Servidor de publicacion' }
])
</script>

<style scoped>
.view-container { max-width: 650px; margin: 0 auto; padding: 20px; }
.description { line-height: 1.6; color: #4a5568; }
.demo-box { background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 15px; }
ul { list-style: none; padding: 0; }
.item-card { background: white; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; margin-bottom: 8px; display: flex; align-items: center; gap: 10px; }
.badge { background: #35495e; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; }
</style>

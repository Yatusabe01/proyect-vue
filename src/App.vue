<template>
  <div id="app-layout">
    <header>
      <nav class="navbar">
        <router-link to="/">Inicio</router-link>
        <router-link to="/if-else">v-if / v-else</router-link>
        <router-link to="/show">v-show</router-link>
        <router-link to="/for">v-for & key</router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
body { margin: 0; font-family: system-ui, -apple-system, sans-serif; background-color: #ffffff; color: #1e293b; }
.navbar { display: flex; justify-content: center; gap: 15px; background-color: #1e293b; padding: 15px; }
.navbar a { color: #94a3b8; text-decoration: none; font-weight: 600; padding: 8px 16px; border-radius: 6px; transition: all 0.2s; }
.navbar a:hover { color: #ffffff; }
.navbar a.router-link-exact-active { background-color: #42b883; color: white; }
.main-content { padding: 20px; }
</style>

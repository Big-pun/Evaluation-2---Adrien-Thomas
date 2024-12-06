<script setup>
  import { RouterView } from "vue-router";
  import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div id="app" class="bg-slate-800 min-h-screen text-white">
    <header class="container mx-auto z-20 relative">
      <NavBar class="p-4"/>
    </header>

    <main class="container mx-auto bg-slate-800">
        <RouterView />
    </main>
  </div>
</template>

<style scoped></style>

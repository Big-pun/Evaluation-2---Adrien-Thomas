<template>
  <nav class="flex flex-row justify-around fixed container text-xl">
    <router-link to="/">Accueil</router-link>
    <router-link to="/ajouter">Ajouter un Livre</router-link>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<style scoped>
</style>
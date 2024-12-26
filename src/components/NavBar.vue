<template>
  <nav class="flex flex-row justify-around fixed container text-xl">
    <router-link to="/" v-slot="{ isActive }">
      <span :class="{ 'is-active': isActive }">Accueil</span>
    </router-link>
    <router-link to="/ajouter" v-slot="{ isActive }">
      <span :class="{ 'is-active': isActive }">Ajouter un Livre</span>
    </router-link>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.is-active {
  text-decoration: underline;
}
</style>
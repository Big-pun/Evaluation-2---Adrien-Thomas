<script setup>
  import { RouterView } from "vue-router";
  import NavBar from "./components/NavBar.vue";
  import "./css/main.css";
</script>

<template>

    <header class="mx-auto container h-16 ">
      <NavBar class="p-4" />
    </header>

    <main class="mx-auto">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
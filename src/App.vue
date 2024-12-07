<script setup>
  import { RouterView } from "vue-router";
  import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="text-white">
    <header class="mx-auto fixed container h-16 ">
      <NavBar class="p-4 " />
    </header>

    <main class="mx-auto pt-20">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
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
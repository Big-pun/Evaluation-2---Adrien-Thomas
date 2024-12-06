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
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div class="container grid grid-cols-12 mx-auto">
    <div class="col-span-12">

    <h1>Accueil</h1>

    <div v-if="livres.length === 0">
      <img src="../../public/bibliotheque-vide.jpg" alt="Collection vide">
      <p>Votre collection est vide.</p>
    </div>

    <div v-else class="flex flex-row justify-around">
      <CarteLivre v-for="livre in livres" :key="livre.id" :livre="livre" />
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import CarteLivre from "@/components/CarteLivre.vue";
import { utiliserCollection } from "@/composables/utiliserCollection";

const { livres } = utiliserCollection();
</script>

<style scoped></style>
<template>
  <div class="container mx-auto p-4">
    <div class="col-span-12">
      <h1 class="text-2xl font-bold mb-4">Accueil</h1>

      <div v-if="livres.length === 0" class="text-center">
        <img src="../../public/bibliotheque-vide.jpg" alt="Collection vide" class="mx-auto mb-4">
        <p>Votre collection est vide.</p>
      </div>

      <div v-else class="flex flex-wrap justify-around gap-4">
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
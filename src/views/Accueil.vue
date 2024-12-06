<template>
  <div class="grid grid-cols-12">
    <h1>Accueil</h1>

    <div v-if="livres.length === 0" class="">
      <img src="../../public/bibliotheque-vide.jpg" alt="Collection vide">
      <p>Votre collection est vide.</p>
    </div>

    <div v-else>
      <CarteLivre v-for="livre in livres" :key="livre.id" :livre="livre" />
    </div>

    </div>
</template>

<script setup>
  import { ref } from "vue";
  import CarteLivre from "@/components/CarteLivre.vue";

  const livres = ref([]);
</script>

<style scoped></style>

<template>
  <div class="col-span-12 ">
    <div v-if="livres.length === 0">
      <img
        src="../../public/bibliotheque-vide.jpg"
        alt="Collection vide"
        class="absolute inset-0 w-full h-full object-cover opacity-50 min-h-screen"
      />
      <div class="relative z-10 grid grid-row-2 space-y-96 mt-24">
        <p class="text-8xl m-4 text-left animate-fade-in-down">
          Votre collection
        </p>
        <p class="text-8xl m-4 text-right animate-fade-in-up">
          est vide.
        </p>
      </div>
    </div>

    <div v-else class="flex flex-wrap justify-center gap-6">
      <img
        src="../../public/bibliotheque.webp"
        alt="Bibliothèque"
        class="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <CarteLivre
        v-for="livre in livres"
        :key="livre.id"
        :livre="livre"
        class="relative z-10"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import CarteLivre from "@/components/CarteLivre.vue";
  import { utiliserCollection } from "@/composables/utiliserCollection";

  const { livres } = utiliserCollection();
</script>

<style scoped>
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-12rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(12rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-down {
    animation: fadeInDown 2s ease-out;
  }

  .animate-fade-in-up {
    animation: fadeInUp 2s ease-out;
  }
</style>

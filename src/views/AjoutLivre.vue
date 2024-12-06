<template>
  <img
    src="../../public/bibliotheque-2.jpg"
    alt="Collection de livres"
    class="absolute inset-0 w-full h-full object-cover opacity-50"
  />
  <div class="relative z-10 col-span-12">
    <input
      v-model="requete"
      @input="chercherLivres"
      placeholder="Rechercher un livre par titre"
      class=" text-black w-full p-3 mb-6 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <p class=" grid grid-row-2 space-y-96 mt-12">
      <span class="text-8xl m-4 text-left animate-fade-in-down">Ajouter</span>
      <span class="text-8xl m-4 text-right animate-fade-in-up">un livre</span>
    </p>

    <div
      v-if="resultats.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="livre in resultats"
        :key="livre.id"
        @click="ajouterLivreEtEffacerResultats(livre)"
        class="carte-livre p-6 bg-white shadow-lg rounded-lg text-center cursor-pointer hover:shadow-xl transition-shadow duration-300 relative z-20"
      >
        <img
          :src="livre.volumeInfo.imageLinks?.thumbnail"
          :alt="livre.volumeInfo.title"
          class="w-full h-48 mb-4 rounded object-cover mx-auto"
        />
        <h2 class="text-xl font-semibold mb-2">{{ livre.volumeInfo.title }}</h2>
        <p class="text-gray-700">{{ livre.volumeInfo.authors?.join(", ") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { chercherLivresGoogle } from "../composables/fetchGoogleBooks";
  import { utiliserCollection } from "@/composables/utiliserCollection";

  const requete = ref("");
  const resultats = ref([]);
  const { ajouterLivre } = utiliserCollection();

  const chercherLivres = async () => {
    if (requete.value === "") {
      resultats.value = [];
      return;
    }
    resultats.value = await chercherLivresGoogle(requete.value);
  };

  const ajouterLivreEtEffacerResultats = (livre) => {
    ajouterLivre(livre);
    resultats.value = [];
    requete.value = "";
  };
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

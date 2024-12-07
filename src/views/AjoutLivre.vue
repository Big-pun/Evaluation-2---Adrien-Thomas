<template>
  <div class="col-span-12">

    <img
      src="../../public/bibliotheque-2.jpg"
      alt="Collection de livres"
      class="fixed inset-0 w-full h-full object-cover opacity-50 "
    />

    <div class="bg-slate-800 bg-opacity-70 h-full w-full fixed inset-0 "></div>

    <div class="container mx-auto p-4 ">
      <h1 class="text-3xl font-bold mb-6 text-center">Ajouter un livre</h1>
      <input
        v-model="requete"
        @input="chercherLivres"
        placeholder="Rechercher un livre par titre"
        class="text-black w-full p-3 mb-6 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <p class="grid grid-row-2">
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
          class="carte-livre p-6 bg-white shadow-lg rounded-lg text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
        >
          <img
            :src="livre.volumeInfo.imageLinks?.thumbnail"
            :alt="livre.volumeInfo.title"
            class="w-full h-48 mb-4 rounded object-cover mx-auto"
          />
          <h2 class="text-xl font-semibold mb-2">{{ livre.volumeInfo.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const requete = ref("");
  const resultats = ref([]);

  const chercherLivres = () => {
    // Logique pour chercher des livres
  };

  const ajouterLivreEtEffacerResultats = (livre) => {
    // Logique pour ajouter un livre et effacer les résultats
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
<template>
  <div class="col-span-12">
    <h1>Ajouter un livre</h1>
    <input
      v-model="requete"
      @input="chercherLivres"
      placeholder="Rechercher un livre par titre"
    />

    <div
      v-if="resultats.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="livre in resultats"
        :key="livre.id"
        @click="ajouterLivreEtEffacerResultats(livre)"
        class="carte-livre p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <img
          :src="livre.volumeInfo.imageLinks?.thumbnail"
          :alt="livre.volumeInfo.title"
          class=" h-auto mb-4 rounded max-w-48 object-cover mx-auto"
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

<style scoped></style>

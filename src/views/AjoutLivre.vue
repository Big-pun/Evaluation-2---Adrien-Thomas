<template>
  <div class="col-span-12">
    <h1>Ajouter un livre</h1>
    <input v-model="requete" @input="chercherLivres" placeholder="Rechercher un livre par titre"/>

    <div v-if="resultats.length > 0">
      <div v-for="livre in resultats" :key="livre.id" @click="ajouterLivreEtEffacerResultats(livre)">
        <img :src="livre.volumeInfo.imageLinks?.thumbnail" :alt="livre.volumeInfo.title" />
        <p>{{ livre.volumeInfo.title }}</p>
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
  if (requete.value === '') {
    resultats.value = [];
    return;
  }
  resultats.value = await chercherLivresGoogle(requete.value);
};

const ajouterLivreEtEffacerResultats = (livre) => {
  ajouterLivre(livre);
  resultats.value = [];
  requete.value = '';
};
</script>

<style scoped></style>
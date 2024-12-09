<template>
  <div class="background">
    <BackgroundContainer>
      <div class="grid grid-cols-12">
        <div class="col-span-8 col-start-3 p-4 pt-12" v-if="livre">
        <h1 class="text-3xl font-bold mb-6 text-center">{{ livre.volumeInfo.title }}</h1>
        <img :src="livre.volumeInfo.imageLinks?.thumbnail" :alt="livre.volumeInfo.title"
          class="mb-6 max-w-xs mx-auto rounded shadow-lg" />
        <div class="text-left space-y-4 max-w-prose mx-auto">
          <p><strong>Auteur(s) :</strong> {{ livre.volumeInfo.authors?.join(', ') }}</p>
          <p><strong>Date de publication :</strong> {{ livre.volumeInfo.publishedDate }}</p>
          <p><strong>Description :</strong> {{ livre.volumeInfo.description }}</p>
          <p><strong>ISBN :</strong> {{ livre.volumeInfo.industryIdentifiers?.find(id => id.type ===
            'ISBN_13')?.identifier }}</p>
          <p><strong>Nombre de pages :</strong> {{ livre.volumeInfo.pageCount }}</p>
          <p><strong>Lu :</strong> {{ livre.lu ? 'Oui' : 'Non' }}</p>
        </div>
      </div>
      <div v-else class="text-center">
        <p class="text-lg text-gray-700">Livre non trouvé.</p>
      </div>
  </div>
  </BackgroundContainer>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { utiliserCollection } from '@/composables/utiliserCollection'
import BackgroundContainer from '@/components/BackgroundContainer.vue';

const route = useRoute()
const { obtenirLivreParId } = utiliserCollection()
const livre = ref(null)

watchEffect(() => {
  livre.value = obtenirLivreParId(route.params.id)
})
</script>

<style scoped>
.background {
  background-image: url("public/bibliotheque.avif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
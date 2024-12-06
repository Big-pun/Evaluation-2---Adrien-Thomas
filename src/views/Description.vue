<template>
  <div class="container mx-auto p-4" v-if="livre">
    <h1 class="text-3xl font-bold mb-6 text-center">{{ livre.volumeInfo.title }}</h1>
    <img :src="livre.volumeInfo.imageLinks?.thumbnail" :alt="livre.volumeInfo.title" class="mb-6 max-w-xs mx-auto rounded shadow-lg" />
    <div class="text-left space-y-4">
      <p><strong>Auteur(s) :</strong> {{ livre.volumeInfo.authors?.join(', ') }}</p>
      <p><strong>Date de publication :</strong> {{ livre.volumeInfo.publishedDate }}</p>
      <p><strong>Description :</strong> {{ livre.volumeInfo.description }}</p>
      <p><strong>ISBN :</strong> {{ livre.volumeInfo.industryIdentifiers?.find(id => id.type === 'ISBN_13')?.identifier }}</p>
      <p><strong>Nombre de pages :</strong> {{ livre.volumeInfo.pageCount }}</p>
      <p><strong>Lu :</strong> {{ livre.lu ? 'Oui' : 'Non' }}</p>
    </div>
  </div>
  <div v-else class="text-center">
    <p class="text-lg text-gray-700">Livre non trouvé.</p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { utiliserCollection } from '@/composables/utiliserCollection'

const route = useRoute()
const { obtenirLivreParId } = utiliserCollection()
const livre = ref(null)

watchEffect(() => {
  livre.value = obtenirLivreParId(route.params.id)
})
</script>

<style scoped></style>
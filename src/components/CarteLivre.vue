<template>
  <router-link :to="{ name: 'description', params: { id: livre.id } }" class="block">
    <div class="carte-livre p-4 bg-white shadow-md rounded-lg max-w-xs mx-auto text-center">
      <img :src="livre.volumeInfo.imageLinks?.thumbnail" :alt="livre.volumeInfo.title" class="livre-image w-full h-auto mb-4 rounded max-h-48 object-cover" />
      <h2 class="text-xl font-semibold mb-2">
        {{ livre.volumeInfo.title }}
        <span v-if="livre.lu">✔</span>
      </h2>
      <p class="text-gray-700 mb-4">{{ livre.volumeInfo.authors?.join(', ') }}</p>
      <div v-if="!livre.lu">
        <button @click.stop.prevent="changerEtatLectureHandler" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Marquer comme lu
        </button>
      </div>
      <button @click.stop.prevent="confirmerSuppression" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2">
        Supprimer
      </button>
    </div>
  </router-link>
</template>

<script setup>
import { ref } from 'vue'
import { utiliserCollection } from '@/composables/utiliserCollection'

const props = defineProps({
  livre: Object
})

const { changerEtatLecture, supprimerLivre } = utiliserCollection()

const changerEtatLectureHandler = () => {
  changerEtatLecture(props.livre.id)
}

const confirmerSuppression = () => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
    supprimerLivre(props.livre.id)
  }
}
</script>

<style scoped>
/* Aucun style supplémentaire nécessaire */
</style>
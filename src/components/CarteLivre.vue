<template>
  <router-link :to="{ name: 'description', params: { id: livre.id } }" class="block p-4">
    <div class="p-6 bg-white shadow-lg rounded-lg max-w-xs mx-auto text-center flex flex-col transition-transform transform hover:scale-105">
      <img :src="livre.volumeInfo.imageLinks?.thumbnail" :alt="livre.volumeInfo.title" class="livre-image w-full h-48 mb-4 rounded object-cover" />
      <h2 class="text-xl font-semibold mb-2">
        {{ livre.volumeInfo.title }}
        <span v-if="livre.lu" class="text-green-500">✔</span>
      </h2>
      <p class="text-gray-700 mb-4">{{ livre.volumeInfo.authors?.join(', ') }}</p>
      <div class="mt-auto">
        <button v-if="!livre.lu" @click.stop.prevent="changerEtatLectureHandler" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Marquer comme lu
        </button>
        <button @click.stop.prevent="confirmerSuppression" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2">
          Supprimer
        </button>
      </div>
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

<style scoped></style>
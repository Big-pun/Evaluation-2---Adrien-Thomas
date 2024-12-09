<template>
  <div class="background">
    <BackgroundContainer>
      <div class="grid grid-cols-12 h-screen">
        <div class="col-span-12 flex flex-col justify-between p-4 mt-24" v-if="livre">
          <h1 class="text-8xl mb-6 text-left animate-fade-in-down"> Description</h1>

          <div class="grid grid-cols-3 items-center rounded-lg shadow-lg bg-white bg-opacity-50 p-4">
            <div class="flex flex-col h-full">
              <p><strong>Auteur(s) :</strong> {{ livre.volumeInfo.authors?.join(', ') }}</p>
              <p><strong>Date de publication :</strong> {{ livre.volumeInfo.publishedDate }}</p>
              <p><strong>ISBN :</strong> {{ livre.volumeInfo.industryIdentifiers?.find(id => id.type ===
                'ISBN_13')?.identifier }}</p>
              <p><strong>Nombre de pages :</strong> {{ livre.volumeInfo.pageCount }}</p>
              <p><strong>Lu :</strong> {{ livre.lu ? 'Oui' : 'Non' }}</p>
            </div>
            <img :src="livre.volumeInfo.imageLinks?.thumbnail" :alt="livre.volumeInfo.title"
              class="mb-6 max-w-xs mx-auto " />
            <div class="text-sm text-left space-y-4 mx-auto">
              <p><strong>Description :</strong> {{ livre.volumeInfo.description }}</p>

            </div>
          </div>

          <p class="text-8xl mb-6 text-right animate-fade-in-up">du livre "{{ livre.volumeInfo.title }}"</p>
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

.background {
  background-image: url("@/assets/bibliotheque.avif");
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
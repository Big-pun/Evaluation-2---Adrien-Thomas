<template>
  <div class="background">
    <background-container>
      <div class="grid grid-cols-12 h-screen">
        <div v-if="livre" class="col-span-12 flex flex-col justify-between p-4 pt-12">
          <h1 class="text-8xl mb-6 text-left animate-fade-in-down"> Description</h1>

          <div class="grid grid-row-3 items-center rounded-lg shadow-lg bg-white bg-opacity-50 p-4">
            <img :src="livre.volumeInfo.imageLinks?.thumbnail" :alt="livre.volumeInfo.title"
              class="mb-4 max-w-xs mx-auto " />
            <div class="flex flex-row h-full justify-around text-right">
              <p><strong>Auteur(s) :</strong> {{ livre.volumeInfo.authors?.join(', ') }}</p>
              <p><strong>Date de publication :</strong> {{ livre.volumeInfo.publishedDate }}</p>
              <p><strong>ISBN :</strong> {{ livre.volumeInfo.industryIdentifiers?.find(id => id.type ===
                'ISBN_13')?.identifier }}</p>
              <p><strong>Nombre de pages :</strong> {{ livre.volumeInfo.pageCount }}</p>
              <p><strong>Lu :</strong> {{ livre.lu ? 'Oui' : 'Non' }}</p>
            </div>
            
            <div class="text-sm text-left space-y-4 mx-auto">
              <p><strong>Description :</strong> {{ livre.volumeInfo.description }}</p>

            </div>
          </div>

          <h2 class="text-8xl mb-6 text-right animate-fade-in-up">du livre "{{ livre.volumeInfo.title }}"</h2>
        </div>
        <div v-else class="col-span-12 text-center pt-12 h-screen">
          <h1 class="text-8xl animate-fade-in-down text-center mt-36">Livre non trouvé.</h1>
        </div>
      </div>
    </background-container>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { utiliserCollection } from '@/composables/useCollection'
import BackgroundContainer from '@/components/BackgroundContainer.vue';

const route = useRoute()
const { obtenirLivreParId } = utiliserCollection()
const livre = ref(null)

watchEffect(() => {
  if (route.params.id) {
    livre.value = obtenirLivreParId(route.params.id);
  } else {
    livre.value = null;
  }
});
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
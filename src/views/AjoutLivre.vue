<template>
  <div class="background">
    <BackgroundContainer>
      <div class="mx-auto grid grid-cols-12">
        <div class="col-span-12 h-screen">
          <div class="pt-12 px-4">
            <input v-model="requete" @input="chercherLivres" placeholder="Rechercher un livre par titre"
              class="h-fit text-black w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="grid grid-row-3 h-full">
            <h1 class="text-8xl m-4 flex flex-row flex-wrap animate-fade-in-down">
              Ajouter un livre
            </h1>

            <div v-if="resultats.length > 0" class="container p-12">
              <splide :options="splideOptions">
                <splide-slide v-for="livre in resultats" :key="livre.id">
                  <div @click="ajouterLivreEtEffacerResultats(livre)"
                    class="p-6 bg-white shadow-lg rounded-lg text-center cursor-pointer hover:shadow-xl transition-shadow duration-300">
                    <img :src="livre.volumeInfo.imageLinks?.thumbnail || '@/assets/placeholder.jpg'" 
                      :alt="livre.volumeInfo.title" class="h-48 mb-4 rounded object-cover mx-auto" />
                    <h2 class="text-xl font-semibold mb-2">{{ livre.volumeInfo.title }}</h2>
                  </div>
                </splide-slide>
              </splide>
            </div>
              <p v-else class="text-3xl m-4 text-center self-center">
                Aucun résultat trouvé
              </p>

            <p class="text-8xl p-4 mb-32 self-end text-right animate-fade-in-up">
              à la collection
            </p>
          </div>
        </div>
      </div>
    </BackgroundContainer>
  </div>
</template>

<script setup>
import BackgroundContainer from "@/components/BackgroundContainer.vue";
import { ref } from "vue";
import { chercherLivresGoogle } from "@/composables/fetchGoogleBooks";
import { utiliserCollection } from "@/composables/utiliserCollection";
import {Splide, SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';

const requete = ref("");
const splideOptions = {
  type: 'slide',
  perPage: 4,
  autoplay: false,
  gap: '1rem',
  pagination: true,
  arrows: true,
  direction: 'ltr',
  breakpoints: {
    1024: { perPage: 3 },
    768: { perPage: 2 },
    640: { perPage: 1 },
  },
};
const resultats = ref([]);
const { ajouterLivre } = utiliserCollection();

const chercherLivres = async () => {
  if (requete.value.trim() === "") {
    resultats.value = [];
    return;
  }
  try {
    resultats.value = await chercherLivresGoogle(requete.value);
  } catch (error) {
    console.error("Error fetching books:", error);
    resultats.value = [];
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.background {
  background-image: url("@/assets/bibliotheque-2.jpg");
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

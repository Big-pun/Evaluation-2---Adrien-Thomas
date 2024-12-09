<template>
  <div class="background">
    <BackgroundContainer>
      <div class="mx-auto p-4 pt-24 grid grid-cols-12">

        <div class="col-span-12">
          <input
            v-model="requete"
            @input="chercherLivres"
            placeholder="Rechercher un livre par titre"
            class="h-fit text-black w-full p-3 mb-6 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div class="col-span-12 grid grid-row-3 stretch">
          <p class="text-8xl m-4 self-start text-left animate-fade-in-down">Ajouter un livre</p>

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
              <h2 class="text-xl font-semibold mb-2">
                {{ livre.volumeInfo.title }}
              </h2>
            </div>
          </div>

          <p v-else class="text-3xl m-4 text-center">
            Aucun résultat trouvé
          </p>

          <p class="text-8xl m-4 self-end text-right animate-fade-in-up">
            à la collection
          </p>
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

  const requete = ref("");
  const resultats = ref([]);
  const { ajouterLivre } = utiliserCollection();

  const chercherLivres = async () => {
    if (requete.value.trim() === "") {
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
    background-image: url("../../public/bibliotheque-2.jpg");
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

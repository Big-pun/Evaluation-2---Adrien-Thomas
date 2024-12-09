<template>
  <div :class="[backgroundClass]">
    <BackgroundContainer>
      <div class="grid grid-cols-12">

        <div v-if="livres.length === 0" class="col-span-12">
          <div class="grid grid-cols-2 pt-12 h-screen">
            <h1 class="text-8xl m-4 text-left animate-fade-in-down">
              Votre collection
            </h1>
            <p class="text-8xl m-4 self-end text-right animate-fade-in-up">
              est vide.
            </p>
          </div>
        </div>

        <div v-else class="flex flex-wrap justify-center gap-6 pt-12 h-screen">
          <CarteLivre
            v-for="livre in livres"
            :key="livre.id"
            :livre="livre"
            class="relative z-10"
          />
        </div>

      </div>
    </BackgroundContainer>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from "vue";
  import CarteLivre from "@/components/CarteLivre.vue";
  import { utiliserCollection } from "@/composables/utiliserCollection";
  import BackgroundContainer from "@/components/BackgroundContainer.vue";

  const { livres } = utiliserCollection();

  // Vérifiez la longueur de livres
  onMounted(() => {
    console.log("Nombre de livres:", livres.value.length);
  });

  const backgroundClass = computed(() => {
    const className =
      livres.value.length === 0 ? "background-empty" : "background-full";
    console.log("Background class:", className); // Vérifiez la valeur de backgroundClass
    return className;
  });
</script>

<style scoped>
  .background-empty {
    background-image: url("../../public/bibliotheque-vide.jpg");
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

  .background-full {
    background-image: url("../../public/bibliotheque.webp");
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
</style>

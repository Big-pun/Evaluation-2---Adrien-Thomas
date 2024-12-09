<template>
  <div :class="[backgroundClass]">
    <BackgroundContainer>
      <div v-if="livres.length === 0">
        <div class="grid grid-cols-2 pt-12 h-screen">
          <h1 class="text-8xl m-4 text-left animate-fade-in-down">
            Votre collection
          </h1>
          <p class="text-8xl m-4 self-end text-right animate-fade-in-up">
            est vide.
          </p>
        </div>
      </div>

      <div v-else class="grid grid-col-3 gap-6 pt-12 h-screen">

        <h1 class="text-8xl m-4 text-left animate-fade-in-down">
          Votre collection
        </h1>

        <splide :options="{
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
              }">
          <SplideSlide v-for="livre in livres" :key="livre.id">
            <CarteLivre :livre="livre" />
          </SplideSlide>
        </Splide>

        <p class="text-8xl m-4 self-end text-right animate-fade-in-up">
            contient {{ livres.length }} livre<span v-if="livres.length > 1">s</span>.
        </p>
      </div>
    </BackgroundContainer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
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
  background-image: url("@/assets/bibliotheque-vide.jpg");
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

.splide__list{
  justify-content: center;
  align-items: center;

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

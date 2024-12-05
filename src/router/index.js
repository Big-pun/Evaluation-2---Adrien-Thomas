import { createRouter, createWebHistory } from 'vue-router'
import AjoutLivre from '@/views/AjoutLivre.vue'
import Accueil from '@/views/Accueil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Accueil,
    },
    {
      path: '/ajout',
      name: 'ajout',
      component: AjoutLivre,
    },
  ],
})

export default router

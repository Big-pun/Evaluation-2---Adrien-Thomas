import { createRouter, createWebHistory } from 'vue-router'
import AjoutLivre from '@/views/AjoutLivre.vue'
import Accueil from '@/views/Accueil.vue'
import Description from '@/views/Description.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Accueil,
    },
    {
      path: '/ajouter',
      name: 'ajouter',
      component: AjoutLivre,
    },
    {
      path: '/livre/:id',
      name: 'description',
      component: Description,
    }
  ],
})

export default router

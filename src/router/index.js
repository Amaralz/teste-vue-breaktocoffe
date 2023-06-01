import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bebidas',
      name: 'bebidas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/bebidasView.vue')
    },
    {
      path: '/salgados',
      name:  'salgados',
      component: () => import('@/views/salgadosView.vue')
    },
    {
      path:'/sobremesas',
      name:'sobremesas',
      component:() => import('@/views/sobremesasView.vue')
    },
    {
      path:'/login',
      name:'login',
      component:() => import('@/views/loginView.vue')
    },
    {
      path:'/cadastro',
      name:'cadastro',
      component:() => import('@/views/cadastroView.vue')
    }
    
  ]
})

export default router

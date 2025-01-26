import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LargeScreen from '@/views/LargeScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LargeScreen,
    },
    {
      path: '/about',
      component: HomeView,
      children:[
        {
          path: '',
          name: 'main',
          component: () => import('@/components/MainComponents/MainView.vue'),
        },
        {
          path: '/person',
          children:[
            {
              path: '',
              name: 'person',
              component: () => import('@/components/PersonCompoents/PersonView.vue'),
            },
            {
              path: 'personth',
              name: 'personth',
              component: () => import('@/components/PersonCompoents/PersonTH.vue'),
            },
            {
              path: 'personfo',
              name: 'personfo',
              component: () => import('@/components/PersonCompoents/PersonFO.vue'),
            },
          ]

        },
        {
          path: '/long',
          name: 'long',
          component: () => import('@/components/LongComponents/LongView.vue')
        },
        {
          path: '/history',
          name: 'history',
          component: () => import('@/components/HistoryComponents/HistoryView.vue')
        },
        {
          path: '/kg',
          name: 'kg',
          component: () => import('@/components/KGComponents/KGView.vue')
        },
        {
          path: '/chat',
          name: 'chat',
          component: () => import('@/components/AIComponents/AIView.vue')
        }
      ]
    },
  ],
})

export default router

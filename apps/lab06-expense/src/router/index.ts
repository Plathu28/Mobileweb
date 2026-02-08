import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import AddExpensePage from '../views/AddExpensePage.vue'; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        // แบบ Lazy Load (โหลดเมื่อใช้)
        component: () => import('@/views/Tab1Page.vue') 
      },
      {
        path: 'tab2',
        // แบบ Import มาตรงๆ (AddExpensePage)
        component: AddExpensePage 
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: '/edit/:id',
        component: () => import('@/views/EditExpensePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
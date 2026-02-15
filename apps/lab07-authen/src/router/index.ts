import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import { authService } from '@/auth/auth-service'; // Import Service ที่เราทำไว้

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue') // เดี๋ยวเราจะสร้างไฟล์นี้
  },
  {
    path: '/tabs/',
    component: TabsPage,
    meta: { requiresAuth: true }, // ✅ เพิ่มบรรทัดนี้ เพื่อบอกว่าต้อง Login ก่อน
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// ✅ เพิ่ม Auth Guard ด้านล่างสุดก่อน export
router.beforeEach(async (to, from, next) => {
  const user = await authService.getCurrentUser();
  
  // 1. ถ้า Login แล้ว แต่อยากเข้าหน้า Login -> ดีดไป Tab1
  if (to.path === "/login" && user) {
    next("/tabs/tab1");
    return;
  }

  // 2. ถ้าหน้านั้นต้องการ Auth (requiresAuth) แต่ยังไม่ Login -> ดีดไป Login
  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    next("/login");
    return;
  }

  // 3. กรณีอื่น ให้ผ่านไปได้
  next();
});

export default router
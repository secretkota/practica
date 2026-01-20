import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/dashboard/dashboard.vue'
import UsersPage from '../modules/admin/pages/usersPage.vue'
import PermissionPage from '../modules/admin/Pages/permissionPage.vue'



const router = createRouter({
  history: createWebHistory('practica'),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/admin/users',
      name: 'UsersComponent',
      component: UsersPage
    },
    {
      path: '/admin/permissions',
      name: 'PermissionsPage',
      component: PermissionPage
    }
  ],
})

export default router

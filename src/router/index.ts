import { createRouter, createWebHashHistory } from 'vue-router'

import UsersPage from '../modules/admin/pages/usersPage.vue'
import PermissionPage from '../modules/admin/Pages/permissionPage.vue'
import Dashboard from '../components/Dashboard/index.vue'



const router = createRouter({
  history: createWebHashHistory(),
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

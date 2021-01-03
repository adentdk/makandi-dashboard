import Vue from 'vue'
import VueRouter from 'vue-router'
import Clean from '@/views/layouts/CleanLayout.vue'
import Dashboard from '@/views/layouts/DashboardLayout.vue'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Clean,
      redirect: 'login',
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/pages/Login/index.vue')
        },
        {
          path: '',
          name: 'Dashboard',
          redirect: 'dashboard',
          component: Dashboard,
          children: [
            {
              path: 'dashboard',
              name: 'Home Dashboard',
              component: () => import('@/views/pages/Dashboard/index.vue')
            },
            {
              path: 'reports',
              name: 'Reports',
              component: () => import('@/views/pages/Error/OnProgress.vue')
            },
            {
              path: 'products',
              name: 'Products',
              component: () => import('@/views/pages/Error/OnProgress.vue')
            },
            {
              path: 'outlets',
              name: 'Outlets',
              component: () => import('@/views/pages/Error/OnProgress.vue')
            },
            {
              path: 'promos',
              name: 'Promos',
              component: () => import('@/views/pages/Error/OnProgress.vue')
            },
            {
              path: 'customers',
              name: 'Customers',
              component: () => import('@/views/pages/Error/OnProgress.vue')
            },
            {
              path: 'analytics',
              name: 'Analytics',
              component: () => import('@/views/pages/Error/OnProgress.vue')
            },
            {
              path: 'settings',
              name: 'Settings',
              component: () => import('@/views/pages/Error/OnProgress.vue')
            },
            {
              path: 'roles-access',
              name: 'Role Access',
              component: Clean,
              children: [
                {
                  path: 'accesses',
                  name: 'Accesses',
                  component: () => import('@/views/pages/Access/index.vue')
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'Not Found',
      component: () => import('@/views/pages/Error/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'Dashboard' })
  else next()
})

export default router

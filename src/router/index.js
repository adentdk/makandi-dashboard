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
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          children: [
            {
              path: '',
              name: 'Home Dashboard',
              component: () => import('@/views/pages/Dashboard/index.vue')
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

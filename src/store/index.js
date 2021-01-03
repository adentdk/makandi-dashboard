import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import authModule from './modules/auth'
import accessModule from './modules/access'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appLoading: false
  },
  getters: {
    clientToken (state) {
      return state.auth.clientToken
    },
    isAuthenticated (state) {
      return !!state.auth.clientToken
    }
  },
  mutations: {
    setAppLoading (state, value = true) {
      state.appLoading = value
    }
  },
  modules: {
    auth: authModule,
    access: accessModule
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
        removeItem: key => Cookies.remove(key)
      },
      paths: [
        'auth.clientToken'
      ]
    })
  ]
})

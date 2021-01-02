import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import authModule from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    clientToken (state) {
      return state.auth.clientToken
    },
    isAuthenticated (state) {
      return !!state.auth.clientToken
    }
  },
  modules: {
    auth: authModule
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
})

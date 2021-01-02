import api from '../../../services/api'

const actions = {
  doLogin: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      commit('setLoading')

      api.post('/auth/login', data).then(response => {
        const { data: { data: { token } } } = response

        commit('setToken', token)

        return resolve(token)
      }).catch(error => {
        const { response } = error

        if (response) {
          return reject(response.data.error.message)
        }

        return reject(error)
      }).finally(() => {
        setTimeout(() => {
          commit('setLoading', false)
        }, 1000)
      })
    })
  },
  getProfile: ({ commit }) => {
    return new Promise((resolve, reject) => {
      api.get('/auth/profile').then(response => {
        const { data: { data: profile } } = response

        commit('setProfile', profile)
      })
    })
  },
  getCompanyProfile: ({ commit }) => {
    return new Promise((resolve, reject) => {
      api.get('/auth/company-profile').then(response => {
        const { data: { data: profile } } = response

        commit('setCompanyProfile', profile)
      })
    })
  },
  getAccesses: ({ commit }) => {
    return new Promise((resolve, reject) => {
      const params = {
        order_by: 'id'
      }

      api.get('/auth/role-access', { params }).then(response => {
        const { data: { data: accesses } } = response

        commit('setAccesses', accesses)
      })
    })
  }
}

export default actions

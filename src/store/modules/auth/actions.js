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
  }
}

export default actions

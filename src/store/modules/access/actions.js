import api from '../../../services/api'

const actions = {
  getAccesses: ({ commit }) => {
    return new Promise((resolve, reject) => {
      const params = {
        order_by: 'id'
      }

      commit('setAppLoading', true, { root: true })

      api.get('/access/accesses', { params }).then(response => {
        const { data: { data: accesses } } = response

        commit('setAccesses', accesses)
      }).finally(() => {
        commit('setAppLoading', false, { root: true })
      })
    })
  },
  getAccessDetail: ({ commit }, accessId) => {
    return new Promise((resolve, reject) => {
      commit('setLoading')

      api.get(`/access/accesses/${accessId}/details`).then(response => {
        const { data: { data: access } } = response
        commit('setAccess', access)
        resolve(access)
      }).finally(() => {
        commit('setLoading', false)
      })
    })
  },
  saveAccess: ({ commit, dispatch }, data) => {
    return new Promise((resolve, reject) => {
      const body = {
        name: data.name,
        path: data.path,
        icon: data.icon,
        type: data.type,
        sub: data.sub
      }

      commit('setLoading')

      api.post('/access/accesses', body).then(response => {
        dispatch('getAccesses')
      }).finally(() => {
        commit('setLoading', false)
      })
    })
  },
  updateAccess: ({ commit, dispatch }, data) => {
    return new Promise((resolve, reject) => {
      const body = {
        name: data.name,
        path: data.path,
        icon: data.icon,
        type: data.type
      }

      commit('setLoading')

      const accessDetails = api.post(`/access/accesses/${data.id}/details`, data.sub)
      const accesss = api.put(`/access/accesses/${data.id}`, body)

      Promise.all([accesss, accessDetails]).then(response => {
        dispatch('getAccesses')
      }).finally(() => {
        commit('setLoading', false)
      })
    })
  },
  deleteAccess: ({ commit, dispatch }, accessId, mode) => {
    return new Promise((resolve, reject) => {
      api.delete(`/access/accesses/${accessId}`).then(response => {
        if (mode !== 'detail') {
          dispatch('getAccesses')
        }
      }).finally(() => {
        commit('setLoading', false)
      })
    })
  }
}

export default actions

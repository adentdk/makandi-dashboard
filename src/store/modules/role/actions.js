import api from '../../../services/api'

const actions = {
  getRoles: ({ commit }) => {
    return new Promise((resolve, reject) => {
      const params = {
        order_by: 'id'
      }

      commit('setAppLoading', true, { root: true })

      api.get('/role/roles', { params }).then(response => {
        const { data: { data: roles } } = response

        commit('setRoles', roles)
      }).finally(() => {
        commit('setAppLoading', false, { root: true })
      })
    })
  },
  getRoleDetail: ({ commit }, roleId) => {
    return new Promise((resolve, reject) => {
      commit('setLoading')

      api.get(`/role/roles/${roleId}/details`).then(response => {
        const { data: { data: role } } = response
        commit('setRole', role)
        resolve(role)
      }).finally(() => {
        commit('setLoading', false)
      })
    })
  },
  saveRole: ({ commit, dispatch }, data) => {
    return new Promise((resolve, reject) => {
      const body = {
        name: data.name,
        path: data.path,
        icon: data.icon,
        type: data.type,
        sub: data.sub
      }

      commit('setLoading')

      api.post('/role/roles', body).then(response => {
        dispatch('getRoles')
      }).finally(() => {
        commit('setLoading', false)
      })
    })
  },
  updateRole: ({ commit, dispatch }, data) => {
    return new Promise((resolve, reject) => {
      const body = {
        name: data.name,
        path: data.path,
        icon: data.icon,
        type: data.type
      }

      commit('setLoading')

      const roleDetails = api.post(`/role/roles/${data.id}/details`, data.sub)
      const roles = api.put(`/role/roles/${data.id}`, body)

      Promise.all([roles, roleDetails]).then(response => {
        dispatch('getRoles')
      }).finally(() => {
        commit('setLoading', false)
      })
    })
  },
  deleteRole: ({ commit, dispatch }, roleId, mode) => {
    return new Promise((resolve, reject) => {
      api.delete(`/role/roles/${roleId}`).then(response => {
        if (mode !== 'detail') {
          dispatch('getRoles')
        }
      }).finally(() => {
        commit('setLoading', false)
      })
    })
  }
}

export default actions

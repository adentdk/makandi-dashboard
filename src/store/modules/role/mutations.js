const mutations = {
  setRoles (state, roles) {
    state.roles = roles
  },
  setRole (state, role) {
    state.role = role
  },
  setLoading (state, value = true) {
    state.loading = value
  }
}

export default mutations

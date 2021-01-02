const mutations = {
  setLoading (state, loading = true) {
    state.loading = loading
  },
  setToken (state, token) {
    state.clientToken = token
  }
}

export default mutations

const mutations = {
  setAccesses (state, accesses) {
    state.accesses = accesses
  },
  setAccess (state, access) {
    state.access = access
  },
  setLoading (state, value = true) {
    state.loading = value
  }
}

export default mutations

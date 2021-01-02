const mutations = {
  setLoading (state, loading = true) {
    state.loading = loading
  },
  setToken (state, token) {
    state.clientToken = token
  },
  setProfile (state, profile) {
    state.profile = profile
  },
  setCompanyProfile (state, companyProfile) {
    state.companyProfile = companyProfile
  },
  setAccesses (state, accesses) {
    state.accesses = accesses
  }
}

export default mutations

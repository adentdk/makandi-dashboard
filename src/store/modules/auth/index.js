import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

const authModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default authModule

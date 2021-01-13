import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

const accessModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default accessModule

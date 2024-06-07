import { createStore } from 'vuex'
import state from './state'
import * as actions from './actions'
import  mutations from './mutations'
import * as getters from './getters'

console.log(mutations);

const store = createStore({
  state,
  actions: { ...actions },
  mutations: { ...mutations },
  getters,
})

export default store;
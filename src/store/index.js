import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './store.actions'
import * as getters from './store.getters'
import * as mutations from './store.mutations'
import { state } from './store.state'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})

console.log(store.state.count)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

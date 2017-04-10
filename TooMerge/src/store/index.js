import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './action'

Vue.use(Vuex)

const state = {
  username: '',
  count: 0,
  webs: [],
  rowNumber: 0
}

export default new Vuex.Store({
  state,
  mutations,
  action
})

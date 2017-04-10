import * as types from './mutation-types'

export default {
  addCount ({commit}, count) {
    commit(types.ADD_COUNT, count)
  },
  decCount ({commit}, count) {
    commit(types.DEC_COUNT, count)
  }
}

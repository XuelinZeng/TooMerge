import * as types from './mutation-types'

export default {
  [types.ADD_COUNT] (state, count) {
    state.count = state.count + count
  },

  [types.DEC_COUNT] (state, count) {
    state.count = state.count - count
  },
  [types.SET_USERNAME] (state, username) {
    state.username = username
  }
}

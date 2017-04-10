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
  },
  [types.SET_WEBS] (state, webs) {
    state.webs = webs
  },
  [types.SET_ROWNUMBER] (state, rowNumber) {
    state.row_number = rowNumber
  }
}

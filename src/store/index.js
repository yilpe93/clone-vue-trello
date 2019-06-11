import Vue from 'vue'
import Vuex from 'vuex'

import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: []
  },
  mutations: {
    SET_IS_ADD_BOARD (state, toggle) {
      state.isAddBoard = toggle
    },
    SET_BOARDS (state, boards) {
      state.boards = boards
    }
  },
  actions: {
    ADD_BOARD(_, { title }) {
      return api.board.create(title)
    },
    FETCH_BAORDS({ commit }) {
      return api.board.fetch()
        .then(data => {
          commit('SET_BOARDS', data.list)
        })
    }
  }
})

export default store

/*
  # State

  # Mutations
  - `commit` 메소드를 통해서 사용
  - 대게 타입에 상수를 사용
  - 변이는 무조건 동기적이어야 한다.

  # Action
  - 상태를 변이시키는 대신 액션으로 변이에 대한 `commit`을 한다.
  - 작업에는 임의의 `비동기 작업`이 포함될 수 있다.

  context => 종합객체, context.state, context.getters => ES6에서 destructure를 통해 { commit } 와 같이 사용할 수 있다.

  `dispatch` 메소드를 통해 사용한다.

  # Getters
*/
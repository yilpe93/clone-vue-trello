import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddBoard: false
  },
  mutations: {
    SET_IS_ADD_BOARD (state, toggle) {
      state.isAddBoard = toggle
    }
  },
  actions: {

  }
})

export default store

/*
  # Mutations
  - `commit` 메소드를 통해서 사용
  - 대게 타입에 상수를 사용
  - 변이는 무조건 동기적이어야 한다.
*/
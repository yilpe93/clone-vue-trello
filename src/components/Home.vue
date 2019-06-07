<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" v-for="board in boards" :key="board.id" 
        :data-bgcolor="board.bgColor" ref="boardItem">
        <router-link :to="`/board/${board.id}`">
          <div class="board-item-title">{{board.title}}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a class="new-board-btn" href="" @click.prevent="addBoard">
          Create new board...
        </a>
      </div>
    </div>
    <AddBoard
      v-if='isAddBoard'
      @submit='onAddBoard' 
    ></AddBoard>
      <!-- @close='isAddBoard = false' -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { board } from '../api'
import AddBoard from './AddBoard'

export default {
  components: {
    AddBoard
  },
  data() {
    return {
      loading: false,
      boards: [],
      error: '',
      // isAddBoard: false
    }
  },
  // computed: {
  //   isAddBoard() {
  //     return this.$store.state.isAddBoard
  //   }
  // },

  // # MapHellper => 이때, computed의 속성으로 따로 추가가 불가능 해지기에 ES6의 destructuring 문법을 사용한다.
  // computed: mapState({
  // }),

  // # ES6..
  computed: {
    ...mapState([
      'isAddBoard'
    ])
  },
  methods: {
    fetchData() {
      this.loading = true;
      
      board.fetch()
        .then(data => {
          this.boards = data.list
        }) 
        .finally(() => {
          this.loading = false;
        })
    },
    addBoard() {
      // this.isAddBoard = true
    },
    onAddBoard(title) {
      board.create(title)
        .then(() => this.fetchData())
        .catch(err => {
          //eslint-disable-next-line
          console.log(err)
        })
    }
  },
  created() {
    this.fetchData();
  },
  updated() {
    // # 매번 호출이 되는데, created 다음에 호출되고 dataset이 변화를 감지하면 호출된다.
    this.$refs.boardItem.forEach(el => {
      el.style.backgroundColor = el.dataset.bgcolor
    })
  }
}
</script>

<style scoped>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item-new {
  background-color: #ddd;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0,0,0, .1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700;
}
</style>
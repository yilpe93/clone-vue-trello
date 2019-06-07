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
  </div>
</template>

<script>
import { board } from '../api';

export default {
  data() {
    return {
      loading: false,
      boards: [],
      error: ''
    }
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
      //eslint-disable-next-line
      console.log('addBoard()')
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
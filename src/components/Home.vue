<template>
  <div>
    Home Page
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="board in boards" :key=board.id>
          {{board}}
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/board/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/board/2">Board 2</router-link>
        </li>
      </ul>
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
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      
      board.fetch()
        .then(data => {
          this.boards = data
        }) 
        .finally(() => {
          this.loading = false;
        })
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style lang="scss" scoped>

</style>
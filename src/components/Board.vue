<template>
  <div>
    Board
    <div v-if="loading">loading board...</div>
    <div v-else>
      <div>id: {{ id }}</div> 
      <router-link :to="`/board/${id}/card/1`">Card 1</router-link>
      <router-link :to="`/board/${id}/card/2`">Card 2</router-link>
      <router-link :to="`/board/${id}/card/3`">Card 3</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      id: 0,
      loading: false
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.id = this.$route.params.id;
        this.loading = false;
      }, 500)
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    Card
    <div v-if="loading">loading card...</div>
    <div v-else>cardId: {{ cardId }}</div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      cardId: 0,
      loading: false
    }
  },
  watch: {
    // 감시하려는 객체
    // '$route' () {
    //   this.fetchData();
    // }
    '$route': {
      handler: 'fetchData',
      immediate: true // 즉시 실행
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.cardId = this.$route.params.id;
        this.loading = false
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
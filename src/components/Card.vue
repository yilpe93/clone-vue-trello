<template>
  <div>
    Card
    <div>cardId: {{ cardId }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardId: 0
    }
  },
  watch: {
    // 감시하려는 객체
    '$route' () {
      this.cardId = this.$route.params.id
    }
  },
  created() {
    this.cardId = this.$route.params.id;
  }  
}
</script>

<style lang="scss" scoped>

</style>
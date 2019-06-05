<template>
  <div>
    Board
    <div>id: {{ id }}</div> 
    <router-link :to="`/board/${id}/card/1`">Card 1</router-link>
    <router-link :to="`/board/${id}/card/2`">Card 2</router-link>
    <router-link :to="`/board/${id}/card/3`">Card 3</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 0
      }
    },
    created() {
      this.id = this.$route.params.id;
    }
  }
</script>

<style lang="scss" scoped>

</style>
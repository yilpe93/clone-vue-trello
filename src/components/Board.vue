<template>
  <div>
    Board
    <p>id: {{ id }}</p> 
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
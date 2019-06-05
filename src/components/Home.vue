<template>
  <div>
    Home Page
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>Api result: {{ apiRes }}</div>
      <div v-if="error">error: {{ error }}</div>
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
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      apiRes: '',
      error: ''
    }
  },
  methods: {
    fetchData() {
      this.loading = true;

      /*
      // Http call (브라우저 별로 지원하지 않을 수도 있기에 jQuery의 ajax 라이브러리를 사용)
      const req = new XMLHttpRequest();
      req.open('GET', 'http://localhost:3000/health');
      req.send();
      req.addEventListener('load', () => {
        this.loading = false;
        this.apiRes = {
          status: req.status,
          statusText: req.statusText,
          response: JSON.parse(req.response)
        }
      });
      */

      axios.get('http://localhost:3000/health')
        .then(res => {
          this.apiRes = res.data;
        })
        .catch(res => {
          this.error = res.response.data;
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
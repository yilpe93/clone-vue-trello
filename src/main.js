import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// middleware
Vue.use(VueRouter)

const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Page not found</div>' }

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: App },
    { path: "/login", component: Login },
    { path: "*", component: NotFound }
  ]
})


Vue.config.productionTip = false

new Vue({
  // # route 구현
  // computed: {
  //   VueComponent() {
  //     return routes[window.location.pathname] || Notfound
  //   }
  // },
  // render(h) {
  //   return h(this.VueComponent)
  // }

  router,
  render: h => h({ template: '<router-view></router-view>' })
}).$mount('#app')

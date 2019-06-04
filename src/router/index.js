import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Board from '@/components/Board'
import NotFound from '@/components/NotFound'

// middleware
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/board/:id", component: Board },
    { path: "*", component: NotFound }
  ]
})

export default router;
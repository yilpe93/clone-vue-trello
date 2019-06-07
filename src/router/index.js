import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Board from '@/components/Board'
import Card from '@/components/Card'
import NotFound from '@/components/NotFound'

// middleware
Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?returnPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home, beforeEnter: requireAuth },
    { path: "/login", component: Login },
    { path: "/board/:id", 
      component: Board,
      beforeEnter: requireAuth, 
      children: [
        { path: "card/:id", component: Card, beforeEnter: requireAuth }
      ]
    },
    { path: "*", component: NotFound }
  ]
})

export default router;
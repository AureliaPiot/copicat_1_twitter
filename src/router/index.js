import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  // -----------------------------
  {
    path: '/profile',
    name: 'profile',
   
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },
  // -----------------------------
  {
    path: '/explorer',
    name: 'explorer',
  //  component:function(){
    // import(/* webpackChunkName: "explorer" */ '../views/ExplorerView.vue')
  //  }
    component: () => import(/* webpackChunkName: "explorer" */ '../views/ExplorerView.vue')
  },
  {
    path: '/trend',
    name: 'trend',
    component: () => import(/* webpackChunkName: "explorer" */ '../views/TrendView.vue')
  },


  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "explorer" */ '../views/MessageView.vue')
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

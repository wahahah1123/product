import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from "./components/product/index.vue"
import theater from "./components/product/theater.vue"
import me from "./components/product/me.vue"
import login from "./components/product/login.vue"
import titck from "./components/product/titck.vue"
import shop from "./components/product/shop.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:index
    },{
      path:"/theater",
      component:theater
    },{
      path:"/me",
      component:me
    },
    {
      path:"/login",
      component:login
    },{
      path:"/titck",
      component:titck
    },{
      path:"/shop",
      component:shop
    }
  ]
})

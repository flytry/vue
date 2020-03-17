import Vue from 'vue'
import Router from 'vue-router'
//引入主页
import index from '../components/index.vue'
import cateList from '../components/cateList.vue'
import home from '../components/home.vue'
import cart from '../components/cart.vue'
import personal from '../components/personal.vue'
//声明使用
Vue.use(Router)
//实例化路由器对象并向外暴露
export default new Router({
  // 去掉#号
  mode:'history',
  routes:[
    {
      path:'/',
      name:'index',
      component:index
    },
    {
      path:'/cateList',
      name:'cateList',
      component:cateList
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/cart',
      name:'cart',
      component:cart
    },
    {
      path:'/personal',
      name:'personal',
      component:personal
    }
  ]
})

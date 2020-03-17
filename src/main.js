// import './assets/rem.js'
import Vue from 'vue'
import App from './App'
import router from './router'

import {Button,Row,Col,Search,Tab,Tabs,Swipe,SwipeItem,Grid, GridItem,Tabbar, TabbarItem,
  CountDown,Sticky, Sidebar, SidebarItem,NavBar,Icon   } from 'vant';
Vue.use(Button).use(Row).use(Col).use(Search).use(Tab).use(Tabs).use(Swipe).use(SwipeItem)
.use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(CountDown).use(Sticky).use(Sidebar)
.use(SidebarItem).use(NavBar).use(Icon);





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

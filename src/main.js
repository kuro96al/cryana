import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
import BootstrapVue from 'bootstrap-vue'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

/* ...there may be other imports here */
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

//import VueResource from 'vue-resource'

import VueRouter from 'vue-router'
import routes from './routes'

import TopBar from'./components/TopBar.vue'
import SideBar from'./components/SideBar.vue'
import Body from'./Body.vue'

Vue.use(ElementUI, { locale })
Vue.use(BootstrapVue)
//Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})
new Vue({
  router,
  render: h => h(Body)
}).$mount('#bodys')
/*
new Vue({
  el: '#sidebar',
  render: h => h(SideBar)
})
*/


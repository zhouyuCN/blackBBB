import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import moment from 'moment';

//导入全局样式
import './assets/statics/site/css/style.css';

Vue.config.productionTip = false
//路由
import vueRoutre from 'vue-router'
Vue.use(vueRoutre);
//axios抽取
Vue.prototype.$axios = axios;
//基地址设置
axios.defaults.baseURL = 'http://111.230.232.110:8899/';
//导入 组件
import index from './components/index.vue';
import cart from './components/cart.vue';
import detail from './components/detail.vue';



//规则
let routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/detail/:id',
    component: detail
  },
 
]

let router = new vueRoutre({
  routes
})
new Vue({
  el:'#app',
  render: h => h(App),
  router
})

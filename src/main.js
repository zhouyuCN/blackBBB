import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import moment from 'moment';
Vue.config.productionTip = false
//导入全局样式
import './assets/statics/site/css/style.css';
//导入饿了么UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//路由
import vueRoutre from 'vue-router'
Vue.use(vueRoutre);
//axios抽取
Vue.prototype.$axios = axios;
//抽取全局时间过滤器,导入moment
Vue.filter('golbalFormatTime', function (value, fmtemplate) {
  if (fmtemplate) {
    return moment(value).format(fmtemplate);
  } else {
    return moment(value).format('YYYY-MM-DD');
  }

})

//基地址设置
axios.defaults.baseURL = 'http://111.230.232.110:8899/';
//导入 组件

import router from  './router.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
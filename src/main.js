import Vue from 'vue'
import App from './App.vue'
import vueRoutre from 'vue-router'

Vue.use(vueRoutre);
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App)
})

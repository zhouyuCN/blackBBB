
import Vue from 'vue';
import vueRoutre from 'vue-router'
Vue.use(vueRoutre);

import index from './components/index.vue';
import cart from './components/cart.vue';
import detail from './components/detail.vue';
//会员中心
import userCenter from './components/userCenter.vue';
import userContainer from './components/userContainer.vue';
import userDetails from './components/userDetails.vue';
import userOrder from './components/userOrder.vue';

//规则
let routes = [{
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
  {
    path: '/userContainer',
    component: userContainer,
    redirect:'/userContainer/userCenter',
    children: [
      {
        path: 'userDetails',
        component: userDetails
      },
      {
        path: 'userCenter',
        component: userCenter
      },
      {
        path: 'userOrder',
        component: userOrder
      },
    ]
  },

]

let router = new vueRoutre({
  routes
})

export default router
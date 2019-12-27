import Vue from 'vue';
import Router from 'vue-router';
import Vmall from '@/components/Vmall';
import MyCart from '@/components/MyCart';
import Login from  '@/components/login'
import CheckPic from '@/components/login/CheckPic'
import CodeMain from '@/components/login/CodeMain'
import RegisterPage from '@/components/register/RegisterPage'
import SearchDemoPage from '@/components/search/SearchDemoPage'

import LoginMain from '@/components/login/login'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
    	path: '/vmall',
      component: Vmall
    },
    {
    	path: '/my-cart',
      component: MyCart
    },
    {
      path:'/checkpic',
      component:CheckPic
    },{
      path:'/code',
     // component:()=>{inport('@/components/login/CodeMain') }
     component:CodeMain
    },{
      path:'/register',
      component:RegisterPage
    },
    {
      path:'/sq',
      component:SearchDemoPage
    },
    {
      path:"/loginMain",
      component:LoginMain
    }
  ]
})
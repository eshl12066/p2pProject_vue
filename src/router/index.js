import Vue from 'vue'
import Router from 'vue-router'

//管理员登陆界面
import ManageLogin from '@/views/management/home/ManageLogin'
//用户登陆注册界面
import ReceptionLogin from '@/views/reception/home/ReceptionLogin'
import ReceptionReg from '@/views/reception/home/ReceptionReg'

//后台首页界面
import ManageMent from '@/components/management/home/ManageMent'

//后台其他组件


//前台首页界面
import Reception from '@/components/reception/home/Reception'

//前台其他组件

import Articles from '@/views/demo/sys/Articles'
import VuexPage1 from '@/views/demo/sys/VuexPage1'
import VuexPage2 from '@/views/demo/sys/VuexPage2'
Vue.use(Router)

export default new Router({
  routes: [{//管理员登陆
      path: '/ManageLogin',
      name: 'ManageLogin',
      component: ManageLogin

    },
    {//前台登陆
      path: '/ReceptionLogin',
      name: 'ReceptionLogin',
      component: ReceptionLogin

    },
    {//前台注册
      path: '/ReceptionReg',
      name: 'ReceptionReg',
      component: ReceptionReg

    }
    ,
    {//后台管理的主界面
      path: '/ManageMent',
      name: 'ManageMent',
      component: ManageMent,
      children: [{
        path: '/sys/Articles',
        name: 'Articles',
        component: Articles
      },
        {
          path: '/sys/VuexPage1',
          name: 'VuexPage1',
          component: VuexPage1
        },
        {
          path: '/sys/VuexPage2',
          name: 'VuexPage2',
          component: VuexPage2
        }
      ]
    }
    ,
    {//前台管理的主界面
      path: '/',
      name: 'Reception',
      component: Reception,
      children: [{
        path: '/sys/Articles',
        name: 'Articles',
        component: Articles
      },
        {
          path: '/sys/VuexPage1',
          name: 'VuexPage1',
          component: VuexPage1
        },
        {
          path: '/sys/VuexPage2',
          name: 'VuexPage2',
          component: VuexPage2
        }
      ]
    }

  ]
})

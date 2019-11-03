// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
// process.env.MOCK && require('@/mock')
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from '@/api/http'
import VueAxios from 'vue-axios'
import store from './store'

Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,//在main.js中导入store实例
  data(){
    return{
      Bus: new Vue({

      })
    };

  },
  components: { App },
  template: '<App/>'
})

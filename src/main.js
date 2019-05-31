// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入外部字体图标
import './assets/icon/iconfont.css'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import VueResource from 'vue-resource'
Vue.use(VueResource)
// 懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);

Vue.http.options.root='http://127.0.0.1:5000/';
Vue.config.productionTip = false

import moment from "moment"

Vue.filter('datefmt',(date,arg="YYYY-MM-DD hh:mm:ss")=>{
  return moment(date).format(arg)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

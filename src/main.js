// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import util from './libs/util'
Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let user = util.getUserName()
  if (user) {
    // 允许通过，按照正常的逻辑向下跳转
    next()
  } else {
    // 登陆的路由是不需要验证权限的
    if (to.path !== '/login') {
      // 如果没有权限，从新跳转到登录页面
      next({path: '/login'})
    } else {
      // 是登录页，直接跳转到登录页面
      next()
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

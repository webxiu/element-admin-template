import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from './config/httpConfig'
import './styles/index.scss'
import * as globalFilter from './filters'

Vue.prototype.$http = axios;

Object.keys(globalFilter).forEach(key => {
  Vue.filter(key, globalFilter[key])
})

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach( (to, from, next) => {
  // console.log(to, 'xx', from)
  if( !store.state.UserToken ) {
    if( to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth) ){
      next();
    }else {
      next({path: '/login'});
    }
  }else {
    if( !store.state.permission.permissionList ){
      store.dispatch('permission/FETCH_PERMISSION').then(() =>{
        next({ path: to.path })
      })
    }else{
      if(to.path !== '/login'){
        next()
      }else{
        next( from.fullPath )
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

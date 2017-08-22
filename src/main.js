// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
Vue.use(VueResource)
Vue.config.productionTip = false
import './assets/base.css'
// import './assets/flexMobile.js'
/* eslint-disable no-new */
new Vue({
  router,
  data: {
    Bus: new Vue()
  },
  render: h => h(App)
}).$mount('#app')

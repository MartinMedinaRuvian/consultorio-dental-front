import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

/**
 * Agregamos la URL base de nuestra API. Para conectarse al backend local:
 * SprinBoot
 */
axios.defaults.baseURL = 'http://localhost:8080/api/';


/**
 * Agregamos la URL base de nuestra API. Para conectarse al backend de producción heroku:
 */
//axios.defaults.baseURL = 'https://somarufps.herokuapp.com';


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

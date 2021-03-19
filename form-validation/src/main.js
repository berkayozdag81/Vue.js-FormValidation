import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
})

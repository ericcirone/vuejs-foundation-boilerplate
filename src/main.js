import Vue from 'vue'
import App from './App.vue'
import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'
import './scss/app.scss'

new Vue({
  el: '#app',
  render: h => h(App)
})

import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import 'common/stylus/index.styl'
fastClick.attach(document.body);


new Vue({
  el: '#app',
  render: h => h(App)
})

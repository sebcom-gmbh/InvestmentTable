import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var vm = new Vue({
  render: h => h(App),
}).$mount('#app')

$(document).ready(function(){
  setInterval(function(){
    console.log(vm.$refs.app); 
    console.log(vm.$children[0].$children[0].forceRerender())
  }, 3000);
  });
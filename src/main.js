import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';


axios.defaults.baseURL="https://api.logicsaint.com/api/";
axios.defaults.headers.common['Accept']='application/json';


// store.subscribe((mutation, state) => {
// 	// Store the state object as a JSON string
// 	localStorage.setItem('store', JSON.stringify(state));
// });

// axios.defaults.headers.put['Authorization']="Bearer "+localData.token

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // beforeCreate() {
	// 	this.$store.commit('initialiseStore');
	// },
  render: h => h(App)
}).$mount('#app')

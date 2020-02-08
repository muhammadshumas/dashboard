import Vue from 'vue'
import Vuex from 'vuex'
import token from "./modules/token";
import userData from "./modules/userData"
import usersList from "./modules/userList"
import loading from "./modules/loader"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    // 		initialiseStore(state) {
		// 	// Check if the ID exists
		// 	if(localStorage.getItem('store')) {
		// 		this.replaceState(
		// 			Object.assign(state, JSON.parse(localStorage.getItem('store')))
		// 		);
		// 	}
		// }
  },
  actions:{
  },
  modules: {
    token,
    userData,
    usersList,
    loading
  }
})

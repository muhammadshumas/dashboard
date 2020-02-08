const state={
	token:null
}

const getters={
	getToken(state){
		return state.token
	}
}

const mutations={
	setToken(state,payload){
		state.token=payload
		console.log(state.token)
	}
}
const actions ={
	setToken({commit},payload){
		commit("setToken",payload)
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}
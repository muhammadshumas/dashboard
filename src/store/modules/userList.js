const state={
	usersList:[]
}

const getters={
	getUsersList(state){
    return state.usersList
	}
}

const mutations={
	setUsersList(state,payload){
    state.usersList=payload
    console.log(state.usersList)
	},
	deleteUser(state,payload){
		let deletedUserIndex=state.usersList.findIndex((user)=>{
			return user.id===payload
		})
		state.usersList.splice(deletedUserIndex,1)
	}
}
const actions ={
	setUsersList({commit},payload){
		commit("setUsersList",payload)
	},
	deleteUser({commit},payload){
		commit("deleteUser",payload)
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}
const state={
	userData:{

  }
}

const getters={
	getUserData(state){
		if(localStorage.getItem("userData")){
      let localData=JSON.parse(localStorage.getItem("userData"))
      return state.userData=localData
    }
    else{
      return state.userData={}
    }
	}
}

const mutations={
	setUserData(state,payload){
    state.userData=payload
    console.log(state.userData)
  },
  clearUserData(state){
    state.UserData=null
  }
}
const actions ={
	setUserData({commit},payload){
		commit("setUserData",payload)
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/main/home.vue'
import axios from "axios"
import Store from "../store/index"


Vue.use(VueRouter)

const Login=resolve=>{
	require.ensure(["../components/login/login.vue"],()=>{
		resolve(require("../components/login/login.vue"))
	})
}
const Register=resolve=>{
	require.ensure(["../components/register/register.vue"],()=>{
		resolve(require("../components/register/register.vue"))
	})
}
const Users=resolve=>{
	require.ensure(["../components/main/users.vue"],()=>{
		resolve(require("../components/main/users.vue"))
	})
}

const routes = [
  {
    path: '',
    name: 'Home',
		component: Home,
		beforeEnter:((to,from,next)=>{
			if(localStorage.getItem("userData")){
				next()
			}else{
				next("/login")
			}
		})
	},
	
  {
    path: '/users',
    name: 'Users',
		component: Users,
		beforeEnter:((to,from,next)=>{
			if(localStorage.getItem("userData")){
				let localData=localStorage.getItem("userData")
				let parsedData=JSON.parse(localData)
				axios.get("https://api.logicsaint.com/api/users",{headers:{
					Authorization:`Bearer ${parsedData.token}`
				}}).then(res=>{
					Store.dispatch("setUsersList",res.data.data)
					Store.dispatch("setLoading",false)
				})
				next()
			}else{
				next("/login")
			}
		})
	},
	
	{
		path:"/login",
		name:"login",
		component:Login
	},
	{
		path:"/register",
		name:"register",
		component:Register
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

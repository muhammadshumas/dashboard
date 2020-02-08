<template>
    <v-col cols="6">
      <v-form
      >
        <v-text-field
          v-model="email"
          label="E-mail"
          required
          class="mb-3"
        ></v-text-field>
      
          <v-text-field
            v-model="password"
            name="password"
            label="Password"
						type="password"
          ></v-text-field>


        <div class="text-center">
          <v-btn
            color="indigo"
            class="mr-4 white--text"
            @click.prevent="onSubmit()"
            :disabled="isLoading"
          >
            Login
          </v-btn>
          <span>Or</span>
          <v-btn @click="toRegister()"
            color="blue"
            class="ml-4 white--text"
          >
            Signup
          </v-btn>
          <p class="warning--text">{{error}}</p>
        </div>
      </v-form>
    </v-col>
</template>

<script>
	import axios from "axios"
	import {mapActions} from "vuex"
  export default {
    data: () => ({
      password: '',
      email: '',
      isLoading:false,
      error:""
    }),

    methods: {
			...mapActions(["setUserData"]),
			onSubmit(){
        this.isLoading=true
				axios.post("login",{email:this.email,password:this.password}).then(res=>{
          let resData=JSON.stringify(res.data)
          localStorage.setItem("userData",resData)
          this.$store.dispatch("setUserData",res.data)
          this.isLoading=false
          this.$router.push("/")
				}).catch(err=>{
          this.isLoading=false
        })
      },
      toRegister(){
        this.$router.push("/register")
      }
    },

  }
</script>
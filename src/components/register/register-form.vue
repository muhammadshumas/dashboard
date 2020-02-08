<template>
  <v-col cols="6">  
  <v-form
  >
    <v-text-field
      v-model="name"
      label="Name"
			name="name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
			name="email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
			name="password"
			type="password"
    ></v-text-field>

    <v-text-field
      v-model="confirmPassword"
      label="Confirm Password"
			name="confirm_password"
			type="password"
    ></v-text-field>

    <div class="text-center">
      <v-btn
        color="blue"
        class="white--text"
				@click.prevent="onSubmit()"
        :disabled="isloading"
      >
        Register
      </v-btn>
    </div>
  </v-form>
</v-col>

</template>

<script>
	import axios from "axios"
	import {mapActions} from "vuex"
  export default {
    data: () => ({
      name: '',
      email: '',
      password:"",
      confirmPassword:"",
      isLoading:false
    }),

    methods: {
      ...mapActions(["setUserData"]),
			onSubmit(){
        this.isLoading=true
				axios.post("register",{
					name:this.name,
					email:this.email,
					password:this.password,
					'confirm_password':this.confirmPassword}).then(res=>{
            console.log(res)
            let resData=JSON.stringify(res.data)
            localStorage.setItem("userData",resData)
            this.$store.dispatch("setUserData",res.data)
            this.isLoading=false
						this.$router.push("/")
					})
			}

    },
  }
</script>
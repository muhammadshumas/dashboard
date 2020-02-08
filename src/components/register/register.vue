<template>
  <v-app>
    <app-register-message></app-register-message>
    <v-container>
      <v-row class="justify-center">
        <app-register-form></app-register-form>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import registerMessage from "./register-message"
import registerForm from "./register-form"

export default {
  components:{
    appRegisterMessage:registerMessage,
    appRegisterForm:registerForm
  }
}
</script>
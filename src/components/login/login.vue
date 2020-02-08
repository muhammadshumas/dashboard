<template>
  <v-app>
    <app-login-message></app-login-message>
    <v-container>
      <v-row class="justify-center">
        <app-login-form></app-login-form>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import loginMessage from "./login-message"
import loginForm from "./login-form.vue"
export default {
  components:{
    appLoginForm:loginForm,
    appLoginMessage:loginMessage
  }
}
</script>
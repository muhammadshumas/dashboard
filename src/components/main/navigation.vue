<template>
<div>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="indigo"
      dark
      hide-on-scroll
      relative
      style="height:auto;"
    >
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="$store.getters.getUserData.name">Welcome {{$store.getters.getUserData.name}}</v-toolbar-title>
      <v-toolbar-title v-else>Welcome</v-toolbar-title>
			<ul class="d-flex">
        <li @click="clearUserData()" style="cursor:pointer">Log Out</li>
			</ul>
    </v-app-bar> 
  </v-card>

<v-sheet
      class="overflow-hidden"
    >
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{$store.getters.getUserData.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link tag="li" :to="{name:item.title}">{{item.title}}</router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>

  </div>
</template>


<script>
  import {mapActions} from "vuex"
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'Users', icon: 'supervisor_account' },
        ],
      }
    },
    mounted(){
      let appBar=document.querySelector(".v-toolbar__content")
			appBar.style.height="auto"
			appBar.style.justifyContent="space-between"
    },
    methods:{
      clearUserData(){
        console.log("running")
        localStorage.removeItem("userData")
        this.$router.push("/login")
      }
    }
  }
  

</script>

<style scoped>

</style>
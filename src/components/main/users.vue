<template>
<v-container>

  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="usersData"
    :single-select="singleSelect"
    item-key="id"
    show-select
		:loading="$store.getters.getLoading" 
    loading-text="Loading... Please wait"
    class="elevation-1 mx-12"
		@click=deleteUser($event)
  >

<template v-slot:item.update="{item}">
<v-btn depressed small @click="updateData(item)" color="primary">Update</v-btn>
</template>


<template v-slot:item.delete="{item}">
  <v-btn  @click="deleteUser(item.id)" depressed small color="warning">Delete</v-btn>
</template>

  <template v-slot:top>
    <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
  </template>
  
  </v-data-table>

<v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template> -->
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="selectedUser.name" name="name" label="Name*" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field v-model="selectedUser.email" name="email" label="Email*" required></v-text-field>
              </v-col>
							
            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="updateRequest()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

</v-container>

</template>


<script>
	import axios from "axios"
	import {mapActions} from "vuex"
  export default {
    data () {
      return {
        dialog: false,
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: true,
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Role', value: 'role' },
          { text: '', value: 'update' },
          { text: '', value: 'delete' },
				],
				selectedUser:{
					name:"",
					email:"",
					id:""
				}
      }
    },

    computed:{
      usersData:function(){
        return this.$store.getters.getUsersList
			},
			
    },
    methods:{
			...mapActions(["deleteUser"]),
      deleteUser(ID){
				let localData=JSON.parse(localStorage.getItem("userData"))
				axios.delete(`https://api.logicsaint.com/api/users/${ID}`,{headers:{authorization:`Bearer ${localData.token}`}}).then(res=>{
          console.log(res)
					this.$store.dispatch("deleteUser",ID)
				})
			},
			updateData(item){
				this.dialog=!this.dialog
        this.selectedUser=item
        console.log(this.$router.currentRoute)
			},
			updateRequest(){
        this.dialog=false
        let localData=JSON.parse(localStorage.getItem("userData"))
        let data={
          name:this.selectedUser.name,
          email:this.selectedUser.email
        }
        let headers={
          authorization:`Bearer ${localData.token}`,
          accept:"application/json"
        }
        axios.put(`users/${this.selectedUser.id}`,data,{
          headers:headers
        })
        .then((res)=>{
          console.log(res)
        })
    
			}
    }
  }
</script>
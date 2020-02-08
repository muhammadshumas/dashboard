<template>
  <v-app>
    <app-navigation v-if="$router.currentRoute.name!=='login' && $router.currentRoute.name!=='register'" ></app-navigation>
    <router-view></router-view>
  </v-app>
</template>


<script>

import navigation from "./components/main/navigation"
export default {
  name: 'App',
  components: {
    appNavigation:navigation
  },

  data: () => ({

  }),
};
</script>

<style >
	li{
		list-style:none !important;
	}
</style>

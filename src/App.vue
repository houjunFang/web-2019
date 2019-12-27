<template>
  <div id="app">
    
    <div id="view">
    		<router-view></router-view>
    </div>
		<listen></listen>
		<!-- <menus></menus> -->
		<!-- <register-view></register-view> -->
  </div>
</template>

<script>
	//import Menus from "./components/Menus"
	import Listen from "./components/Listen"
//	import RegisterView from '@/components/register/RegisterView'
		
	export default {
	  name: "App",
		//components: {Menus,Listen}
		components: {Listen}
	}
</script>

<style scoped>
	#app {}
	#view {
		position:absolute;
		top:65px;
		bottom:15px;
		left:10%;
		right:10%;
	}
</style>
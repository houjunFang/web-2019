<template>
  <div id="app">
    <menus></menus>
    <div id="view">
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>
	import Menus from "./components/Menus";	
		
	export default {
	  name: "App",
	  components: {Menus}
	}
</script>

<style>
	#app {}
	#view {
		position:absolute;
		top:65px;
		bottom:15px;
		left:10%;
		right:10%;
		border:1px solid #ccc;
	}
</style>
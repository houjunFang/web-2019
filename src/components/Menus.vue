<template>
	<div class="pure-menu pure-menu-horizontal">
	    <ul class="pure-menu-list">
	        <li class="pure-menu-item" v-for="menu in menus"
	        	:key="menu.id" 
	        	:class="[menu.id == activeId ? 'pure-menu-selected' : '']"
	        	@click="switchMenu(menu.id)">
	        	<router-link :to="menu.path" class="pure-menu-link">{{menu.name}}</router-link>
	        </li>
	    </ul>
	</div>
</template>

<script>
	export default {
		name: "Menus",
		data: function() {
			return {
				activeId: 1,
				menus: [{
					id: 1,
					name: "VMall",
					path: "/vmall"
				}, {
					id: 2,
					name: "My Cart",
					path: "/my-cart"
				}]
			}
		},
		methods: {
			//切换菜单选择状态
			switchMenu: function(menuId) {
				this.activeId = menuId;
			}
		}
	}
</script>

<style scoped>
	.pure-menu-horizontal {padding:0 10%;background-color:rgba(0,0,0,.8);}
	.pure-menu-link {margin-right:1px;padding:1em;font-size:14px;color:#eee;}
	.pure-menu-selected .pure-menu-link, 
	.pure-menu-selected .pure-menu-link:visited {color:#333;background-color:#ffcc33;}
	.pure-menu-active>.pure-menu-link, 
	.pure-menu-link:focus, 
	.pure-menu-link:hover {color:#333;background-color:#ffcc33;}
</style>
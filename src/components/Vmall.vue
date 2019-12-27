<template>
    <div>
    <menus></menus>
	<keep-alive>
	<div class="pure-g">
	    <div class="pure-u-1-4" v-for="product in products" :key="product.id">
	    	<div class="panel">
	    		<img :src="product.pic" class="pure-img" />
	    		<h3>{{product.name}}</h3>
	    		<p>{{product.price | currency}}</p>
	    		<div class="panel-btn">
	    			<buy-btn @addToCart="addToCart(product.id)" 
	    				@removeFromCart="removeFromCart(product.id)"></buy-btn>
	    		</div>
	    	</div>
	    </div>
	</div>
	</keep-alive>
    </div>
</template>

<script>
	import BuyBtn from "@/components/common/BuyBtn"
	import Menus from "@/components/Menus"

	
	export default {
		name: "Vmall",
		data() {
			return {
				products: [] //商品数组
			}
		},
		components: {BuyBtn,Menus},
		methods: {
			addToCart: function(productId) {
				//console.log("Add to cart ...");
				//debugger;
				this.vHandler.$emit("addToCart11", productId);
				this.vHandler.$emit("searching");
				//this.$emit("addToCart", productId);
				
			},
			removeFromCart: function(productId) {
				//console.log("Remove from cart ...");
				this.vHandler.$emit("removeFromCart", productId);
			}
		},
		beforeMount: function() {
			this.$http.get("./static/data/products.json").then(function(resp) {
				//console.log("Success: ", resp.data);
				this.products = resp.data;
			}, function(resp) {
				console.log("Fail: ", resp.status, resp.statusText);
			});
		}
	}
</script>

<style scoped>
	.pure-g {margin:0 -10px;}
	.panel {position:relative;margin:0 10px;border:1px solid #ccc;}
	.panel img {display:block;margin-bottom:20px;width:100%;height:250px;}
	.panel h3, 
	.panel p {margin:10px 0;padding:0 10px;line-height:1em;}
	.panel-btn {position:absolute;right:10px;bottom:10px;}
</style>
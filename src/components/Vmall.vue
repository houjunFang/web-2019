<template>
	<div class="pure-g">
	    <div class="pure-u-1-4" v-for="product in products" :key="product.id">
	    	<div class="panel">
	    		<img :src="product.pic" />
	    		<h3>{{product.name}}</h3>
	    		<p>{{product.price | currency}}</p>
	    		<div class="panel-btn">
	    			<buy-btn @addToCart="addToCart" @removeFromCart="removeFromCart"></buy-btn>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>

<script>
	import BuyBtn from "./common/BuyBtn";
	
	export default {
		name: "Vmall",
		data() {
			return {
				products: []
			}
		},
		components: {BuyBtn},
		methods: {
			addToCart: function() {
				//console.log("Add to cart ...");
				this.vHandler.$emit("addToCart");
			},
			removeFromCart: function() {
				//console.log("Remove from cart ...");
				this.vHandler.$emit("removeFromCart");
			}
		},
		beforeMount: function() {
			this.$http.get("/static/data/products.json").then(function(resp) {
				//console.log("Success: ", resp.data);
				this.products = resp.data;
			}, function(resp) {
				console.log("Fail: ", resp.status, resp.statusText);
			});
		}
	}
</script>

<style>
	.pure-g {margin:0 -10px;}
	.panel {position:relative;margin:0 10px;border:1px solid #ccc;}
	.panel img {display:block;margin-bottom:20px;width:100%;height:250px;}
	.panel h3, 
	.panel p {margin:10px 0;padding:0 10px;line-height:1em;}
	.panel-btn {position:absolute;right:10px;bottom:10px;}
</style>
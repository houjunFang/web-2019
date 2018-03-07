<template>
	<button class="button-small pure-button" :class="{'pure-button-primary': active}" 
		@click='clickBtn'>{{btnTxt}}</button>
</template>

<script>
	export default {
		name: "BuyBtn",
		data() {
			return {
				active: true,
				btnTxt: "加入购物车"
			}
		},
		methods: {
			clickBtn: function() {
				if(this.active) {
					this.active = false;
					this.btnTxt = "取消购买";
					this.$emit("addToCart");
				}else {
					this.active = true;
					this.btnTxt = "加入购物车";
					this.$emit("removeFromCart");
				}
			}
		}
	}
</script>

<style>
</style>
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import VueResource from 'vue-resource';
import App from './App';

Vue.config.productionTip = true;

Vue.use(VueResource);

/* Filters */
Vue.filter("currency", function(val) {
	var num = parseFloat(val).toFixed(2);
	var reg = /\d{1,3}(?=(\d{3})+$)/g;
	var currency = num.toString().replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(reg,"$&,")+s2;}); //加千分位
	return "￥"+currency;
});

/* 使用一个空的Vue实例来处理简单的组件之间的通信 */
/* 该对象在所有组件中可用 */
Vue.prototype.vHandler = new Vue({
	data() {
		return {
			productIds: []
		}
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import VueResource from 'vue-resource';
import App from './App';

Vue.config.productionTip = false;

Vue.use(VueResource);

/* Filters */
Vue.filter("currency", function(val) {
	var num = parseFloat(val).toFixed(2);
	var reg = /\d{1,3}(?=(\d{3})+$)/g;
	var currency = num.toString().replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(reg,"$&,")+s2;}); //加千分位
	return "￥"+currency;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
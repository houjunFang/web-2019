
function format(val) {
	var num = parseFloat(val).toFixed(2);
	var reg = /\d{1,3}(?=(\d{3})+$)/g;
	var currency = num.toString().replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(reg,"$&,")+s2;}); //加千分位
	return "￥"+currency;
}

var str = format("1234568");

console.log(str);

var reg = /\d{1,3}(?=(\d{3})+$)/g;
var s = "12345678".replace(reg,"$&,");
console.log("result:"+s);

var ary=["一","二","三","四","五","六"]

function test(){
    "x123456".replace(/\d/g,function(s,$1){
       // return ary[i - 1];
        console.log(s+":"+ary[$1])
    })
}


test();

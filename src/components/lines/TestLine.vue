<template>
  <!--
  ref="myechart"定义该div也就是画布的名字，在this.$echarts.init(this.$refs.myechart) 图表初始化的时候使用
  this.$refs.myechart 也可以替换为 document.getElementById('main') 或者 document.getElementByClassName('echart-box')
  -->
    <div class="HelloWorld echart-box" ref="myechart" id="main"></div> 
</template>
<script>

  import echarts from 'echarts'

  export default {
    name:'HelloWorld',
    data(){
      return{
        // 定义图表，各种参数
        option:{  
          backgroundColor:"lightblue",
          title:{
            backgroundColor:"lightyellow",
            show:true,
            text:"测试练习",
            textStyle:{
              fontSize:25,
              fontWeight:900,
              color:'red',
            },
            subtext:'测试小标题',
            subtextStyle:{
              color:'green',
              fontSize:20,
              fontWeight:600
            }
          },
          xAxis:{
            type:"category",
            data:["星期一","星期二","星期三","星期四","星期五","星期六","星期日",]
          },
          yAxis:{
            type:"value",
          },
          series:[
            {
              data:[50,54,82,97,150,240,68],
              type:"bar" ////pie->饼状图  line->折线图  bar->柱状图
            },
            {
              data:[20,58,34,108,250,150,300],
              type:"bar"
            }
          ]
        }
      }
    },
    mounted:function(){
      //console.log(this.$echarts)
      let myEcharts = echarts.init(this.$refs.myechart) //初始化一个echarts
      myEcharts.setOption(this.option)  //setOption 用this.option中的数据开始作图

    }
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.HelloWorld{ 
  width: 1000px;
  height:600px;
  background: #cce6f0;
  margin: 0 auto;
}
</style>
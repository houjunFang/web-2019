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
          title: { 
             text: '未来一周气温变化',   //图表顶部的标题 
             subtext: '纯属虚构'    //副标题
          },
          tooltip: {   //鼠标悬浮框的提示文字
              trigger: 'axis'
            },
          legend: {
            data:['最高气温','最低气温']
          },
          xAxis : [{  //x轴坐标数据
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
            }],
           yAxis : [{   //y轴坐标数据
              type : 'value',
              axisLabel : {
                formatter: '{value} °C'
              }
            }],
          series: [  //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
            {
              name:"最高气温",
              type: "line",  //pie->饼状图  line->折线图  bar->柱状图
              data:[11, 11, 15, 13, 12, 13, 10], 
              },
            {
              name:"最低气温",
              type: "line",  //pie->饼状图  line->折线图  bar->柱状图
              data:[1, -2, 2, 5, 3, 2, 0],
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
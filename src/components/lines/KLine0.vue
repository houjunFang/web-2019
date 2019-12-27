<template>
    <div ref="chartMin" style="width:540px;height:300px"></div>
</template>

<!--https://blog.csdn.net/weixin_43776985/article/details/90644028-->
<script>
import echarts from 'echarts'

export default {
    data() {
      return{
        code:'',
        type:'',
        a: 'sh600000',
        data1: [],
        data2: [],
        data3: [],
        option:{
          // 图相对于容器的位置
            grid: {
              left: '10%',
              right: '10%',
              bottom: '10%',
            },
            tooltip : {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                  backgroundColor: '#505765',
                }
              }
            },
            // 下方滑块
            // dataZoom: [
            //     {
            //         show: true,
            //         realtime: true,
            //     },
            //     {
            //         type: 'inside',
            //         realtime: true,
            //     },
            // ],
            xAxis: [
              {
                type : 'category',
                boundaryGap : false,
                axisLine: {onZero: false},
                data : []
              }
            ],
            yAxis: [
              {
                name: '价格',
                type: 'value',
                scale: true,
                splitNumber: 4,
              },
              {
                name: '涨跌幅(%)',
                type: 'value',
                scale: true,
                splitNumber: 4,
                splitLine: false,
              },
            ],
            series: [
              {
                name: '价格',
                type: 'line',
                animation: false,
                symbol: 'none',
                lineStyle: {
                    width: 1,
                },
                data: []
              },
              {
                name: '涨跌幅',
                type: 'line',
                yAxisIndex: 1,
                animation: false,
                symbol: 'none',
                lineStyle: {
                  width: 1,
                  color: 'transparent',
                },
                markLine: {
                  silent: true,
                  // 去掉箭头
                  symbol: 'none',
                  data: [{
                      yAxis: 0,
                  }],
                  lineStyle: {
                      normal: {
                          type: 'dashed',
                          color: 'red',
                      },
                  },
                  label: {
                    formatter: '',
                  },
                },
                 data: []
              }
            ]
        }
      }
    },
    methods: {
      getChart() {
       // debugger
        this.code = (this.a).slice(2);
        if (this.code[0] == 6) {
          this.type = 'sse';
        } else {
          this.type = 'szse';
        }
        // 第三方接口，需要实时刷新用的定时器，并未做websocket的处理，有需要可以自己加
        // this.timer = setInterval(() => {
        // vue项目中为了规范，跨域请求封装了jsonp的方法
        // jsonp('http://webstock.quote.hermes.hexun.com/a/minute?code='
        // + this.type + this.code + '&start=20181026000000&number=500&callback=chart2', {fn: 'chart2'})

        //debugger
        this.$http.get("./static/data/kline-data.json")
        .then((res) => {
          debugger
          //const total = res.Data[0];
          const total = res.body.Data[0];
          for (const j of Object.keys(total)) {
            const time = total[j][0] + '';
            const year = time.slice(0, 4);
            const month = time.slice(4, 6);
            const day = time.slice(6, 8);
            const hour = time.slice(8, 10);
            const minute = time.slice(10, 12);
            const second = time.slice(12, 14);
            const yeartwo = year + '-' + month + '-' + day;
            const timetwo = hour + ':' + minute + ':' + second;
            this.data1.push(timetwo);
            const chartprice = total[j][1] / 100;
            this.data2.push(chartprice);
            //昨收价是从另一个接口获取的
            //const chg = parseFloat(Number((chartprice - this.yes) / this.yes * 100)).toFixed(2);
            const chg = Math.floor(Math.random()*(3100-2500+1)+2500);
            this.data3.push(chg);
          }
        });
        // },3000);
      },
      setEchartsData(){
        this.option.xAxis.data=this.data1.map((str) => {
                    return str.replace(' ', '\n');
                });
        this.option.series[0].data = this.data2;
        this.option.series[1].data = this.data3;
      }
    
    },
    mounted () {
     this.getChart();
     this.setEchartsData();
     let chart = echarts.init(this.$refs.chartMin);
     chart.setOption(this.option);
    }
  }
</script>

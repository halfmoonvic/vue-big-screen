<template>
  <div class="wrap">
    <section class="section section-t">
      <div class="section-item">
        <div class="cell" ref="bar1"></div>
        <div class="cell" ref="bar2"></div>
      </div>
      <div class="section-item" ref="map">中间</div>
      <div class="section-item">
        <div class="cell" ref="line1">上右上</div>
        <div class="cell" ref="line2">上右下</div>
      </div>
    </section>
    <section class="section section-b">
      <div class="section-item">下左</div>
      <div class="section-item">下右</div>
    </section>
  </div>
</template>
<script type="text/javascript">
  /******* 第三方 组件库 *****/
  /**** 本地公用变量 公用函数 **/
  import { $ } from 'assets/js/extend'
  import { barStyle, lineStyle } from 'visual/style'
  import { Bar } from 'visual/bar'
  require('echarts/map/js/china.js')
  import { handleResData, chinaMapFlow }  from 'visual/china-map'
  import { echartsMixin } from 'assets/js/mixin'
  /******* 本地 公用组件 *****/
  /**** 当前组件的 子组件等 ***/

  // require('visual/json/china.json')

  export default {
    name: 'home',
    mixins: [echartsMixin],
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      this.initChart()
      this.renderMapChart()
      this.renderBarChart()
      this.renderLineChart()
    },
    methods: {
      initChart() {
        // 地图
        this.mapChart = new chinaMapFlow(this.$refs.map)

        // 柱状图
        this.barChart1 = new Bar(this.$refs.bar1, {
          grid: {
            left: '50',
            top: '50'
          }
        })
        this.barChart2 = new Bar(this.$refs.bar2, {
          grid: {
            left: '50',
            top: '50'
          }
        })
        this.lineChart1 = new Bar(this.$refs.line1, {
          grid: {
            left: '50',
            top: '50'
          }
        })
        this.lineChart2 = new Bar(this.$refs.line2, {
          grid: {
            left: '50',
            top: '50'
          }
        })
      },
      renderMapChart() {

        var BJData = [
          [{
            name: '北京市'
          }, {
            name: '上海市',
            value: 95
          }],
          [{
            name: '北京市'
          }, {
            name: '广东省',
            value: 90
          }],
          [{
            name: '北京市'
          }, {
            name: '辽宁省',
            value: 80
          }],
          [{
            name: '北京市'
          }, {
            name: '湖北省',
            value: 70
          }],
          [{
            name: '北京市'
          }, {
            name: '内蒙古',
            value: 70
          }],
          [{
            name: '北京市'
          }, {
            name: '江苏省',
            value: 60
          }],
          [{
            name: '北京市'
          }, {
            name: '新疆维吾尔自治区',
            value: 70
          }],
          [{
            name: '北京市'
          }, {
            name: '四川省',
            value: 40
          }],
          [{
            name: '北京市'
          }, {
            name: '云南省',
            value: 80
          }],
          [{
            name: '北京市'
          }, {
            name: '黑龙江省',
            value: 80
          }],
          [{
            name: '北京市'
          }, {
            name: '甘肃省',
            value: 90
          }],
          [{
            name: '北京市'
          }, {
            name: '西藏自治区',
            value: 60
          }]
        ]

        var SDData = [
          [{
            name: '山东省'
          }, {
            name: '上海市',
            value: 95
          }],
          [{
            name: '山东省'
          }, {
            name: '广东省',
            value: 90
          }],
          [{
            name: '山东省'
          }, {
            name: '辽宁省',
            value: 80
          }],
          [{
            name: '山东省'
          }, {
            name: '湖北省',
            value: 70
          }],
          [{
            name: '山东省'
          }, {
            name: '内蒙古',
            value: 70
          }],
          [{
            name: '山东省'
          }, {
            name: '江苏省',
            value: 60
          }],
          [{
            name: '山东省'
          }, {
            name: '新疆维吾尔自治区',
            value: 70
          }],
          [{
            name: '山东省'
          }, {
            name: '四川省',
            value: 40
          }],
          [{
            name: '山东省'
          }, {
            name: '云南省',
            value: 30
          }],
          [{
            name: '山东省'
          }, {
            name: '黑龙江省',
            value: 30
          }],
          [{
            name: '山东省'
          }, {
            name: '甘肃省',
            value: 90
          }],
          [{
            name: '山东省'
          }, {
            name: '西藏自治区',
            value: 60
          }]
        ]

        // 假数据
        var resData = [{
          name: '北京省',
          data: BJData
        }, {
          name: '山东省',
          data: SDData
        }]

        // // 生成新的option
        let option = {
          tooltip: {
            formatter: function(params) {
              if (params.seriesType !== 'effectScatter') {return}
              return `${params.name}>${params.seriesName}<br>交易量:${params.data.value[2]}吨`
            }
          },
          series: handleResData(resData)
        }
        this.mapChart.setData(option)
      },
      renderBarChart() {
        let barData = [{
          name: 'a',
          type: 'bar',
          data: [5, 20, 26]
        }, {
          name: 'b',
          type: 'bar',
          data: [5, 10, 6]
        }, {
          name: 'c',
          type: 'bar',
          data: [5, 2, 36]
        }]

        // 数据与样式相合并
        barData.forEach((item, index) => {
          $.extend(true, item, barStyle[index])
        })

        // 生成新的option
        let barOption = {
          yAxis: {
            name: 'hehehe'
          },
          legend: {
            data: barData.map(item => item.name)
          },
          series: barData
        }
        this.barChart1.setData(barOption)
        this.barChart2.setData(barOption)
      },
      renderLineChart() {
        let lineData = [{
          name: 'a',
          type: 'line',
          data: [5, 20, 26]
        }, {
          name: 'b',
          type: 'line',
          data: [5, 10, 6]
        }, {
          name: 'c',
          type: 'line',
          data: [5, 2, 36]
        }]

        // 数据与样式相合并
        lineData.forEach((item, index) => {
          $.extend(true, item, lineStyle[index])
        })

        // 生成新的option
        let lineOption = {
          yAxis: {
            name: 'hehehe'
          },
          legend: {
            data: lineData.map(item => item.name)
          },
          series: lineData
        }
        this.lineChart1.setData(lineOption)
        this.lineChart2.setData(lineOption)
      },
      _resizeHanlder() {
        this.mapChart.resize()
        this.barChart1.resize()
        this.barChart2.resize()
        this.lineChart1.resize()
        this.lineChart2.resize()
      },
      _destroyHandler() {
        this.mapChart.dispose()
        this.barChart1.dispose()
        this.barChart2.dispose()
        this.lineChart1.dispose()
        this.lineChart2.dispose()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .wrap {
    @include flex(flex-start, center, column);
    width: 100%;
    height: 100%;
    .section {
      width: 100%;
      &.section-t {
        flex: 6 6 6px;
      }
      &.section-b {
        flex: 4 4 4px;
      }
    }
  }

  // 顶部布局
  .section-t {
    @include flex(space-between);
    .section-item {
      @include flex(space-between, center, column);
      flex: 1 1 1px;
      margin-right: 20px;
      height: 100%;
      &:last-child {
        margin-right: 0;
      }
      .cell {
        @include flex(center, center);
        flex: 1 1 1px;
        width: 100%;
        margin-bottom: 5px;
        background: rgba(0, 0, 0, .3) !important;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  // 底部布局
  .section-b {
    @include flex(space-between);
    margin-top: 10px;
    .section-item {
      @include flex(center, center);
      margin-right: 20px;
      flex: 1 1 1px;
      height: 100%;
      background: rgba(0, 0, 255, .3);
      &:last-child {
        margin-right: 0;
      }
    }
  }

</style>

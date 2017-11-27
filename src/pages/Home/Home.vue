<template>
  <div data-comp="home-component" class="wrap" ref="wrap">home组件</div>
</template>
<script type="text/javascript">
  // **** 组件名称 大驼峰 *****
  // ** 本地公用变量 公用函数 **
  import echarts from 'echarts'
  require('echarts/map/js/china.js')
  import { $ } from 'assets/js/extend'
  import { handleResData, chinaMapFlow }  from 'visual/china-map'
  import { echartsMixin } from 'assets/js/mixin'
  // ***** 第三方 组件库 *****
  // ***** 本地 公用组件 *****
  // ** 当前组件的 子组件等 ***

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
      this.renderChart()
    },
    methods: {
      initChart() {
        this.chart = new chinaMapFlow(this.$refs.wrap)
      },
      renderChart() {

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
        this.chart.setData(option)
      },
      _resizeHanlder() {
        this.chart.resize()
      },
      _destroyHandler() {
        this.chart.dispose()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .wrap {
    @include flex(space-between);
    width: 100%;
    height: 100%;
  }

</style>

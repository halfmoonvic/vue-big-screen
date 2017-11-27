<template>
  <div data-comp="home-component" class="wrap" ref="wrap">home组件</div>
</template>
<script type="text/javascript">
  // **** 组件名称 大驼峰 *****
  // ** 本地公用变量 公用函数 **
  import { $ } from 'assets/js/extend'
  import { Bar } from 'visual/bar'
  import { barStyle, lineStyle } from 'visual/style'
  // ***** 第三方 组件库 *****
  // ***** 本地 公用组件 *****
  // ** 当前组件的 子组件等 ***

  export default {
    name: 'home',
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
        this.chart = new Bar(this.$refs.wrap, {
          grid: {
            left: '100',
            top: '100'
          }
        })
      },
      renderChart() {
        let data = [{
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
        data.forEach((item, index) => {
          $.extend(true, item, barStyle[index])
        })

        // 生成新的option
        let option = {
          yAxis: {
            name: '单位'
          },
          legend: {
            data: data.map(item => item.name)
          },
          series: data
        }
        this.chart.setData(option)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .wrap {
    @include flex(space-between);
    width: 400px;
    height: 400px;
  }

</style>

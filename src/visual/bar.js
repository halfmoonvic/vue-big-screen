import echarts from 'echarts'
import { $ } from 'assets/js/extend'
// echats 基础样式引入
import * as STYLE from 'visual/style'

// 使用刚指定的配置项和数据显示图表。
export class Bar {
  constructor(el, option) {
    this.chart = echarts.init(el)

    this.baseOption = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        ...STYLE.legend
      },
      xAxis: {
        axisLabel: STYLE.axisLabel,
        data: []
      },
      yAxis: {
        axisLabel: STYLE.axisLabel,
      }
    }
    // 外部传入样式 覆盖基本样式，比如 grid
    option ? this.setStyle(option) : ''
  }
  setStyle(option) {
    this.baseOption = $.extend(true, this.baseOption, option)
  }
  setData(option) {
    let merge = $.extend(true, this.baseOption, option)
    this.chart.setOption(merge, true)
  }
  resize() {
    this.chart.resize()
  }
  dispose() {
    this.chart.dispose()
  }
}

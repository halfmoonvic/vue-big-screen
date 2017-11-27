import echarts from 'echarts'

// 图例的样式
export const legend = {
  textStyle: {
    color: '#f00',
    fontSize: 18
  }
}

// x轴 y轴字体样式大小 距离设置
export const axisLabel = {
  textStyle: {
    color: '#f00',
    fontSize: 16,
    fontWeight: 'lighter'
  },
  margin: 18,
  formatter: (params)=>{
    return params
  }
}

// 柱状图样式
export const barStyle = [{
  barMaxWidth: 10,
  itemStyle: {
    normal: {
      barBorderRadius: 10,
      borderColor: '#3fa7dc',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 1,
        color: 'rgba(63,167,220,.8)'
      }, {
        offset: 0,
        color: 'rgba(63,167,220,.4)'
      }])
    }
  },
  zlevel: 9
}, {
  barMaxWidth: 10,
  itemStyle: {
    normal: {
      barBorderRadius: 10,
      borderColor: '#ffea38',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 1,
        color: 'rgba(255,234,56, 0.8)'
      }, {
        offset: 0,
        color: 'rgba(255,234,56, 0.4)'
      }])

    }
  },
  zlevel: 9
}, {
  barMaxWidth: 10,
  itemStyle: {
    normal: {
      barBorderRadius: 10,
      borderColor: '#f9852d',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 1,
        color: 'rgba(249,133,45, 0.8)'
      }, {
        offset: 0,
        color: 'rgba(249,133,45, 0.4)'
      }])
    }
  },
  zlevel: 9
}, {
  barMaxWidth: 10,
  itemStyle: {
    normal: {
      barBorderRadius: 10,
      borderColor: '#F10F0F',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 1,
        color: 'rgba(241, 15, 15,.8)'
      }, {
        offset: 0,
        color: 'rgba(241, 15, 15 ,.4)'
      }])
    }
  },
  zlevel: 9
}, {
  barMaxWidth: 10,
  itemStyle: {
    normal: {
      barBorderRadius: 10,
      borderColor: '#14EE10',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 1,
        color: 'rgba(20, 238, 16, 0.8)'
      }, {
        offset: 0,
        color: 'rgba(20, 238, 16, 0.4)'
      }])

    }
  },
  zlevel: 9
}]

// 曲线图样式
export const lineStyle = [{
  type: 'line',
  symbol: 'circle',
  symbolSize: 15,
  itemStyle: {
    normal: {
      color: '#00B874',
      borderColor: '#FEFB00',
    },
  },
}, {
  type: 'line',
  symbol: 'circle',
  symbolSize: 15,
  itemStyle: {
    normal: {
      color: '#FF8000',
      borderColor: '#FEFB00',
    }
  },
}, {
  type: 'line',
  symbol: 'circle',
  symbolSize: 15,
  itemStyle: {
    normal: {
      color: '#FF8000',
      borderColor: '#FEFB00',
    }
  },
}, {
  type: 'line',
  symbol: 'circle',
  symbolSize: 15,
  itemStyle: {
    normal: {
      color: '#FF8000',
      borderColor: '#FEFB00',
    }
  },
}, {
  type: 'line',
  symbol: 'circle',
  symbolSize: 15,
  itemStyle: {
    normal: {
      color: '#FF8000',
      borderColor: '#FEFB00',
    }
  },
}]


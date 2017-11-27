import echarts from 'echarts'
import { chinaGeoCoordMap } from './names'
import { $ } from 'assets/js/extend'
// echats 基础样式引入
// import * as STYLE from 'visual/style'

function convertData(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var fromCoord = chinaGeoCoordMap[dataItem[0].name];
    var toCoord = chinaGeoCoordMap[dataItem[1].name];
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
        value: dataItem[1].value
      });
    }
  }
  return res;
}

export function handleResData(resData) {
  var color = ['#a6c84c', '#ffa022'];
  var series = []
  resData.forEach(function(item, i) {
    series.push({ //线
      name: item.name,
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: '#fff',
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item.data)
    }, { //移动 点
      name: item.name,
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        //symbol: planePath,
        symbolSize: 5
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.4,
          curveness: 0.2
        }
      },
      data: convertData(item.data)
    }, { //省份圆点
      name: item.name,
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      effectScatter: {
        symbol: 'diamond'

      },
      rippleEffect: {
        brushType: 'stroke',
        scale: 6
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: 10,
      itemStyle: {
        normal: {
          color: color[i]
        }
      },
      data: item.data.map(function(dataItem) {
        return {
          name: dataItem[1].name,
          value: chinaGeoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    }, {
      name: '辅助颜色',
      type: 'map',
      zoom: 1.25,
      mapType: 'china',
      markPoint: {
        symbol: 'circle'
      },
      itemStyle: {
        normal: {
          areaColor: 'rgba(72, 118, 255,0.9)'
        },
        emphasis: {
          areaColor: '#3952ca'
        }
      },
      roam: true
    });
  });
  return series
}

export class chinaMapFlow {
  constructor(el, option) {
    this.chart = echarts.init(el)

    this.baseOption = {
      tooltip: {
        trigger: 'item',
      },
      geo: {
        show: false,
        map: 'china',
        zoom: 1.25,
        geoIndex: 0,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: 'rgba(72, 118, 255,0.9)'
          },
          emphasis: {
            areaColor: '#3952ca'
          }
        }
      },
      visualMap: {
        type: 'continuous',
        min: 0,
        max: 100,
        text: ['交易量：吨'],
        textGap: 40,
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
          color: '#0e9cf1',
          fontSize: 16,
          align: 'center'
        }
      },
      series: []
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



webpackJsonp([1],{"+g8z":function(e,a){},LzVN:function(e,a){},NHnr:function(e,a,t){"use strict";function n(e){t("Q2L4")}function r(e){t("LzVN")}function i(e){for(var a=[],t=0;t<e.length;t++){var n=e[t],r=J[n[0].name],i=J[n[1].name];r&&i&&a.push({fromName:n[0].name,toName:n[1].name,coords:[r,i],value:n[1].value})}return a}function o(e){var a=["#a6c84c","#ffa022"],t=[];return e.forEach(function(e,n){t.push({name:e.name,type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:3},lineStyle:{normal:{color:a[n],width:0,curveness:.2}},data:i(e.data)},{name:e.name,type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:0,symbolSize:5},lineStyle:{normal:{color:a[n],width:1,opacity:.4,curveness:.2}},data:i(e.data)},{name:e.name,type:"effectScatter",coordinateSystem:"geo",zlevel:2,effectScatter:{symbol:"diamond"},rippleEffect:{brushType:"stroke",scale:6},label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbolSize:10,itemStyle:{normal:{color:a[n]}},data:e.data.map(function(e){return{name:e[1].name,value:J[e[1].name].concat([e[1].value])}})},{name:"辅助颜色",type:"map",zoom:1.25,roam:!1,mapType:"china",markPoint:{symbol:"circle"},itemStyle:{normal:{areaColor:"rgba(72, 118, 255,0.9)"},emphasis:{areaColor:"#3952ca"}}})}),t}function s(e){t("QJbA")}Object.defineProperty(a,"__esModule",{value:!0});var l,c,m=(t("briU"),t("TWX9")),u={name:"header",props:{title:{type:String,default:""}},data:function(){return{}},components:{}},d=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{staticClass:"header"},[e._v("header组件")])},h=[],f={render:d,staticRenderFns:h},p=f,b=t("/Xao"),v=n,y=b(u,p,!1,v,"data-v-361303da",null),g=y.exports,C={name:"app",components:{VHeader:g}},S=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("v-header"),e._v(" "),t("router-view")],1)},z=[],w={render:S,staticRenderFns:z},F=w,x=t("/Xao"),E=r,B=x(C,F,!1,E,null,null),_=B.exports,A=t("zO6J"),L=t("hRKE"),k=t.n(L),R=function(){var e,a=Object.prototype.toString,t=Object.prototype.hasOwnProperty,n={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Object]":"object"},r=function(e){return null==e?String(e):n[a.call(e)]||"object"},i=function(e){return e&&"object"===(void 0===e?"undefined":k()(e))&&"setInterval"in e},o=Array.isArray||function(e){return"array"===r(e)},s=function(e){if(!e||"object"!==r(e)||e.nodeType||i(e))return!1;if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf"))return!1;var a;for(a in e);return void 0===a||t.call(e,a)};return{extend:function a(t,n,r){for(var i in r){var l=n[i],c=r[i];if(n!==c)if(t&&c&&(s(c)||(e=o(c)))){if(e){e=!1;var m=l&&o(l)?l:[]}else var m=l&&s(l)?l:{};n[i]=a(t,m,c)}else void 0!==c&&(n[i]=c)}return n}}}(),M=t("7VF+"),j=t.n(M),N={textStyle:{color:"#A17E7E",fontSize:18}},G={textStyle:{color:"#6F6F6F",fontSize:16,fontWeight:"lighter"},margin:18},O=[{barMaxWidth:10,itemStyle:{normal:{barBorderRadius:10,borderColor:"#3fa7dc",color:new j.a.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(63,167,220,.8)"},{offset:0,color:"rgba(63,167,220,.4)"}])}},zlevel:9},{barMaxWidth:10,itemStyle:{normal:{barBorderRadius:10,borderColor:"#ffea38",color:new j.a.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(255,234,56, 0.8)"},{offset:0,color:"rgba(255,234,56, 0.4)"}])}},zlevel:9},{barMaxWidth:10,itemStyle:{normal:{barBorderRadius:10,borderColor:"#f9852d",color:new j.a.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(249,133,45, 0.8)"},{offset:0,color:"rgba(249,133,45, 0.4)"}])}},zlevel:9},{barMaxWidth:10,itemStyle:{normal:{barBorderRadius:10,borderColor:"#F10F0F",color:new j.a.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(241, 15, 15,.8)"},{offset:0,color:"rgba(241, 15, 15 ,.4)"}])}},zlevel:9},{barMaxWidth:10,itemStyle:{normal:{barBorderRadius:10,borderColor:"#14EE10",color:new j.a.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(20, 238, 16, 0.8)"},{offset:0,color:"rgba(20, 238, 16, 0.4)"}])}},zlevel:9}],T=[{type:"line",symbol:"circle",symbolSize:15,itemStyle:{normal:{color:"#00B874",borderColor:"#FEFB00"}}},{type:"line",symbol:"circle",symbolSize:15,itemStyle:{normal:{color:"#FF8000",borderColor:"#FEFB00"}}},{type:"line",symbol:"circle",symbolSize:15,itemStyle:{normal:{color:"#FF8000",borderColor:"#FEFB00"}}},{type:"line",symbol:"circle",symbolSize:15,itemStyle:{normal:{color:"#FF8000",borderColor:"#FEFB00"}}},{type:"line",symbol:"circle",symbolSize:15,itemStyle:{normal:{color:"#FF8000",borderColor:"#FEFB00"}}}],H=t("4YfN"),D=t.n(H),I=t("AA3o"),P=t.n(I),K=t("xSur"),U=t.n(K),W=function(){function e(a,t){P()(this,e),this.chart=j.a.init(a),this.baseOption={tooltip:{trigger:"item"},legend:D()({},N),xAxis:{axisLabel:G,data:["a","b","c"]},yAxis:{axisLabel:G}},t&&this.setStyle(t)}return U()(e,[{key:"setStyle",value:function(e){this.baseOption=R.extend(!0,this.baseOption,e)}},{key:"setData",value:function(e){var a=R.extend(!0,this.baseOption,e);this.chart.setOption(a,!0)}},{key:"resize",value:function(){this.chart.resize()}},{key:"dispose",value:function(){this.chart.dispose()}}]),e}(),$=t("a3Yh"),V=t.n($),J=(l={Afghanistan:"阿富汗",Angola:"安哥拉",Albania:"阿尔巴尼亚","United Arab Emirates":"阿联酋",Argentina:"阿根廷",Armenia:"亚美尼亚","French Southern and Antarctic Lands":"法属南半球和南极领地",Australia:"澳大利亚",Austria:"奥地利",Azerbaijan:"阿塞拜疆",Burundi:"布隆迪",Belgium:"比利时",Benin:"贝宁","Burkina Faso":"布基纳法索",Bangladesh:"孟加拉国",Bulgaria:"保加利亚","The Bahamas":"巴哈马","Bosnia and Herzegovina":"波斯尼亚和黑塞哥维那",Belarus:"白俄罗斯",Belize:"伯利兹",Bermuda:"百慕大",Bolivia:"玻利维亚",Brazil:"巴西",Brunei:"文莱",Bhutan:"不丹",Botswana:"博茨瓦纳","Central African Republic":"中非共和国",Canada:"加拿大",Switzerland:"瑞士",Chile:"智利",China:"中国","Ivory Coast":"象牙海岸",Cameroon:"喀麦隆","Democratic Republic of the Congo":"刚果民主共和国","Republic of the Congo":"刚果共和国",Colombia:"哥伦比亚","Costa Rica":"哥斯达黎加",Cuba:"古巴","Northern Cyprus":"北塞浦路斯",Cyprus:"塞浦路斯","Czech Republic":"捷克共和国",Germany:"德国",Djibouti:"吉布提",Denmark:"丹麦","Dominican Republic":"多明尼加共和国",Algeria:"阿尔及利亚",Ecuador:"厄瓜多尔",Egypt:"埃及",Eritrea:"厄立特里亚",Spain:"西班牙",Estonia:"爱沙尼亚",Ethiopia:"埃塞俄比亚",Finland:"芬兰",Fiji:"斐","Falkland Islands":"福克兰群岛",France:"法国",Gabon:"加蓬","United Kingdom":"英国",Georgia:"格鲁吉亚",Ghana:"加纳",Guinea:"几内亚",Gambia:"冈比亚","Guinea Bissau":"几内亚比绍","Equatorial Guinea":"赤道几内亚",Greece:"希腊",Greenland:"格陵兰",Guatemala:"危地马拉","French Guiana":"法属圭亚那",Guyana:"圭亚那",Honduras:"洪都拉斯",Croatia:"克罗地亚",Haiti:"海地",Hungary:"匈牙利",Indonesia:"印尼",India:"印度",Ireland:"爱尔兰",Iran:"伊朗",Iraq:"伊拉克",Iceland:"冰岛",Israel:"以色列",Italy:"意大利",Jamaica:"牙买加",Jordan:"约旦",Japan:"日本",Kazakhstan:"哈萨克斯坦",Kenya:"肯尼亚",Kyrgyzstan:"吉尔吉斯斯坦",Cambodia:"柬埔寨","South Korea":"韩国",Kosovo:"科索沃",Kuwait:"科威特",Laos:"老挝",Lebanon:"黎巴嫩",Liberia:"利比里亚",Libya:"利比亚","Sri Lanka":"斯里兰卡",Lesotho:"莱索托",Lithuania:"立陶宛",Luxembourg:"卢森堡",Latvia:"拉脱维亚",Morocco:"摩洛哥",Moldova:"摩尔多瓦",Madagascar:"马达加斯加",Mexico:"墨西哥",Macedonia:"马其顿",Mali:"马里",Myanmar:"缅甸",Montenegro:"黑山",Mongolia:"蒙古",Mozambique:"莫桑比克",Mauritania:"毛里塔尼亚",Malawi:"马拉维",Malaysia:"马来西亚",Namibia:"纳米比亚","New Caledonia":"新喀里多尼亚",Niger:"尼日尔",Nigeria:"尼日利亚",Nicaragua:"尼加拉瓜",Netherlands:"荷兰",Norway:"挪威",Nepal:"尼泊尔","New Zealand":"新西兰",Oman:"阿曼",Pakistan:"巴基斯坦",Panama:"巴拿马",Peru:"秘鲁",Philippines:"菲律宾","Papua New Guinea":"巴布亚新几内亚",Poland:"波兰","Puerto Rico":"波多黎各","North Korea":"北朝鲜",Portugal:"葡萄牙",Paraguay:"巴拉圭",Qatar:"卡塔尔",Romania:"罗马尼亚",Russia:"俄罗斯"},V()(l,"Russia","俄罗斯联邦"),V()(l,"Rwanda","卢旺达"),V()(l,"Western Sahara","西撒哈拉"),V()(l,"Saudi Arabia","沙特阿拉伯"),V()(l,"Sudan","苏丹"),V()(l,"South Sudan","南苏丹"),V()(l,"Senegal","塞内加尔"),V()(l,"Solomon Islands","所罗门群岛"),V()(l,"Sierra Leone","塞拉利昂"),V()(l,"El Salvador","萨尔瓦多"),V()(l,"Somaliland","索马里兰"),V()(l,"Somalia","索马里"),V()(l,"Republic of Serbia","塞尔维亚共和国"),V()(l,"Suriname","苏里南"),V()(l,"Slovakia","斯洛伐克"),V()(l,"Slovenia","斯洛文尼亚"),V()(l,"Sweden","瑞典"),V()(l,"Swaziland","斯威士兰"),V()(l,"Syria","叙利亚"),V()(l,"Chad","乍得"),V()(l,"Togo","多哥"),V()(l,"Thailand","泰国"),V()(l,"Tajikistan","塔吉克斯坦"),V()(l,"Turkmenistan","土库曼斯坦"),V()(l,"East Timor","东帝汶"),V()(l,"Trinidad and Tobago","特里尼达和多巴哥"),V()(l,"Tunisia","突尼斯"),V()(l,"Turkey","土耳其"),V()(l,"United Republic of Tanzania","坦桑尼亚联合共和国"),V()(l,"Uganda","乌干达"),V()(l,"Ukraine","乌克兰"),V()(l,"Uruguay","乌拉圭"),V()(l,"United States","美国"),V()(l,"Uzbekistan","乌兹别克斯坦"),V()(l,"Venezuela","委内瑞拉"),V()(l,"Vietnam","越南"),V()(l,"Vanuatu","瓦努阿图"),V()(l,"West Bank","西岸"),V()(l,"Yemen","也门"),V()(l,"South Africa","南非"),V()(l,"Zambia","赞比亚"),V()(l,"Zimbabwe","津巴布韦"),c={"北京市":[116.24,39.55],"中国":[116.24,39.55],"香港":[114.14,22.15],"香港特别行政区":[114.14,22.15],"阿富汗":[69.11,34.28],"阿尔巴尼亚":[19.49,41.18],"阿尔及利亚":[3.08,36.42],"美属萨摩亚":[-170.43,-14.16],"安道​​尔":[1.32,42.31],"安哥拉":[13.15,-8.5],"安提瓜和巴布达":[-61.48,17.2],"阿根廷":[-60,-36.3],"亚美尼亚":[44.31,40.1],"阿鲁巴":[-70.02,12.32],"澳大利亚":[149.08,-35.15],"奥地利":[16.22,48.12],"阿塞拜疆":[49.56,40.29],"巴哈马":[-77.2,25.05],"巴林":[50.3,26.1],"孟加拉国":[90.26,23.43],"巴巴多斯":[-59.3,13.05],"白俄罗斯":[27.3,53.52],"比利时":[4.21,50.51],"伯利兹":[-88.3,17.18],"贝宁":[2.42,6.23],"不丹":[89.45,27.31],"玻利维亚":[-68.1,-16.2],"波斯尼亚和黑塞哥维那":[18.26,43.52],"博茨瓦纳":[25.57,-24.45],"巴西":[-47.55,-15.47],"英属维尔京群岛":[-64.37,18.27],"文莱":[115,4.52],"保加利亚":[23.2,42.45],"布基纳法索":[-1.3,12.15],"布隆迪":[29.18,-3.16],"柬埔寨":[104.55,11.33],"喀麦隆":[11.35,3.5],"加拿大":[-75.42,45.27],"佛得角":[-23.34,15.02],"开曼群岛":[-81.24,19.2],"中非共和国":[18.35,4.23],"乍得":[14.59,12.1],"智利":[-70.4,-33.24]},V()(c,"中国",[116.2,39.55]),V()(c,"哥伦比亚",[-74,4.34]),V()(c,"科摩罗",[43.16,-11.4]),V()(c,"刚果",[15.12,-4.09]),V()(c,"哥斯达黎加",[-84.02,9.55]),V()(c,"科特迪瓦",[-5.17,6.49]),V()(c,"克罗地亚",[15.58,45.5]),V()(c,"古巴",[-82.22,23.08]),V()(c,"塞浦路斯",[33.25,35.1]),V()(c,"捷克共和国",[14.22,50.05]),V()(c,"朝鲜",[125.3,39.09]),V()(c,"刚果(扎伊尔)",[15.15,-4.2]),V()(c,"丹麦",[12.34,55.41]),V()(c,"吉布提",[42.2,11.08]),V()(c,"多米尼加",[-61.24,15.2]),V()(c,"多米尼加共和国",[-69.59,18.3]),V()(c,"东帝汶",[125.34,-8.29]),V()(c,"厄瓜多尔",[-78.35,-.15]),V()(c,"埃及",[31.14,30.01]),V()(c,"萨尔瓦多",[-89.1,13.4]),V()(c,"赤道几内亚",[8.5,3.45]),V()(c,"厄立特里亚",[38.55,15.19]),V()(c,"爱沙尼亚",[24.48,59.22]),V()(c,"埃塞俄比亚",[38.42,9.02]),V()(c,"福克兰群岛(马尔维纳斯群岛)",[-59.51,-51.4]),V()(c,"法罗群岛",[-6.56,62.05]),V()(c,"斐济",[178.3,-18.06]),V()(c,"芬兰",[25.03,60.15]),V()(c,"法国",[2.2,48.5]),V()(c,"法属圭亚那",[-52.18,5.05]),V()(c,"法属波利尼西亚",[-149.34,-17.32]),V()(c,"加蓬",[9.26,.25]),V()(c,"冈比亚",[-16.4,13.28]),V()(c,"格鲁吉亚",[44.5,41.43]),V()(c,"德国",[13.25,52.3]),V()(c,"加纳",[-.06,5.35]),V()(c,"希腊",[23.46,37.58]),V()(c,"格陵兰",[-51.35,64.1]),V()(c,"瓜德罗普岛",[-61.44,16]),V()(c,"危地马拉",[-90.22,14.4]),V()(c,"根西岛",[-2.33,49.26]),V()(c,"几内亚",[-13.49,9.29]),V()(c,"几内亚比绍",[-15.45,11.45]),V()(c,"圭亚那",[-58.12,6.5]),V()(c,"海地",[-72.2,18.4]),V()(c,"赫德岛和麦当劳群岛",[74,-53]),V()(c,"洪都拉斯",[-87.14,14.05]),V()(c,"匈牙利",[19.05,47.29]),V()(c,"冰岛",[-21.57,64.1]),V()(c,"印度",[77.13,28.37]),V()(c,"印度尼西亚",[106.49,-6.09]),V()(c,"伊朗",[51.3,35.44]),V()(c,"伊拉克",[44.3,33.2]),V()(c,"爱尔兰",[-6.15,53.21]),V()(c,"以色列",[35.12,31.47]),V()(c,"意大利",[12.29,41.54]),V()(c,"牙买加",[-76.5,18]),V()(c,"约旦",[35.52,31.57]),V()(c,"哈萨克斯坦",[71.3,51.1]),V()(c,"肯尼亚",[36.48,-1.17]),V()(c,"基里巴斯",[173,1.3]),V()(c,"科威特",[48,29.3]),V()(c,"吉尔吉斯斯坦",[74.46,42.54]),V()(c,"老挝",[102.36,17.58]),V()(c,"拉脱维亚",[24.08,56.53]),V()(c,"黎巴嫩",[35.31,33.53]),V()(c,"莱索托",[27.3,-29.18]),V()(c,"利比里亚",[-10.47,6.18]),V()(c,"阿拉伯利比亚民众国",[13.07,32.49]),V()(c,"列支敦士登",[9.31,47.08]),V()(c,"立陶宛",[25.19,54.38]),V()(c,"卢森堡",[6.09,49.37]),V()(c,"马达加斯加",[47.31,-18.55]),V()(c,"马拉维",[33.48,-14]),V()(c,"马来西亚",[101.41,3.09]),V()(c,"马尔代夫",[73.28,4]),V()(c,"马里",[-7.55,12.34]),V()(c,"马耳他",[14.31,35.54]),V()(c,"马提尼克岛",[-61.02,14.36]),V()(c,"毛里塔尼亚",[57.3,-20.1]),V()(c,"马约特岛",[45.14,-12.48]),V()(c,"墨西哥",[-99.1,19.2]),V()(c,"密克罗尼西亚(联邦) ",[158.09,6.55]),V()(c,"摩尔多瓦共和国",[28.5,47.02]),V()(c,"莫桑比克",[32.32,-25.58]),V()(c,"缅甸",[96.2,16.45]),V()(c,"纳米比亚",[17.04,-22.35]),V()(c,"尼泊尔",[85.2,27.45]),V()(c,"荷兰",[4.54,52.23]),V()(c,"荷属安的列斯",[-69,12.05]),V()(c,"新喀里多尼亚",[166.3,-22.17]),V()(c,"新西兰",[174.46,-41.19]),V()(c,"尼加拉瓜",[-86.2,12.06]),V()(c,"尼日尔",[2.06,13.27]),V()(c,"尼日利亚",[7.32,9.05]),V()(c,"诺福克岛",[168.43,-45.2]),V()(c,"北马里亚纳群岛",[145.45,15.12]),V()(c,"挪威",[10.45,59.55]),V()(c,"阿曼",[58.36,23.37]),V()(c,"巴基斯坦",[73.1,33.4]),V()(c,"帕劳",[134.28,7.2]),V()(c,"巴拿马",[-79.25,9]),V()(c,"巴布亚新几内亚",[147.08,-9.24]),V()(c,"巴拉圭",[-57.3,-25.1]),V()(c,"秘鲁",[-77,-12]),V()(c,"菲律宾",[121.03,14.4]),V()(c,"波兰",[21,52.13]),V()(c,"葡萄牙",[-9.1,38.42]),V()(c,"波多黎各",[-66.07,18.28]),V()(c,"卡塔尔",[51.35,25.15]),V()(c,"韩国",[126.58,37.31]),V()(c,"罗马尼亚",[26.1,44.27]),V()(c,"俄罗斯",[37.35,55.45]),V()(c,"俄罗斯联邦",[37.35,55.45]),V()(c,"卢旺达",[30.04,-1.59]),V()(c,"圣基茨和尼维斯",[-62.43,17.17]),V()(c,"圣卢西亚",[-60.58,14.02]),V()(c,"圣皮埃尔和密克隆",[-56.12,46.46]),V()(c,"圣文森特和格林纳丁斯",[-61.1,13.1]),V()(c,"萨摩亚",[-171.5,-13.5]),V()(c,"圣马力诺",[12.3,43.55]),V()(c,"圣多美和普林西比",[6.39,.1]),V()(c,"沙特阿拉伯",[46.42,24.41]),V()(c,"塞内加尔",[-17.29,14.34]),V()(c,"塞拉利昂",[-13.17,8.3]),V()(c,"斯洛伐克",[17.07,48.1]),V()(c,"斯洛文尼亚",[14.33,46.04]),V()(c,"所罗门群岛",[159.57,-9.27]),V()(c,"索马里",[45.25,2.02]),V()(c,"比勒陀利亚",[28.12,-25.44]),V()(c,"西班牙",[-3.45,40.25]),V()(c,"苏丹",[32.35,15.31]),V()(c,"苏里南",[-55.1,5.5]),V()(c,"斯威士兰",[31.06,-26.18]),V()(c,"瑞典",[18.03,59.2]),V()(c,"瑞士",[7.28,46.57]),V()(c,"阿拉伯叙利亚共和国",[36.18,33.3]),V()(c,"塔吉克斯坦",[68.48,38.33]),V()(c,"泰国",[100.35,13.45]),V()(c,"马其顿",[21.26,42.01]),V()(c,"多哥",[1.2,6.09]),V()(c,"汤加",[-174,-21.1]),V()(c,"突尼斯",[10.11,36.5]),V()(c,"土耳其",[32.54,39.57]),V()(c,"土库曼斯坦",[57.5,38]),V()(c,"图瓦卢",[179.13,-8.31]),V()(c,"乌干达",[32.3,.2]),V()(c,"乌克兰",[30.28,50.3]),V()(c,"阿联酋",[54.22,24.28]),V()(c,"英国",[-.05,51.36]),V()(c,"坦桑尼亚",[35.45,-6.08]),V()(c,"美国",[-77.02,39.91]),V()(c,"美属维尔京群岛",[-64.56,18.21]),V()(c,"乌拉圭",[-56.11,-34.5]),V()(c,"乌兹别克斯坦",[69.1,41.2]),V()(c,"瓦努阿图",[168.18,-17.45]),V()(c,"委内瑞拉",[-66.55,10.3]),V()(c,"越南",[105.55,21.05]),V()(c,"南斯拉夫",[20.37,44.5]),V()(c,"赞比亚",[28.16,-15.28]),V()(c,"津巴布韦",[31.02,-17.43]),V()(c,"新加坡",[114.1,22.2]),V()(c,"日本",[139.46,35.42]),V()(c,"塞尔维亚",[20.28,44.49]),{"安徽省":[117.17,31.52],"北京市":[116.24,39.55],"重庆市":[106.54,29.59],"福建省":[119.18,26.05],"甘肃省":[103.51,36.04],"广东省":[113.14,23.08],"广西壮族自治区":[108.19,22.48],"贵州省":[106.42,26.35],"海南省":[110.2,20.02],"河北省":[114.3,38.02],"河南省":[113.4,34.46],"黑龙江省":[128.36,45.44],"湖北省":[112.27,30.15],"湖南省":[112.59,28.12],"吉林省":[125.19,43.54],"江苏省":[118.46,32.03],"江西省":[115.55,28.4],"辽宁省":[123.25,41.48],"内蒙古":[108.41,40.48],"宁夏回族自治区":[106.16,38.27],"青海省":[101.48,36.38],"山东省":[118,36.4],"山西省":[112.33,37.54],"陕西省":[108.57,34.17],"上海市":[121.29,31.14],"海南":[108.77,19.1],"四川省":[104.04,30.4],"天津市":[117.12,39.02],"西藏自治区":[91.08,29.39],"新疆维吾尔自治区":[87.36,43.45],"云南省":[102.42,25.04],"浙江省":[120.1,30.16],"澳门":[115.07,21.33],"台湾省":[121.21,23.53]}),Q=function(){function e(a,t){P()(this,e),this.chart=j.a.init(a),this.baseOption={tooltip:{trigger:"item"},geo:{show:!1,map:"china",zoom:1.25,geoIndex:0,label:{normal:{show:!1},emphasis:{show:!0}},roam:!0,itemStyle:{normal:{areaColor:"rgba(72, 118, 255,0.9)"},emphasis:{areaColor:"#3952ca"}}},visualMap:{type:"continuous",min:0,max:100,text:["交易量：吨"],textGap:40,calculable:!0,color:["#ff3333","orange","yellow","lime","aqua"],textStyle:{color:"#0e9cf1",fontSize:16,align:"center"}},series:[]},t&&this.setStyle(t)}return U()(e,[{key:"setStyle",value:function(e){this.baseOption=R.extend(!0,this.baseOption,e)}},{key:"setData",value:function(e){var a=R.extend(!0,this.baseOption,e);this.chart.setOption(a,!0)}},{key:"resize",value:function(){this.chart.resize()}},{key:"dispose",value:function(){this.chart.dispose()}}]),e}(),q={mounted:function(){var e=this;setTimeout(function(){window.addEventListener("resize",e._resizeHanlder)},21)},methods:{_resizeHanlder:function(){throw new Error("_resizeHanlder must be implement in current component")},_destroyHandler:function(){throw new Error("you must destroy your echatrs instance in current component!")}},beforeDestroy:function(){window.removeEventListener("resize",this._resizeHanlder),this._destroyHandler()}};t("sVjC");var X={name:"home",mixins:[q],props:{title:{type:String,default:""}},data:function(){return{}},mounted:function(){this.initChart(),this.renderMapChart(),this.renderBarChart(),this.renderLineChart()},methods:{initChart:function(){this.mapChart=new Q(this.$refs.map),this.barChart1=new W(this.$refs.bar1,{grid:{left:"50",top:"50"}}),this.barChart2=new W(this.$refs.bar2,{grid:{left:"50",top:"50"}}),this.lineChart1=new W(this.$refs.line1,{grid:{left:"50",top:"50"}}),this.lineChart2=new W(this.$refs.line2,{grid:{left:"50",top:"50"}})},renderMapChart:function(){var e=[[{name:"北京市"},{name:"上海市",value:95}],[{name:"北京市"},{name:"广东省",value:90}],[{name:"北京市"},{name:"辽宁省",value:80}],[{name:"北京市"},{name:"湖北省",value:70}],[{name:"北京市"},{name:"内蒙古",value:70}],[{name:"北京市"},{name:"江苏省",value:60}],[{name:"北京市"},{name:"新疆维吾尔自治区",value:70}],[{name:"北京市"},{name:"四川省",value:40}],[{name:"北京市"},{name:"云南省",value:80}],[{name:"北京市"},{name:"黑龙江省",value:80}],[{name:"北京市"},{name:"甘肃省",value:90}],[{name:"北京市"},{name:"西藏自治区",value:60}]],a=[[{name:"山东省"},{name:"上海市",value:95}],[{name:"山东省"},{name:"广东省",value:90}],[{name:"山东省"},{name:"辽宁省",value:80}],[{name:"山东省"},{name:"湖北省",value:70}],[{name:"山东省"},{name:"内蒙古",value:70}],[{name:"山东省"},{name:"江苏省",value:60}],[{name:"山东省"},{name:"新疆维吾尔自治区",value:70}],[{name:"山东省"},{name:"四川省",value:40}],[{name:"山东省"},{name:"云南省",value:30}],[{name:"山东省"},{name:"黑龙江省",value:30}],[{name:"山东省"},{name:"甘肃省",value:90}],[{name:"山东省"},{name:"西藏自治区",value:60}]],t=[{name:"北京省",data:e},{name:"山东省",data:a}],n={tooltip:{formatter:function(e){if("effectScatter"===e.seriesType)return e.name+">"+e.seriesName+"<br>交易量:"+e.data.value[2]+"吨"}},series:o(t)};this.mapChart.setData(n)},renderBarChart:function(){var e=[{name:"a",type:"bar",data:[5,20,26]},{name:"b",type:"bar",data:[5,10,6]},{name:"c",type:"bar",data:[5,2,36]}];e.forEach(function(e,a){R.extend(!0,e,O[a])});var a={yAxis:{name:"hehehe"},legend:{data:e.map(function(e){return e.name})},series:e};this.barChart1.setData(a),this.barChart2.setData(a)},renderLineChart:function(){var e=[{name:"a",type:"line",data:[5,20,26]},{name:"b",type:"line",data:[5,10,6]},{name:"c",type:"line",data:[5,2,36]}];e.forEach(function(e,a){R.extend(!0,e,T[a])});var a={yAxis:{name:"hehehe"},legend:{data:e.map(function(e){return e.name})},series:e};this.lineChart1.setData(a),this.lineChart2.setData(a)},_resizeHanlder:function(){this.mapChart.resize(),this.barChart1.resize(),this.barChart2.resize(),this.lineChart1.resize(),this.lineChart2.resize()},_destroyHandler:function(){this.mapChart.dispose(),this.barChart1.dispose(),this.barChart2.dispose(),this.lineChart1.dispose(),this.lineChart2.dispose()}}},Y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wrap"},[t("section",{staticClass:"section section-t"},[t("div",{staticClass:"section-item"},[t("div",{ref:"bar1",staticClass:"cell"}),e._v(" "),t("div",{ref:"bar2",staticClass:"cell"})]),e._v(" "),t("div",{ref:"map",staticClass:"section-item"},[e._v("中间")]),e._v(" "),t("div",{staticClass:"section-item"},[t("div",{ref:"line1",staticClass:"cell"},[e._v("上右上")]),e._v(" "),t("div",{ref:"line2",staticClass:"cell"},[e._v("上右下")])])]),e._v(" "),e._m(0,!1,!1)])},Z=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"section section-b"},[t("div",{staticClass:"section-item"},[e._v("下左")]),e._v(" "),t("div",{staticClass:"section-item"},[e._v("下右")])])}],ee={render:Y,staticRenderFns:Z},ae=ee,te=t("/Xao"),ne=s,re=te(X,ae,!1,ne,"data-v-0a0c5418",null),ie=re.exports;m.a.use(A.a);var oe=new A.a({routes:[{path:"/",redirect:"home"},{path:"/home",name:"home",component:ie}]});t("+g8z");m.a.config.productionTip=!1,new m.a({el:"#app",router:oe,template:"<App/>",components:{App:_}})},Q2L4:function(e,a){},QJbA:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.1dbc00bdd63662dbd377.js.map
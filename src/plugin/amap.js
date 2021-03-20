import VueAMap from 'vue-amap'
import Vue from 'vue'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '489c400bd27864ecacb6e4365fb818ef',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

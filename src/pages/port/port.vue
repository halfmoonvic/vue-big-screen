<template>
  <div class="cont">
    <div class="main-cont"></div>
    <div class="suspend">
      <box>111</box>
      <box>222</box>
      <box>333</box>
    </div>
  </div>
</template>

<script type="text/javascript">
  /******* 第三方 组件库 *****/
  /**** 本地公用变量 公用函数 **/
  /******* 本地 公用组件 *****/
  import Box from 'components/box/box'
  /**** 当前组件的 子组件等 ***/

  export default {
    name: 'port',
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
    components: {
      Box
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .port {

  }



</style>

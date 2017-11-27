<template>
  <div class="header">header组件</div>
</template>

<script type="text/javascript">
  /******* 第三方 组件库 *****/
  /**** 本地公用变量 公用函数 **/
  /******* 本地 公用组件 *****/
  /**** 当前组件的 子组件等 ***/

  export default {
    name: 'header',
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
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .header {
    font-size: 30px;
    text-align: center;
    background: rgba(255, 0, 0, .3);
  }
</style>

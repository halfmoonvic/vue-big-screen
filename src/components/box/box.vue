<template>
  <div class="box">
    <div class="box-cont">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
  /******* 第三方 组件库 *****/
  /**** 本地公用变量 公用函数 **/
  /******* 本地 公用组件 *****/
  /**** 当前组件的 子组件等 ***/

  export default {
    name: 'box',
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

  .box {
    margin-bottom: 10px;
    padding: 10px;
    width: 500px;
    // height: 270px;
    flex: 1 1 1px;
    color: #fff;
    background: rgba(255,255,255,.1);
    box-sizing: border-box;
    &:last-child {
      margin-bottom: 0;
    }
    .box-cont {
      @include flex(center, center);
      height: 100%;
      background: rgb(7, 37, 58);
    }
  }
</style>

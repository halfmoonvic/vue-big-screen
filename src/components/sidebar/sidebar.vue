<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <li class="sidebar-item">item1</li>
      <li class="sidebar-item">item2</li>
      <li class="sidebar-item">item3</li>
      <li class="sidebar-item">item4</li>
      <li class="sidebar-item">item5</li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  /******* 第三方 组件库 *****/
  /**** 本地公用变量 公用函数 **/
  /******* 本地 公用组件 *****/
  /**** 当前组件的 子组件等 ***/

  export default {
    name: 'sidebar',
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

</style>

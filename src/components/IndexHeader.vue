<template>
  <header class="index-header">
    头部
  </header>
</template>
<script>
export default {
  name: 'index-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../static/less/variable.less';
  .index-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 3;
    height: 45px;
    line-height: 45px;
    font-size: 19px;
    background: linear-gradient(to bottom, #303036, #3c3b40);
    color: #ffffff;
    text-align: center;
  }
</style>
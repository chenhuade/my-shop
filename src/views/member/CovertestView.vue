<template>
  <div class="_full_router">
    <div class="_full_inner">
      <common-header style="overflow:visible;">
        测试覆盖
      </common-header>
      这里是内容
    </div>
  </div>
</template>

<script>
import CommonHeader from '../../components/CommonHeader'

export default {
  name: 'covertest-view',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    CommonHeader
  }
}
</script>

<style lang="less" scoped>
  ._full_inner {
      position: relative;
      height: 100%;
      z-index: 5;
  }
  ._full_router {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: white;
  }
</style>
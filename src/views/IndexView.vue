<template>
  <div class="index-view">
    <section class="index_main">
      <router-view></router-view>
    </section>
    <index-nav></index-nav>
  </div>
</template>

<script>
import IndexNav from '../components/IndexNav'

export default {
  name: 'index-view',
  data() {
    return {
    }
  },
  components: {
      IndexNav
  }
}
</script>

<style lang="less" scoped>
  @import '../../static/less/variable.less';
  .index-view {
    height: 100%;
    .index_main {
      padding-bottom: 50px;
      overflow: hidden;
      position: absolute;
      height: auto;
      top:0;
      right: 0;
      left: 0;
      bottom: 0;
    }
 }

  .index_main ._full_inner {
    z-index: 2;
  }
</style>
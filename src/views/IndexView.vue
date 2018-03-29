<template>
  <div class="index-view">
    <section class="app-content">
        <!-- index router -->
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
    .app-content {
      padding-top: 45px;
      padding-bottom: 50px;
      overflow: hidden;
      position: relative;
      height: 100%;
    }

    .app-content ._full_inner {
      z-index: 2;
    }
  }
</style>
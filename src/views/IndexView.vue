<template>
  <div class="index-view">
    <section class="index_main">
      <router-view></router-view>
    </section>
    <xx-footer-nav></xx-footer-nav>
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav'

export default {
  name: 'index-view',
  data() {
    return {
    }
  },
  components: {
      'xx-footer-nav': FooterNav
  }
}
</script>

<style lang="less" scoped>
  @import '../../static/less/variable.less';
  .index-view {
    height: 100%;
    .index_main {
      overflow: hidden;
      position: absolute;
      height: auto;
      top:0;
      right: 0;
      left: 0;
      bottom: @footer_height;
    }
 }

  .index_main ._full_inner {
    z-index: 2;
  }
</style>
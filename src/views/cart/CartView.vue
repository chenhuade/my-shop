<template>
  <div>
    <common-header style="overflow:visible;">
      购物车
    </common-header>
    
  </div>
</template>

<script>
import CommonHeader from '../../components/CommonHeader'

export default {
  name: 'cart-view',
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
</style>
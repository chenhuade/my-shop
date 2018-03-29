<template>
  <div>
    <common-header :hasBack="true" :menuArr="menuArr">
      购物车
      <div slot="tipsIconSlot">
        +
      </div>
    </common-header>
  </div>
</template>

<script>
import CommonHeader from '../../components/CommonHeader'

export default {
  name: 'cart-view',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuArr:[{
        path: '/index/category',
        text: '分类',
        iconClass: ''
      },{
        path: '/index/member',
        text: '我',
        iconClass: ''
      }]
    }
  },
  components: {
    CommonHeader
  }
}
</script>

<style lang="less" scoped>
</style>
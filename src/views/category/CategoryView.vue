<template>
  <div>
    <common-header :hasBack="true" :menuArr="menuArr">
      分类
      <div slot="tipsIconSlot">
        +
      </div>
    </common-header>
  </div>
</template>

<script>
import CommonHeader from '../../components/CommonHeader'

export default {
  name: 'category-view',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuArr:[{
        path: '/index/cart',
        text: '购物车',
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
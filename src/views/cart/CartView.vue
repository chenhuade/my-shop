<template>
  <div>
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
  created() {
    this.$store.dispatch({
      type: 'login',
      phone: '1',
      password: '1'
    })
  }, 
  components: {
    CommonHeader
  }
}
</script>

<style lang="less" scoped>
</style>
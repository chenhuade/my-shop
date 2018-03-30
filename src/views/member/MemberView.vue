<template>
  <div>
    <router-link :to="{name:'convertest'}" tag="button">点击</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import CommonHeader from '../../components/CommonHeader'

export default {
  name: 'member-view',
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
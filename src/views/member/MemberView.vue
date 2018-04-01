<template>
  <div>
    <router-link :to="{name:'convertest'}" tag="button">点击</router-link>
    <button @click="popup">弹出框</button>
    <xx-popup v-model="showPopup" position="center">弹出框测试</xx-popup>
    <router-view></router-view>
  </div>
</template>

<script>
import CommonHeader from '../../components/CommonHeader'
import Popup from '../../components/Popup'

export default {
  name: 'member-view',
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    popup() {
      this.showPopup = true
    }
  },
  components: {
    'CommonHeader': CommonHeader,
    'xx-popup': Popup
  }
}
</script>

<style lang="less" scoped>
button {
  width: 3rem;
  margin: 0 auto;
}
</style>
<template>
  <div>
    <common-header style="overflow:visible;" :hasBack="true">
      分类
      <div slot="rightLot">
        <p style="color: #ffffff" @click="clickAdd">+</p>
        <ul v-show="showUl">
          <li v-for="pr in input" v-bind:key="pr" style="color:red">
            {{pr}}
          </li>
        </ul>
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
      input: ['a','b'],
      showUl: false
    }
  },
  methods: {
    'clickAdd': function() {
      this.showUl = !this.showUl
    }
  },
  components: {
    CommonHeader
  }
}
</script>

<style lang="less" scoped>
</style>
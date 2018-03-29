<template>
  <header class="common-header">
    <div class="left"><img class="leftImg" src="../../static/img/icon/arrowBack.png" @click="onBack" v-if="hasBack"/></div>
		<div class="title"><slot></slot></div>
    <div class="right"><slot name="rightLot"></slot></div>
  </header>
</template>

<script>
export default {
  name: 'common-header',
  props: ['hasBack'],
  methods: {
    onBack() {
      if(this.hasBack) {
        this.$router.back();
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .common-header {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 3;
    height: 45px;
    line-height: 45px;
    font-size: 19px;
    background: linear-gradient(to bottom, #303036, #3c3b40);
    color: #ffffff;
    text-align: center;
    .left {
      flex:0 0 48px; /* 左右两列固定宽 */
      order:-1; /* 让left居于左侧 */
      .leftImg {
        width: 28px;
        height: 28px;
      }
    }
    .right {
      flex:0 0 48px; /* 左右两列固定宽 */
    }
    
    .title {
      /* 
      横向中间内容区自适应，即使未指定宽度，但会分配宽度 
      块级元素未主动设置宽度或未被子元素撑起宽度，浏览器默认为块级元素分配宽度为可使用的全部宽度，比如全屏宽。
      */
      flex: 1;
    }
  }
</style>
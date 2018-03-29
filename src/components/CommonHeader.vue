<template>
  <header class="common-header">
    <div class="left"><img class="leftImg" src="../../static/img/icon/arrowBack.png" @click="onBack" v-if="hasBack"/></div>
		<div class="title"><slot></slot></div>
    <div class="right">
      <div @click="tab">
        <slot name="tipsIconSlot"></slot>
      </div>
      <div class="tips-masker" v-show="tips_isOpen"></div>
      <ul class="tips-menu"  v-show="tips_isOpen" :class="tips_isOpen?'tips-open':'tips-close'">
        <li v-for="item in menuArr" :key="item.text">
            <router-link :to="item.path">
              <span class="iconfont" :class="item.iconClass"></span>
              <div v-text="item.text"></div>
            </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'common-header',
  props: ['hasBack', 'menuArr'],
  data () {
    return {
      tips_isOpen: false
    }
  },  
  methods: {
    onBack() {
      if(this.hasBack) {
        this.$router.back();
      }
    },
    'tab': function() {
      event.stopPropagation();
      this.tips_isOpen = !this.tips_isOpen
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
        padding-top: 8px; /* 用box的高度减去图片的高度再除以2，就是padding-top的值 */
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

    .tips-masker {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1;
      top: 45px;
      bottom: 50px;
    }

    .tips-menu {
      position: absolute;
      z-index: 2;
      width: 133px;
      font-size: 16px;
      right: -10px;
      top: 54px;
      text-align: left;
      border-radius: 2px;
      background-color: #49484b;
      padding: 0 15px;
      transform-origin: 90% 0%;
    }
    .tips-open {
      transition: initial;
      opacity: 1;
    }

    .tips-close {
      opacity: 0;
      transition: .2s opacity ease, .6s transform ease;
      transform: scale(0);
    }

    .tips-menu li {
      position: relative;
      height: 40px;
      line-height: 40px;
    }

    .tips-menu li:not(:last-child)::after {
      content: "";
      width: 200%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: #5b5b5d;
      transform: scale(.5);
      transform-origin: 0 100%;
    }

    .tips-menu::before {
      width: 0;
      height: 0;
      position: absolute;
      top: -8px;
      right: 15px;
      content: "";
      border-width: 0 6px 8px;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #49484b rgba(0, 0, 0, 0);
      border-style: solid;
    }

    .tips-menu .iconfont {
      float: left;
      font-size: 16px;
    }

    .tips-menu .iconfont {
      margin-right: 15px;
    }
  }
</style>
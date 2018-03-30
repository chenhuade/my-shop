<template>
  <div id="app">
    <router-view></router-view>
     <!--mask layer--> 
    <section class="welcome" v-show="welcome"></section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          welcome: false//欢迎页
      }
  },
  created() {
    if (this.$route.matched.length === 1) {
        this.welcome = false;
    }
    setTimeout(() => {
        this.welcome = false;
    }, 2000)
  }
}
</script>

<style lang="less">
@import '../static/less/base.less';
	#app{
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    .welcome {
      width: 100%;
      height: 100%;
      z-index: 1000;
      position: fixed;
      left: 0;
      top: 0;
      transition: .25s all linear;
      background: url(../static/img/launchimage.png) no-repeat center center;
      background-size: cover;
    }
  }

</style>

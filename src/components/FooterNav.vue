<template>
  <footer class="xx-footer-nav flex-align-center">
    <div class="footer-item" :class="{active:$route.path == '/index/category'}">
			<router-link to='/index/category'>
				<i class="icon footerIcon footerCategoryIcon"></i>
				<p class="footer-title">分类</p>
			</router-link>
		</div>

    <div class="footer-item" :class="{active:$route.path == '/index/cart'}">
			<router-link to='/index/cart'>
				<i class="icon footerIcon footerCartIcon"></i>
				<p class="footer-title">购物车</p>
			</router-link>
		</div>

    <div class="footer-item" :class="{active:$route.path == '/index/member'}">
			<router-link to='/index/member'>
				<i class="icon footerIcon footerMemberIcon"></i>
				<p class="footer-title">我</p>
			</router-link>
		</div>

  </footer>
</template>
<script>
export default {
  name: 'xx-footer-nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../static/less/components/footernav.less';
</style>
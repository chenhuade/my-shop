<template>
  <footer class="index-nav flex flex-align-center">
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
  name: 'index-nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../static/less/variable.less';
  .index-nav {
    bottom: 0;
    position:fixed;
    width: 100%;
    height: 50px;
    background: #f9f9f9;
    box-shadow: 0 -2px 9px rgba(0, 0, 0, .1);
    font-size: 12px;
    z-index: 3;
    .footer-item {
      flex-grow: 1;
      user-select: none;
      -webkit-user-select: none;
      text-align: center;
    }
    .icon {
      width: 28px;
      height: 28px;
      display: block;
      margin: 0 auto;
      margin-bottom: 2px;
      text-align: center;
    }

    .footer-title {
      color: @base_textColor;
    }

    .footerIcon {
      background-size: 100% 100%!important;
    }

    .footerCategoryIcon {
      background: url('../../static/img/icon/tab_category.png');
    }
    .footerCartIcon {
      background: url('../../static/img/icon/tab_activity.png');
    }

    .footerMemberIcon {
      background: url('../../static/img/icon/tab_member.png');
    }

    .active .footer-title {
      color: @theme_color;
    }

    .active .footerCategoryIcon {
      background: url('../../static/img/icon/tab_category_select.png');
    }

    .active .footerCartIcon {
      background: url('../../static/img/icon/tab_activity_select.png');
    }

    .active .footerMemberIcon {
      background: url('../../static/img/icon/tab_member_select.png');
    }
  }
</style>
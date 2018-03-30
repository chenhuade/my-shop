<template>
  <div class="cat_content">
      <div id="nav_left_box">
        <div id="nav_box" class="nav_left" v-bind:style="{overflow:'hidden',height:'100%'}">
          <v-touch class="ul" v-on:pandown="onPanDown" v-on:panend="onPanend" v-on:panup="onPandup">
            <ul id="domul" :style="[positionjson]" :data-top="positionjson.top">
              <li id="libox" :class="{'border-left':navid==index}" v-for="(value,index) in navapi.list" :data-index="index" v-on:click="href(index)" :key="index">
                <a href="javascript:;">
                  <span class="fontbox">{{value.name}}</span>
                </a>
              </li>
            </ul>
          </v-touch>
        </div>
      </div>
      <transition name="slide-fade">
        <div id="nav_right_box" v-bind:style="{overflow:'hidden',height:'100%'}">
          <div class="nav_ima_box" v-for="(sub,index) in navapi.list[navid].sub" :key="index">
            <a href="javascript:;" class="nav_ima_box_a">
              <p>{{sub.name}}</p>
            </a>
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
import CommonHeader from '../../components/CommonHeader'

//首先定一个 公共变量 
//省去一些 代码
var lefthe = 0; //检测滑动的位置

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
      }],
      lefthe: 0,
      navid: 0,
      positionjson: {
        top: 0,
        transition: '',
        position: 'absolute'
      },
      navapi: {
        list:[{
          name: "菜单一",
          sub: [{
            name: '菜单一'
          }]
        },{
          name: "菜单二",
          sub: [{
            name: '菜单二'
          }]
        }]
      }
    }
  },
  methods: {
    href: function(index) {
      this.navid = index
    },
    onPanDown: function(data) {
      this.positionjson.transition=''
      var y = data.deltaY; //事件执行 所滑动的距离
      console.log("down:"+y);
      lefthe = y + this.lefthe; //滑动的距离 记录到 lefthe 方便下次执行

      if(lefthe >=10){
        //限制 不能一直往上拉 拉到宇宙呢？我这里是写死的
         lefthe = 0;
         //回弹效果 在 滑动结束后 执行
        return
      }
      this.positionjson.top = lefthe +'px';
    },
    onPanend: function(data) {
      if(lefthe ==0){
        this.positionjson.top = lefthe +'px';
        //滑动结束 执行 一些事件 lefthe 0 的时候其实也就是下拉到顶的过程
        this.positionjson.transition='0.2s ease 0s'
      }
      this.lefthe = lefthe;
    },
    onPandup: function(data) {
      var navBox =document.getElementById('nav_box');
      var boxheight = navBox.clientHeight; //视图高度 也就是分辨率
      var y = data.deltaY; //下拉的距离
      this.positionjson.transition=''
      var liheight = document.getElementById('libox').clientHeight; //左侧每个li的高度
      var zongheight = this.navapi.list.length * liheight; //就能得出li父盒子高度
      var bottomheight = -(zongheight - boxheight) + -100; //计算下拉到 滑动盒子的高度 - 视图高度 =上拉到底的位置
      console.log("zongheight:"+zongheight+" navBox:"+boxheight+" up:"+y +" bottomheight:"+bottomheight+" lefthe:"+lefthe);

      if(lefthe <= bottomheight){
        return;
      }

      lefthe = y + this.lefthe;

      this.positionjson.top = lefthe +'px';
    }
  },
  components: {
    CommonHeader
  }
}
</script>

<style lang="less" scoped>
  .cat_content {
    width: 100%;
    height: 100%;
  }

  #nav_left_box {
    float: left;
    height: 100%;
    width: 100px; 
    position: relative;
  }
  
  #nav_right_box {
    height: 100%;
    margin-left: -100px;/*==此值等于左边栏的宽度值==*/ 
  }
</style>
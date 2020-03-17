<template>
  <div>
    <div class="home_header">
      <van-row type="flex"
               justify="space-between"
               class="index_icon">
        <van-col span="6">
          <van-icon name="wap-home-o"
                    size="25" />
        </van-col>
        <span class="index_title">值得买</span>
        <van-col span="6">
          <van-icon name="search"
                    size="25" />
          <van-icon name="shopping-cart-o"
                    size="25" />
        </van-col>
      </van-row>
      <div class="index_header">
        <img src="../../public/imgs/index/1.png"
             alt="">
        <div class="index_img">
          <img src="../../public/imgs/index/2.png"
               alt="">
          <span class="index_text">严选好物用心生活</span>
        </div>
      </div>
    </div>
    <div class="index_swipe">
      <van-swipe class="my-swipe"
                 :autoplay="2000"
                 indicator-color="red">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <footertabbar />
  </div>
</template>
<script>
import footertabbar from './footertabbar'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    footertabbar
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.home_header
  height 3rem
  width 100%
	background-color #FAFAFA
.home_header .index_icon
  margin 0.5rem 0 0.5rem 1rem
.home_header .index_icon .index_title
  font-size 1.2rem
  color #000000
.home_header .index_header img
  width 100%
  position relative
.home_header .index_header .index_img
  width 4.5rem
  position absolute
  top 5rem
  left 0.5rem
.home_header .index_header .index_img .index_text
  color #ffffff
  width 8rem
  position absolute
  top 0.8rem
  left 4.5rem
</style>
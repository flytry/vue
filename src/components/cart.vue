<template>
  <div>
    <div class="cart_header">
      <van-row type="flex"
               justify="space-between">
        <van-col span="6">
          <span class="cart_text">购物车</span>
        </van-col>
        <van-col span="6">
          <span class="cart_coupons">领券</span>
        </van-col>
      </van-row>
    </div>
    <div class="cart_advertising">
      <van-row type="flex"
               justify="space-between">
        <van-col span="6">
          <div>
            <div class="cart_advertising_icon">
              <img src="../../public/imgs/cart/圆点图标.png" alt="">
              <span class="cart_cart_advertising_text">30天无忧退货</span>
            </div>
          </div>
        </van-col>
        <van-col span="6">
          <div class="cart_advertising_icon"><img src="../../public/imgs/cart/圆点图标.png" alt="">
          <span class="cart_cart_advertising_text">48小时快速退款</span>
          </div>
        </van-col>
        <van-col span="6">
          <div class="cart_advertising_icon"><img src="../../public/imgs/cart/圆点图标.png" alt="">
          <span class="cart_cart_advertising_text">满88元免邮费</span>
        </div>
        </van-col>
      </van-row>
    </div>
    <div class="cart_list">
      <div class="cart_list_content">
        <img src="../../public/imgs/cart/cart.png" alt="">
        <span>去添加点什么吧</span>
      </div>
    <div class="cart_button">
      <van-button type="danger" block>登录</van-button>
    </div>
    </div>
    <footertabbar />
  </div>
</template>
<script>
import footertabbar from './footertabbar'
export default {
  name: 'cart',
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
.cart_header
  height 2.5rem
  background-color #FAFAFA
  position relative
.cart_header .cart_text
  font-size 1.2rem
  position absolute
  left 0.8rem
  top 0.4rem
.cart_header .cart_coupons
  font-size 1.15rem
  color red
  margin 0 0 0 2rem
  line-height 2.5rem
.cart_advertising{
  background-color #EEEEEE
  height 2rem
}
.cart_advertising .cart_advertising_icon img{
  width 0.3rem
  height 0.3rem
  line-height 2rem
  margin 0 0 0 0.4rem
  vertical-align middle
}
.cart_advertising .cart_cart_advertising_text{
  font-size 0.7rem
  color #666666
  margin 0 0 0 0.05rem
  line-height 2rem
}
.cart_list{
  background-color #F4F4F4
  position fixed
  width 100%
  text-align center
  top 4.5rem
  bottom 0
  left 0
}
.cart_list .cart_list_content img{
  width 8rem
  height 8rem
  margin 10rem 7rem
  position relative
}
.cart_list .cart_list_content span{
  font-size 0.8rem
  color #999999
  position absolute
  top 17.2rem
  left 9rem
}
.cart_list .cart_button{
  width 13rem
  position absolute
  top 20rem
  left 5rem
}
</style>
<template>
	<div>
		<van-tabbar v-model="active"
                active-color=#FF0000>
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/cateList">分类</van-tabbar-item>
      <van-tabbar-item icon="gift-card-o" to="/home">值得买</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="personal">个人</van-tabbar-item>
    </van-tabbar>
	</div>
</template>
<script>
export default {
	name:'footertabbar',
	data(){
		return {
			active:'0'
		}
	}
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
</style>
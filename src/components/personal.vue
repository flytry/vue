<template>
  <div>
    <div class="personal_header">
      <van-row type="flex"
               justify="space-between" class="personal_header_icon">
        <van-col span="6">
					<van-icon name="wap-home-o" size="25" />
				</van-col>
        <van-col span="6">
					<img src="../../public/imgs/logo.png" alt="">
				</van-col>
        <van-col span="6">
					<van-icon name="search" size="25"/>
					<van-icon name="shopping-cart-o" size="25" />
				</van-col>
      </van-row>
    </div>
		<div class="personal_content">
			<div class="profile_logo">
				<img src="../../public/imgs/个人页logo.png" alt="">
			</div>
			<div class="button_list">
				<van-button type="danger" block class="button_list1">手机号快捷登录</van-button>
				<van-button plain hairline type="danger" block>邮箱账号登录</van-button>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  name: 'personal',
  data () {
    return {
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.personal_header
  background-color #FAFAFA
  height 3rem
.personal_header .personal_header_icon
  padding 0.7rem 0 0.5rem 1.8rem
.personal_header img{
  width 5rem
  height 1.5rem
}
.personal_content{
  background-color #F4F4F4
  position fixed
  width 100%
  text-align center
  top 3rem
  bottom 0
  left 0
}
.personal_content .profile_logo img{
	width 9rem
	height 3rem
	margin 8rem 0 0 1rem
}
.button_list{
	width 90%
	margin 8rem auto
}
.button_list .button_list1{
	margin 0 0 1rem 0
}
</style>
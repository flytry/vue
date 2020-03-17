<template>
  <div>
    <!-- header -->
    <div class="header">
      <van-search v-model="value"
                  placeholder="搜索商品，共24086款好物" />
    </div>
    <div>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签" />
      </van-sidebar>
    </div>
		
    <footertabbar />
  </div>
</template>
<script>
import axios from 'axios'
import footertabbar from './footertabbar'
export default {
  name: 'cateList',
  data () {
    return {
			activeKey:0,
    }
  },
  components: {
    footertabbar
	},
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.header
  width 100%
  height 2.5rem
  background-color red
</style>
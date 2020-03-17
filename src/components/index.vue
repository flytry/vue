<template>
  <div>
    <!-- header -->
    <van-sticky>
      <van-row  style="background:#fff">
        <van-col>
          <img class="logo"
               src="../../public/imgs/logo.png"
               alt="">
        </van-col>
        <van-col>
          <van-search class="header_search"
                      v-model="search_v"
                      placeholder="搜索商品，共24086款好物" />
        </van-col>
        <van-col>
          <div class="loginBtn">登录</div>
        </van-col>
      </van-row>
      <!-- 主页导航 -->
      <van-tabs>
        <van-tab v-for="(i,index) in tabBtnList"
                 :title="i"
                 :key="index">
        </van-tab>
      </van-tabs>
    </van-sticky>
    <!-- 轮播图 -->
    <van-swipe class="swipe"
               :autoplay="2000"
               indicator-color="white">
      <van-swipe-item v-for="(i,index) in imgList"
                      :key="index">
        <img :src="i" />
      </van-swipe-item>
    </van-swipe>
    <!-- 通知栏 -->
    <van-row class="Notification_bar">
      <van-col span="8">
        <i class="icon">
          <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"
               alt="">
        </i>
        <span>网易自营品牌</span>
      </van-col>
      <van-col span="8">
        <i class="icon">
          <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png"
               alt="">
        </i>
        <span>30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i class="icon">
          <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png"
               alt="">
        </i>
        <span>48小时快速退款</span>
      </van-col>
    </van-row>
    <!-- 宫格展示 -->
    <van-grid :column-num="5"
              icon-size="3rem">
      <van-grid-item v-for="(i,index) in goods_icon"
                     :key="index"
                     :icon="i.imgurl"
                     :text="i.goods_text" />
    </van-grid>
    <!-- 广告 -->
    <div class="index_advertising">
      <div class="rolling_advertising">
        <img src="../../public/imgs/indexRolling.gif"
             alt="">
        <div class="rolling_advertising_gif">
          <img src="https://yanxuan-item.nosdn.127.net/1b8e4a484e128c28a050cd2bc0c64396.png?imageView&thumbnail=168x0&quality=75"
               alt="">
        </div>
      </div>
      <div class="footer_advertising">
        <div class="footer_advertising_1">
          <img src="https://yanxuan.nosdn.127.net/947b24847de83b94f9dfed2d75ba9d95.png?quality=75&type=webp&imageView&thumbnail=375x0"
               alt="">
        </div>
        <div class="footer_advertising_2">
          <img src="https://yanxuan.nosdn.127.net/d6eed4125699c1c0275003e096a8b559.png?quality=75&type=webp&imageView&thumbnail=375x0"
               alt="">
        </div>
      </div>
    </div>
    <!-- 专享礼 -->
    <div class="newuser_gift">
      <div class="moduleTitle">
        <span>- 新人专享礼 -</span>
      </div>
      <div class="content">
        <div class="left">
          <span class="leftTitle">新人专享礼包</span>
          <img src="../../public/imgs/1.png"
               alt="">
        </div>
        <div class="right">
          <div class="module1">
            <div class="module1_title">福利社</div>
            <br>
            <span class="module1_text">今日特价</span>
            <div><img src="../../public/imgs/2.png"
                   alt=""></div>
          </div>
          <div class="module2">
            <span class="module2_title">新人拼团</span>
            <span class="module2_text">1元起包邮</span>
          </div>
        </div>
      </div>
    </div>
    <div class="grid"></div>
    <!-- 商品列表 -->
    <div class="goodsList">
      <div class="hotList">
        <h1>类目热销榜</h1>
        <div class="hotLeft">
          <span>热销榜</span>
          <hr>
          <img src="https://yanxuan-item.nosdn.127.net/1229ada6e69de283d27f858db1c00603.png?quality=75&type=webp&imageView&thumbnail=200x200"
               alt="">
        </div>
        <div class="hotRight">
          <span>好评榜</span>
          <hr>
          <img src="https://yanxuan-item.nosdn.127.net/797a29814fea9f623efb204d96fd3e3e.png?quality=75&type=webp&imageView&thumbnail=200x200"
               alt="">
        </div>
      </div>
      <div class="hotList_vant">
        <van-grid :border="true"
                  :column-num="4">
          <van-grid-item v-for="(i,index) in hotList"
                         :key="index"
                         :text="i.text"
                         :icon="i.imgurl" />
        </van-grid>
      </div>
      <div class="grid"></div>
      <!-- 限时购 -->
      <div class="timeBuy">
        <div class="timeBuy_title">限时购</div>
        <van-count-down :time="time"
                        format="HH : mm : ss :">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours }}</span>
            <span class="item">{{ timeData.minutes }}</span>
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
        <span class="more">更多></span>
        <div class="timeBuy_vant">
          <van-grid :column-num="3">
            <van-grid-item v-for="(i,index) in timeBuyList"
                           :key="index"
                           :icon="i.imgurl"
                           :text="i.text" />
          </van-grid>
        </div>
      </div>
      <div class="grid"></div>
      <!-- 新品首发 -->
      <div class="newList">
        <div class="newList_title">新品首发</div>
        <span class="more">更多></span>
        <div class="newList_vant">
          <van-grid :column-num="3">
            <van-grid-item v-for="(i,index) in newList_imgs"
                           :key="index"
                           :icon="i.imgurl"
                           :text="i.text" />
          </van-grid>
        </div>
      </div>
      <div class="grid"></div>
      <!-- 尾部商品列表 -->
      <div class="floorList">
        <div class="floorList1">
          <span class="title">断货补单王</span>
          <br />
          <span class="text">补仓疯抢中</span>
          <div class="leftImg">
            <img src="../../public/imgs/floorList/1.png"
                 alt="">
          </div>
          <div class="rightImg">
            <img src="../../public/imgs/floorList/2.png"
                 alt="">
          </div>
        </div>
        <div class="floorList2">
          <span class="title">回购榜单</span>
          <br>
          <span class="text">口碑超值价</span>
          <div class="leftImg">
            <img src="../../public/imgs/floorList/3.png"
                 alt="">
          </div>
          <div class="rightImg">
            <img src="../../public/imgs/floorList/4.png"
                 alt="">
          </div>
        </div>
        <div class="floorList3">
          <span class="title">员工精选</span>
          <br>
          <span class="text">36元免费送</span>
          <div class="leftImg">
            <img src="../../public/imgs/floorList/5.png"
                 alt="">
          </div>
          <div class="rightImg">
            <img src="../../public/imgs/floorList/6.png"
                 alt="">
          </div>
        </div>
        <div class="floorList4">
          <span class="title">应季尖货</span>
          <br>
          <span class="text">3月拔草清单</span>
          <div class="leftImg">
            <img src="../../public/imgs/floorList/7.png"
                 alt="">
          </div>
          <div class="rightImg">
            <img src="../../public/imgs/floorList/8.png"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="grid"></div>
    <!-- 足部 -->
    <div class="footer">
      <div class="footerButton">
        <div class="loadApp">下载APP</div>
        <div class="computerStyle">电脑版</div>
      </div>
      <div class="footerText">
        <span>网易公司版权所有&copy; 1997-2020</span>
        <br>
        <span>食品经营许可证：JY13301080111719</span>
      </div>
    </div>
    <!-- 吸底 -->
    <footertabbar/>
  </div>
</template>
<script>
import axios from 'axios'
import footertabbar from './footertabbar'
export default {
  name: 'index',
  data () {
    return {
      search_v: '',
      active: '',
      tabBtnList:['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色'],
      imgList: [
        "https://yanxuan.nosdn.127.net/368caf8b29659abe8418a54b73bc53e0.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/737c49f42ec5779c7cd9f3be64d1b41c.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/0ff2ba417abdc3eb7da7d71f4c13d123.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/2b426e10cc9f3f8b8b2798f6a6499007.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/7b1b88e42906de8871300509828c73fe.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
      ],
      goods_icon: [
        {
          imgurl: require('../../public/imgs/GoodsList1.png'),
          goods_text: '新品首发'
        },
        {
          imgurl: require('../../public/imgs/GoodsList2.png'),
          goods_text: '居家生活'
        },
        {
          imgurl: require('../../public/imgs/GoodsList3.png'),
          goods_text: '服饰鞋包'
        },
        {
          imgurl: require('../../public/imgs/GoodsList4.png'),
          goods_text: '美食酒水'
        },
        {
          imgurl: require('../../public/imgs/GoodsList5.png'),
          goods_text: '个护清洁'
        },
        {
          imgurl: require('../../public/imgs/GoodsList6.png'),
          goods_text: '母婴亲子'
        },
        {
          imgurl: require('../../public/imgs/GoodsList7.png'),
          goods_text: '运动旅行'
        },
        {
          imgurl: require('../../public/imgs/GoodsList8.png'),
          goods_text: '数码家电'
        },
        {
          imgurl: require('../../public/imgs/GoodsList9.png'),
          goods_text: '全球特色'
        },
        {
          imgurl: require('../../public/imgs/GoodsList10.png'),
          goods_text: '好货抄底'
        }
      ],
      hotList: [
        {
          imgurl: require('../../public/imgs/hotList/1.png'),
          text: '居家生活榜'
        },
        {
          imgurl: require('../../public/imgs/hotList/2.png'),
          text: '美食酒水榜'
        },
        {
          imgurl: require('../../public/imgs/hotList/3.png'),
          text: '个护清洁榜'
        },
        {
          imgurl: require('../../public/imgs/hotList/4.png'),
          text: '数码家电榜'
        },
        {
          imgurl: require('../../public/imgs/hotList/5.png'),
          text: '全球特色榜'
        },
        {
          imgurl: require('../../public/imgs/hotList/6.png'),
          text: '服饰鞋包榜'
        },
        {
          imgurl: require('../../public/imgs/hotList/7.png'),
          text: '母婴亲子榜'
        },
        {
          imgurl: require('../../public/imgs/hotList/8.png'),
          text: '运动旅行榜'
        }
      ],
      time: 888888 * 60 * 60,
      timeBuyList: [
        {
          imgurl: require('../../public/imgs/timeBuyList/1.png'),
          text: '￥129'
        },
        {
          imgurl: require('../../public/imgs/timeBuyList/2.png'),
          text: '￥159'
        },
        {
          imgurl: require('../../public/imgs/timeBuyList/3.png'),
          text: '￥35.9'
        },
        {
          imgurl: require('../../public/imgs/timeBuyList/4.png'),
          text: '￥56.9'
        },
        {
          imgurl: require('../../public/imgs/timeBuyList/5.png'),
          text: '￥399'
        },
        {
          imgurl: require('../../public/imgs/timeBuyList/6.png'),
          text: '￥75'
        }
      ],
      newList_imgs: [
        {
          imgurl: require('../../public/imgs/newList/1.png'),
          text: "在家坐享星级牛排大餐，澳洲M3谷饲牛排",
          price: '199',
          gradientPrice: 0
        },
        {
          imgurl: require('../../public/imgs/newList/2.png'),
          text: "抑菌率99.9% 韩国75%酒精除菌湿巾 72抽",
          price: '29',
          gradientPrice: 1
        },
        {
          imgurl: require('../../public/imgs/newList/3.png'),
          text: "替代毛巾告别细菌 韩国一次性加厚洗脸巾",
          price: '25',
          gradientPrice: 2
        },
        {
          imgurl: require('../../public/imgs/newList/4.png'),
          text: "新晋网红“甜甜圈”甜瓜，山东羊角蜜 4.5斤",
          price: '55',
          gradientPrice: 3
        },
        {
          imgurl: require('../../public/imgs/newList/5.png'),
          text: "大容量免洗酒精凝胶消毒液500ml 20瓶",
          price: '1020',
          gradientPrice: 3
        },
        {
          imgurl: require('../../public/imgs/newList/6.png'),
          text: "高温蒸汽清洁机",
          price: '129',
          gradientPrice: 2
        }
      ]
    }
  },
  components:{
    footertabbar
  },
  // created () {
  //   axios.all([
  //     axios.get('http://localhost:5000/get_tab_btn_list'),
  //   ])
  //     .then(axios.spread(res => {
  //       this.tabBtnList = res.data
  //     }),
  //     )  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.logo
  width 4rem
  display inline-block
  margin 0.9rem 0 0 0.7rem
.header_search
  height 0.3rem
  width 15rem
  display inline-block
  color #666
  border-radius 2rem
  margin 0 0 0 0.01rem
.loginBtn
  width 2rem
  height 1rem
  color red
  border 1PX solid red
  text-align center
  line-height 1rem
  font-size 0.8rem
  border-radius 0.3rem
  margin 1rem 0 0 0.2rem
.swipe img
  width 100%
  height 100%
.Notification_bar
  text-align center
  height 1.5rem
  line-height 1.5rem
  font-size 0.5rem
.Notification_bar i.icon img
  display inline-block
  background-repeat no-repeat
  background-size 100%
  width 1.2rem
  height 1.2rem
  vertical-align middle
.index_advertising
  background-image none
  background-size 100% 100%
  color #EEEEEE
.index_advertising .rolling_advertising
  background-size 100% 100%
  position relative
.index_advertising .rolling_advertising .rolling_advertising_gif
  position absolute
  width 6.8rem
  left 1.5rem
  top 0.3rem
.index_advertising .rolling_advertising img
  display inline-block
  width 100%
  height 100%
.index_advertising .footer_advertising
  width 100%
  background-size 100% 100%
  color #F2EFF0
.index_advertising .footer_advertising img
  width 100%
  height 100%
.index_advertising .footer_advertising .footer_advertising_1
  float left
  width 47%
  margin 0.2rem 0 0 0.4rem
.index_advertising .footer_advertising .footer_advertising_2
  float right
  width 47%
  margin 0.2rem 0.5rem 0 0.2rem
.newuser_gift .moduleTitle
  clear both
  text-align center
  width 100%
  font-weight bold
.newuser_gift .content
  display flex
  width 100%
  height 16rem
.newuser_gift .content img
  display inline-block
.newuser_gift .content .left
  background-color #F9E9CF
  width 48%
  height 14rem
  margin 0.5rem 0 0 0.6rem
  position relative
  border-radius 0.2rem
  border 1px solid white
.newuser_gift .content .leftTitle
  position absolute
  left 1rem
  top 1.5rem
.newuser_gift .content .left img
  height 8rem
  width 8rem
  position absolute
  left 1.6rem
  top 4rem
.newuser_gift .content .right
  width 48%
  height 14rem
  flex-direction column
.newuser_gift .content .right .module1
  background-color #FBE2D3
  height 50%
  width 100%
  margin 0.5rem 0.6rem 0 0
  position relative
  border-radius 0.2rem
  border-left 1px solid white
  border-bottom 1px solid white
.newuser_gift .content .right .module1 .module1_title
  position absolute
  top 1rem
  left 1rem
.newuser_gift .content .right .module1 .module1_text
  position absolute
  font-size 0.8rem
  top 2.35rem
  left 1rem
  color #7F7F7F
.newuser_gift .content .right .module1 img
  width 7rem
  height 7rem
  position absolute
  left 4.8rem
  top -0.4rem
.newuser_gift .content .right .module2
  height 50%
  width 100%
  background-color #FFECC2
  position relative
  border-radius 0.2rem
  border-left 1px solid white
.newuser_gift .content .right .module2 .module2_title
  position absolute
  top 1rem
  left 1rem
.newuser_gift .content .right .module2 .module2_text
  position absolute
  font-size 0.8rem
  top 2.35rem
  left 1rem
  color white
  background-color #cbb693
  border-radius 0.1rem
.goodsList .hotList
  width 100%
.goodsList .hotList h1
  font-size 0.9rem
  height 1.8rem
  margin 0.2rem 0 0 0.4rem
  font-weight 500
.goodsList .hotList span
  color #333333
  font-size 0.8rem
  margin 0 0 0 0.2rem
.goodsList .hotList hr
  width 1.3rem
  height 0.05rem
  background-color #000000
.goodsList .hotList img
  width 5rem
  height 5rem
  display inline-block
.goodsList .hotList .hotLeft
  width 47%
  height 6rem
  background-color #F9F3E4
  margin 0 0 0 0.4rem
  float left
  position relative
.goodsList .hotList .hotLeft img
  position absolute
  left 4rem
  bottom 0.5rem
.goodsList .hotList .hotLeft span
  position absolute
  top 35%
  left 0.3rem
.goodsList .hotList .hotLeft hr
  position absolute
  top 2.8rem
  left 0.5rem
.goodsList .hotList .hotRight
  width 23%
  height 6rem
  background-color #EBEFF6
  margin 0 0.4rem 0 0.3rem
  float left
  position relative
.goodsList .hotList .hotRight img
  position absolute
  top 0.5rem
  right -5.8rem
.goodsList .hotList .hotRight span
  position absolute
  top 35%
  left 0.3rem
.goodsList .hotList .hotRight hr
  position absolute
  top 2.8rem
  left 0.5rem
.hotList_vant
  clear both
  img
    width 100%
    height 100%
    background #f5f5f5
    margin 0.1rem
.timeBuy_title
  font-size 0.9rem
  height 1.8rem
  margin 0.8rem 0 0 0.8rem
  font-weight 500
  float left
.item
  display inline-block
  width 1rem
  height 1.1rem
  color #fff
  line-height 1.1rem
  font-size 0.8rem
  text-align center
  background-color #000000
  float left
  margin 0.8rem 0.1rem 0 0.5rem
.timeBuy .more
  font-size 0.8rem
  float right
  margin 0.8rem
.timeBuy_vant
  clear both
  img
    width 100%
    height 100%
    background #F5F5F5
.newList .newList_title
  font-size 0.9rem
  height 1.8rem
  margin 0.8rem 0 0 0.8rem
  font-weight 500
  float left
.newList .more
  font-size 0.8rem
  float right
  margin 0.8rem
.newList_vant
  clear both
.newList_vant img
  width 100%
  height 100%
  background #F5F5F5
.floorList
  width 90%
  margin 1rem auto
  height 15rem
  background #F5F5F5
.floorList .title
  color #333333
  font-size 0.9rem
  margin 0rem 0 0 0.2rem
  padding 0.5rem 0.5rem
.floorList .text
  color #7F7F7F
  font-size 0.6rem
  margin 0 0 0 0.7rem
.floorList img
  display inline-block
  width 50%
  height 50%
  float left
.floorList .floorList1
  width 49.3%
  float left
  border 1px solid white
.floorList .floorList2
  width 49.3%
  float right
  border 1px solid white
.floorList .floorList3
  width 49.3%
  float left
  clear both
  border 1px solid white
.floorList .floorList4
  width 49.3%
  float right
  border 1px solid white
.floorList .leftImage
  float left
.floorList .rightImage
  float right
.grid
  height 0.8rem
  width 100%
  background-color #F5F5F5
.footer
  width 100%
  height 10rem
  background-color #414141
  position relative
  .footerButton
    color white
    font-size 0.4rem
    text-align center
    line-height 1.2rem
    border-radius 10px !important
    .loadApp
      border 1px solid white
      position absolute
      left 6rem
      top 2rem
      width 4rem
    .computerStyle
      border 1px solid white
      position absolute
      left 12.2rem
      top 2rem
      width 4rem
  .footerText
    color #999999
    font-size 0.3rem
    position absolute
    top 4.5rem
    left 6rem
    text-align center
</style>
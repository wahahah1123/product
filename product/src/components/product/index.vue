<template>
    <div id="app">
       
        <div class="home-page">
            <header class="head">
                <div class="home-address">
                    <strong class="address-img"></strong>
                    <span>深圳</span>
                </div>
                <div class="home-search ml-1">
                    <span>
                        <img src="../../assets/search.png" class="search-img">
                    </span>
                    <span>
                        搜索热门演出
                    </span>
                </div>
                <img src="../../assets/headmoney.png" class="headmoney-img ml-1" alt="">
            </header>
            <!-- 轮播 -->
             <div style="height:8.3rem;" >
                 <mt-swipe :auto="3500">
                     <mt-swipe-item>
                         <img src="../../assets/01.jpg" alt="">
                     </mt-swipe-item>
                     <mt-swipe-item>
                         <img src="../../assets/02.jpg" alt="">
                     </mt-swipe-item>
                     <mt-swipe-item>
                         <img src="../../assets/03.png" alt="">
                     </mt-swipe-item>
                     <mt-swipe-item>
                         <img src="../../assets/04.png" alt="">
                     </mt-swipe-item>
                     <mt-swipe-item>
                         <img src="../../assets/05.jpg" alt="">
                     </mt-swipe-item>
                     <mt-swipe-item>
                         <img src="../../assets/06.jpg" alt="">
                     </mt-swipe-item>
                 </mt-swipe>
             </div>
        <!-- 音乐剧模板 -->
            <div class="demo1">
                <ul class="flex just-bettween">
                    <li v-for="(elem,i) of list " :key="i"> <img :src="elem.src" alt=""> <span v-text="elem.txt"></span> </li>
                </ul>
                <img src="../../assets/cq.png" class="cq-width" alt="">
                <div class="demo2">
                    <div class="demo2-1-width flex ">
                        <div class="one-width">
                            <h3 class="block-title">橙PLUS卡</h3>
                            <p class="block-lab">送<span class="orange">100元</span>,享V+权益</p>
                        </div>
                        <div>
                            <img src="../../assets/plus.png" class="plus-width" alt="">
                        </div>
                    </div>
                    <div class="demo2-2-width flex">
                       <div class="one-width">
                            <h3 class="block-title">VIP+专区</h3>
                            <p class="block-lab">尊享<span class="orange">10</span>大权益</p>
                        </div>
                        <div>
                            <img src="../../assets/vv.png" class="plus-width" alt="">
                        
                        </div>
                    </div>
                </div>
                <div class="demo2">
                    <ul class="flex">
                        <li>
                            <div class="demo-font-width">积分商城</div>
                            <div class="block-lab font-lab-width">用积分<span class="orange">0元</span>购票</div>
                            <div><img src="../../assets/shopp.png"  class="plus-width" alt=""></div>
                        </li>
                         <li>
                            <div class="demo-font-width">日历</div>
                            <div class="block-lab font-lab-width">演出信息<span class="orange">一目了然</span></div>
                            <div><img src="../../assets/book.png"  class="plus-width" alt=""></div>
                        </li>
                       <li>
                            <div class="demo-font-width">欢聚橙卡</div>
                            <div class="block-lab font-lab-width"><span class="orange">33元</span>看演出</div>
                            <div><img src="../../assets/book2.png"  class="plus-width" alt=""></div>
                        </li>
                    </ul>
                </div>
                <div class="hot-block">
                    <div class="hot-font">热门演出
                            <img src="../../assets/right.png" alt="" class="right hot-img_height">
                    </div>
                    <!-- 滑动 -->
                    <div class="hot-list">
                   
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide hot-demo-width" v-for="(item,i) of list1" :key="i">
                                    <img :src="`http://127.0.0.1:3000/`+item.src" alt="">
                                    <div v-text="item.txt"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                     <!-- grgy -->
                    <div class="vip-block">
                       <div class="vip-left left">
                           <img src="../../assets/vip-logo.png" alt="" class="vip-logo left">
                          <div class="left">VIP+会员尊享权益</div>
                           </div>
                       <div class="right vip-open">开通99元/年> </div>
                    </div>
                    <div class="vip-block-content">
                        <!-- first -->
                        <div class="vip-block-content-perch">
                            专项折扣
                          <ul class="vip-block-content-wrap">        <!-- list1-1  img-->
                              <li>
                                   <img src="../../assets/list1-1.jpg" alt="">
                                   <strong class="orange1">2.8</strong><span class="grgy">折</span>
                              </li>
                              <li>
                                   <img src="../../assets/list1-2.jpg" alt="">
                                    <strong class="orange1">2.8</strong><span class="grgy">折</span>
                              </li>
                          </ul> 
                        </div>
                        <div>
                            <!-- list1-3  img-->
                            <div class="vip-block-content-title">
                             优先购票
                                <div class="vip-block-content-wrap1" >
                                    <img src="../../assets/list1-3.jpg" alt="">
                                   <strong class="orange1">08/01 10:18</strong><span class="grgy">开始</span>
                                </div>
                            </div>
                        </div>
                
                    </div>
                    <div class="recommend-block">
                        <h3 class="recommend-title">为你推荐</h3>
                        <!-- 循环 -->
                        <router-link :to="{path:'/titck',query:{id:item1.id}}" style="text-decoration: none;display:block"  v-for="(item1,i) of list2" :key="i">
                        <div class="recommend-body">
                            <div class="recommend-body-img">
                                <img :src="`http://127.0.0.1:3000/`+item1.src" alt="">
                            </div>
                            <!-- message -->
                            <div class="recommend-item-desc">
                                <strong class="recommend-date" v-text="item1.jdate"></strong>
                                <div class="recommend-text" v-text="item1.jtitle"></div>
                                <div class="recommend-text-single" v-text="item1.single"></div>
                                <div class="orange1 recommend-text-font " v-text="`￥${item1.price}`"><span class="grgy">起213123</span></div>
                            </div>
                        </div>
                        </router-link>
                      <div class="lodmore"> <mt-button size="small" icon="more" type="primary" @click="more">显示更多数据</mt-button></div>
                         
                    </div>
                    
            </div>
        </div>
    <!-- 跳转 -->
      <div class="footer-tabbar-index" >
         <div>
           <router-link to="/" style="
    text-decoration: none; color:black;font-size:.5rem">
    <i class="icon iconfont icon-home"></i>
   <div style="position: absolute;top:.86rem;left:2.15rem">首页</div> 
</router-link>
         </div>
         <div style="position:relative">
             <router-link to="/theater" style="
    text-decoration: none; color:black;font-size:.5rem">
    <i class="icon iconfont icon-juyuan"></i>
   <div style="position: absolute;top:.86rem;left:2.15rem;">剧院</div> 
</router-link>
         </div>
         <div style="position:relative" @click="dev">
               
    <router-link to="/me"  style="
    text-decoration: none; color:black;font-size:.5rem">
        <i class="icon iconfont icon-me" ></i>
    <div style="position: absolute;top:.86rem;left:2.15rem;">我的</div>
    </router-link>
         </div>
      </div>
    <!-- 跳转结束 -->
       </div>
</template>
<script>
import "../../assets/swiper.min.css";
import './theater.vue';
import theaterVue from './theater.vue';
import { constants } from 'crypto';
export default {
    data(){
        return{
            list:[
                  {src:require("../../assets/mk.png"),txt:"演唱会"},
                {src:require("../../assets/music.png"),txt:"音乐剧"},
                {src:require("../../assets/smlie.png"),txt:"舞台剧"},
                {src:require("../../assets/child.png"),txt:"儿童剧"},
                {src:require("../../assets/piano.png"),txt:"音乐会"}
            ],
            active:"index",
            list1:[],
            list2:[],
            pno:0,
            ps:4
                
        }
    },
    created(){
        this.axios.get("per").then(result=>{
            this.list1=result.data
        })
        this.axios.get("details").then(result=>{
            this.list2=result.data
        })
    },
    mounted(){
         new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
    },
    methods:{
        dev(){
            var name1=sessionStorage.getItem("uname");
           if(name1!=null){
               this.$router.push("/me")
           }else{
               this.$router.push("/login")
           }
        },
       more(){//加载更多的数据
        var url = "product";
        //将当前页码加1 
        this.pno++;
        //创建参数对象
        var obj = {pno:this.pno,pageSize:this.ps};
        this.axios.get(url,{params:obj}).then(result=>{
          var rows = this.list2.concat(result.data.data);
          this.list2 = rows;

        })
      }
    }
}
</script>


<style >
.lodmore{
    margin-left: 5rem;
    margin-top: .3rem;
}
.footer-tabbar-index{
       background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    position: relative;
    background-color: #fafafa;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    text-align: center;
    position: fixed;
    z-index: 999;
    height: 1.8rem;
}
.footer-tabbar-index>div{
    padding: 0rem 2rem;
    width: 33.33%;
    height: 100%;
    line-height: 1.3rem;
}
.icon{
    font-size: 1rem;
    padding: 0;
}
.mint-tab-item{
    height: 1.7rem;
    position: relative;
    
}
.mint-tabbar > .mint-tab-item.is-selected{
    background-color: #fff !important;
    color:black;
}
.recommend-text-font{
    font-size: .8rem;
    margin-top: .2rem;
}
.recommend-text-single{
    font-size: .4rem;
    color:#666;
    margin-top: .6rem;
}
.recommend-text{
    font-size: .777777777rem;
    font-weight: 700;
    margin-top: .5rem;
      white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 8rem;
    height: 2rem;

}
.recommend-date{
    font-size: .6777rem;
}
.recommend-item-desc{
        margin-left: .8rem;
    color: #232323;
    padding-top: .00003rem;
}
.recommend-body-img>img{
    width: 4.8rem;height: 6.2rem;
}
.recommend-body-img{
    width: 4.8rem;
    height: 6.2rem;;
}
.recommend-body{
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
}
.recommend-title{
    margin-top: 1.1rem;
    font-size: 1rem;
    font-weight: 700;
}
.recommend-block{
    padding: 0 0.2rem;
}
.vip-block-content-wrap1{
    margin-top: .5rem;
    font-size: .5rem !important;
}
.vip-block-content-wrap1>img{
    width: 4.5rem;
    height: 5.7rem;
}
.vip-block-content-title{
   margin-left: .7rem;
}
.vip-block-content-perch{
    width: 10rem;
}
.grgy{
    color:#666;
    font-size: .1rem;
    margin-left: .2rem;
}
.orange1{
    color:#ff6743 !important;
    margin-left: .3rem;
}
.vip-block-content-wrap>li{
    margin-right: .5rem;
}
.vip-block-content-wrap>li>img{
    width: 100%;height: 100%;
}
.vip-block-content-wrap{
    display: flex;
    width: 9.5rem;
    height: 5.7rem;
    margin-top: .5rem;
}
.vip-block-content>div{
    font-size: .7rem;
    font-weight: 700;
}
.vip-block-content{
    background-color: #f5f5f5;
    padding: .3rem 0.5rem .8rem;
    display: flex;
    justify-content: space-between;
}
.vip-open{
    margin-right: 1.1rem;
}
.vip-logo{
    height: 1rem;
    margin-top: .5rem;
    margin-right: 0.2rem;
}
.vip-left{
    width: 50%;
    height:1.5rem;
    margin-left: 0.8rem;
}
.vip-block{
    width: 100%;
    height: 1.8rem;
    background-image: url("../../assets/vip_bg.png");
    background-size: 100%;
    color:#f0d1b0;
    font-size: .5rem;
    line-height: 1.8rem;
   
}
.hot-demo-width>div{
    font-size: 18px;
    font-weight: 700;
    width: 6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.hot-demo-width>img{
    width: 6rem;
    height: 8rem;
}
.hot-demo-width{
    width: 6.3rem;
    height: 9.5rem;
 padding-right: 0rem;
}
.hot-list{
    margin-top: .4rem;
    display: flex;
}
.hot-img_height{
    height: 100%;
    margin-right: .6rem;
}
.right{
    float: right;
}
.left{
    float: left;
}
.hot-font{
    font-size: 20px;
    font-weight: 700;
    height: 1.3rem;
}
.hot-block{
    padding:1rem 0rem 1.1rem .4rem; 
    height: 100%;
}
.mint-tab-item-label{
    height: 1.3rem;width: 1.3rem;
    text-align: auto !important;
    margin: auto;
    line-height: 1.3rem !important;
    font-size: 0.63rem !important;
}
      .mint-tab-container-wrap{
          display: block !important;
      }       
            
.font-lab-width{
    font-size: 0.4rem;
    text-align: center;
}
.demo-font-width{
    font-size: 0.6rem;
    text-align: center;
    font-weight: bold;
}
.demo2>ul>li{
    width: 4.10rem;
    height: 4.5rem;
    background-color: #ffffff;
    padding: 0.3rem;
}
.demo2>ul>li+li{
    margin-left: 0.44rem;
}
.plus-width{
    width: 80%;
   margin-left: 0.4rem;
}
.orange{
    color:orange
}
.block-lab{
    margin-top: 0.3rem;
    color: #666;
}
.block-title{
    text-align: center;
}
.one-width{
    width: 60%;
    font-size: 0.5rem;
}
.demo2-1-width,.demo2-2-width{
    width: 6.3rem;
    background-color: #ffffff;
    height: 3rem;
    padding: 0.5rem 0.5rem;
}
.demo2-2-width{
    margin-left: 0.46rem;
}
.demo2{
    width: 15rem;
    height: 100%;
    background-color: #f5f5f5;
    box-shadow:0rem 0rem 1rem  #ccc;
    display: flex;
    margin-top: 0.3rem;
}
.cq-width{
    width: 90%;
    margin: 1.3rem 1rem 0.5rem 0.5rem;
}
.demo1>ul>li>img{
    width: 2.1rem;
    height: 2.1rem;
}
.demo1>ul>li>span{
    display: block;
    font-size: 0.6rem;
    text-align: center;
    margin-right: 1rem;
}
#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-bottom: .8rem;
        font-family: Avenir,Helvetica,Arial,sans-serif;
}
.flex{
    display: flex;
}
.just-bettween{
    justify-content: space-between;
}
    *{
        margin: 0;padding: 0;
        list-style: none;
    }
    .mint-swipe img{
        width: 15.9rem !important;
        height: auto !important;
    }
    .home-page{
        width: 100%;
        height: 100%;
    }
    .ml-1{
        margin-left: 0.7rem
    }
    .head{
        display: flex;
        width: 100%;
        height: 1.5rem;
        background-color:rgba(0, 0, 0, 0);
        padding: 0rem 0.5rem;
        position: fixed;
        top: 0;left: 0;
        align-items: center;
        z-index: 10
    }
    .home-address{
        width: 3rem;
        height: 1.5rem;
       border-radius: 1rem;
       background-color: rgba(0, 0, 0, 0.2);
       font-size: 0.7rem;
       color: #fefefe;
       display: flex;
       align-items: center;
       font-weight: bold;
    }
    .address-img{
       background-image: url("../../assets/address.png");
       background-repeat: no-repeat;
       background-size: 100% ;
       width: 1rem;height: 1rem;
       margin-left: 0.1rem;
    }
    .home-search{
        width: 8.8rem;
        height: 1.5rem;
        border-radius: 1rem;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
         align-items: center;
                font-size: 0.7rem;
       color: #fefefe;
    }
    .search-img{
        width: 1rem;height: 1rem;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        margin-top:0.1rem ;
    }
    .headmoney-img{
        width: 1.4rem;
        height: 1.4rem;
    }
    .demo1{
        width: 100%;
        height: 100%;
        padding: 0.5rem 0.4rem 0rem;
        margin-bottom: 0.53rem;
    }
    .demo1>ul{
        width: 100%;
    }
    .demo1>ul>li{
        width: 13rem;
    }
</style>

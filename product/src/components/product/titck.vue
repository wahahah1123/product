<template>
    <div id="#app">
      <div   v-for="(elem,i) of titck" :key="i"> 
        <div class="titck" >
              <!-- 头模糊的图片背景 -->
            <div class="titck-header"></div>
            <!-- 头flex布局-->
            <div class="flex titck-title">
                <i class="icon iconfont icon-left" @click="go"></i>
                    <div class="titck-text"> 演出详情</div>
                <i class="icon iconfont icon-home" @click="go"></i>
            </div>
            <!-- content -->
            <div class="titck-content">
                <div class="titck-img">
                    <img :src="`http://127.0.0.1:3000/`+elem.src" alt="">
                </div>
                <div class="titck-info">
                    <div class="titck-info-text" v-text="elem.jtitle">
            
                    </div>
                    <!-- price -->
                    <div class="titck-info-price flex" v-text="`￥${elem.price}`">
                       
                    </div>
                </div>
            </div>
       </div>  <!--  结束头 -->
      <div style="background-color:#f5f5f5">
            <div class="titck-secondary">    <!--  日期和场地 -->
            <div class="secondary-time">
                <span class="secondary-time-date" v-text="elem.jdate"></span>
                <i class="icon iconfont icon-arrow-right"></i>
            </div>
            <div class="secondary-place" v-text="elem.single">
               
            </div>
        </div>
        <div class="detalis-plus-tips">  <!--卖卡 -->
             <div class="orange-plus-tips">   
                 <div class="orange-plus-tips_name">
                    橙PLUS卡
                 </div>
                 <div class="orange-plus-tips__desc">
                    开通送￥100 最高省149.9元
                 </div>
                 <div class="orange-plus-tips__guide">
                    立即开卡    
                 </div>
                 <i class="icon iconfont icon-arrow-right"></i>
            </div>
        </div>
       <div class="detail__activity-discoun">
          <div class="times-card-benefit-item">
              <span class="times-card-benefit-item__name">欢乐家庭卡PLUS</span>
              <span class="times-card-benefit-item__tips">5:1起兑换</span>
                <i class="icon iconfont icon-arrow-right"></i>
          </div>
       </div>
       <div class="benefit">
          <div class="show-benefit-item">
              <span class="show-benefit-item__name">VIP+</span>
              <span class="show-benefit-item__colon">:</span>
              <span class="show-benefit-item__content">
                  <div class="plus__desc">
                       V+会员享
                       <span class="plus__desc__benefit">国内免邮 + 双倍积分</span>
                       <i class="icon iconfont icon-arrow-right"></i>
                  </div>
              </span>
          </div>
          <div class="show-benefit-item">
               <span class="show-benefit-item__name">入场</span>
              <span class="show-benefit-item__colon">:</span>
              <span class="enter">一人一票，儿童全票，凭票入场</span>
          </div>
       </div>
      </div>
       <div class="footer-tabbar-index1">
           <div class="customer">
  <i class="icon iconfont icon-erji"></i>
  <div>客服</div>
           </div>
          <div class="customer-button" @click="getlogin">
                  选座购买
          </div>
       </div>
    </div>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            titck:[]
        }
    },
    created(){
        var id=this.$route.query.id
      this.axios({
          method:"get",
          url:"/details1?id="+id,
          dataType:"json"
      }).then(result=>{
          this.titck=result.data
      })
    },
    methods:{
        go(){
            this.$router.push("/")
        },
        getlogin(){
            var url="shop"
            this.axios.get(url,
            {
                params:{
                    id:this.titck.id,
                    src:this.titck[0].src,
                    jtitle:this.titck[0].jtitle,
                    jprice:this.titck[0].price
                }
            }).then(result=>{
                console.log(result)
            })
            setTimeout(()=>{
                this.$toast("加入成功")
                this.$router.push("/shop")
            },1000)
        }
    }
}
</script>
<style scoped>
.customer-button{
        width: 100%;
    height: 2rem;
    background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#fefefe,#fefefe);
    background-blend-mode: normal,normal;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-size: .7rem;
    font-weight: 700;
    color: #fefefe;
    text-align: center;
    line-height: 2rem;
}
.customer{
    font-size: .6rem;
    color:#666;
    margin-left: .6rem;
    width: 2.3rem;
    line-height: 1rem;
}
.footer-tabbar-index1 .icon{
    font-size: .7rem;
}
.footer-tabbar-index1{
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
    height: 2rem;
}
.enter{
        font-size: .6rem;
    color: #232323;
    line-height: .64rem;
    padding-top: .02667rem;
    margin-left: .4rem;
    margin-bottom: -.14667rem;
}
.plus__desc>.icon{
    font-size: .6rem;
}
.plus__desc>.icon-arrow-right{
    color:#666;
}
.plus__desc__benefit{
        color: #ff6743;
    padding-left: .16rem;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.plus__desc{
        display: flex;
    height: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .6rem;
    color: #222;
    padding-left: .6rem;
    line-height: .37333rem;
}
.show-benefit-item__content{
        -webkit-box-flex: 1;
    flex-grow: 1;
}
.show-benefit-item__colon{
    font-size: .66em;
    color: #999;
    height: .64rem;
    line-height: .64rem;
}
.show-benefit-item__name{
        font-size: .66rem;
    color: #999;
    height: .64rem;
    line-height: .64rem;
        width: 2rem;
    display: inline-block;
    text-align: justify;
}
.show-benefit-item{
        display: flex;
    padding: .8rem;
    border-bottom: .088rem solid #efefef;
}
.benefit{
    background-color: #ffffff;
    margin-top: .6rem;
}
.times-card-benefit-item>.icon{
    font-size: .7rem;
}
.times-card-benefit-item>.icon-arrow-right{
    color:#666;
    margin-right: .4rem
}
.times-card-benefit-item__tips{
        -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: right;
    font-size: .5rem;
    color: #666;
    display: inline-block;
    height: .32rem;
    line-height: .32rem;
}
.times-card-benefit-item__name{
    display: inline-block;
    font-size: .59rem;
    color: #232323;
    margin-left: .6rem;
}
.times-card-benefit-item{
        display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 2rem;
    background-color: #fefefe;
    padding-right: .4rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
}
.detail__activity-discoun{
    margin-top: .5555rem;
}
.orange-plus-tips>.icon{
    font-size: .7rem;
    margin-right: .4rem;
}
.orange-plus-tips>.icon-arrow-right{
    color:#f5dea9;
}
.orange-plus-tips__guide{
        font-size: .55rem;
    line-height: .42667rem;
    font-weight: 500;
    color: #f5dea9;
    margin-right: .36rem;
}
.orange-plus-tips__desc{
        font-size: .57rem;
    color: #f5dea9;
    margin-left: 3.10667rem;
    white-space: nowrap;
    line-height: .42667rem;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.orange-plus-tips_name{
position: absolute;
    left: .5rem;
    top: 50%;
    font-size: .7rem;
    -webkit-transform: scale(.5) translateY(-50%);
    transform: scale(.5) translateY(-50%);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    background-image: -webkit-gradient(linear,left bottom,left top,from(#f5dea9),to(#f8d583));
    background-image: linear-gradient(0deg,#f5dea9,#f8d583);
    border-radius: .05333rem;
    width: 4.4rem;
    height: 1.5rem;
    text-align: center;
    line-height: 1.5rem
}
.orange-plus-tips{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 2rem;
    background-image: linear-gradient(-4deg,#1e1e1e,#464542);
    border-radius: .13333rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.detalis-plus-tips{
     padding: 0 .6rem .53333rem;
    background-color: #fff;
}
.secondary-place{
    font-size: .8rem;
    font-weight: 700;
    color: #232323;
    margin-top: .6rem;
    margin-right: 1.52rem;
    line-height: .61333rem;
}
.secondary-time>.icon{
    font-size: .7rem;
}
.secondary-time-date{
        display: inline-block;
    font-weight: 700;
    height: .48rem;
    line-height: .48rem;
}
.secondary-time{
        margin-top: .9rem;
    font-size: .8rem;
        align-items: center;
    color: #232323;
}
.titck-secondary{
    width: 15rem;
    padding: 0rem .7rem .8rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.titck-info-price{
   color:#fff;
   font-size: .7rem;
   margin-top: 1.7rem;
   font-weight: 700;
}
.titck-info-text{
    text-align: left;
    width: 9.7rem;
    color:#efefef;
    font-weight: 600;
    font-size: .8rem;
}
.titck-info{
    margin-top: .8rem;margin-left: .5rem;
    min-height: 1.6rem;
}
.titck-img>img{
    width: 4.8rem;height: 6.4rem;
}
.titck-img{
    margin-top: .3rem;
      width: 4.8rem;height: 6.4rem;
}
.titck-content{
    position: absolute;
    top:2rem;
    width: 14.7rem;height: 8rem;
    padding: 0rem .6rem;
    display: flex;
}
.titck-text{
    text-align: center;
    color:#fff;
    font-size: .8rem;
    font-weight: 600;
    margin-left: 5.1rem;
}
.titck-title>.icon-left{
    color:#efefef;
}
.titck-title>.icon-home{
     margin-left: 4.7rem;
     color:#efefef;
}
.titck-title{
    width: 15rem;height: 2rem;
    position: absolute;
    line-height: 2rem;
    padding: 0rem .5rem;
}
.titck-z-index{
    z-index: 999;
}
.titck-header{
    width: 16rem;height: 9rem;
    background-image: url("../../assets/titck-bg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    filter: blur(1rem);
    float: left;
}
.titck{
    width: 17rem;height: 9.7rem;
    overflow: hidden;
}
#app{
       font-family: Avenir,Helvetica,Arial,sans-serif;
}
</style>


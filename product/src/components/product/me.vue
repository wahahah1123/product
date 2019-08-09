<template>
    <div id="app">
        <div class="me-back">
            <div class="me-container">
                <div> <!-- set up the -->
                    <img src="../../assets/set.png" alt="" class="right set-size" @click="click">
                </div>  
             <!-- first -->
                   <div class="me-info-main">
                       <div class="me-info-head">
                           <div class="me-head-pic">
                               <img src="../../assets/head-pic.png" alt="">
                           </div>
                           <div>
                               <div id="deng" class="hide deng">登录</div>
                               <div id="u" class="info-name" v-text="uname"></div>
                               <div class="info-id">ID:{{id}}</div>
                           </div>
                       </div>
                       <div class="info-mian-label">
                           <p class="info-mian-name">普通会员</p>
                       </div>
                       <div class="info-mian-cnt">
                           <!-- 账户 -->
                          <div class="info-mian-cnt-item">
                              <p class="info-main-cnt-item-num">0</p>
                              <p>账户余额</p>
                              <div class="separator"></div>
                          </div>
                         <div class="info-mian-cnt-item">
                              <p class="info-main-cnt-item-num">0</p>
                              <p>积分</p>
                              <div class="separator"></div>
                          </div>
                             <div class="info-mian-cnt-item">
                                <p class="info-main-cnt-item-num">0</p>
                                <p>优惠卷</p>
                                <div class="separator"></div>
                            </div>
                            <div class="info-mian-cnt-item">
                                <p class="info__main__cnt__item__num--no">立即开通</p>
                                <p>橙PLUS卡</p>
                            </div>
                       </div>
                   </div>
                   <div >
                      <!-- vip -->
                        <img src="../../assets/me-vip.png" alt="" class="mine-vip">
                   </div>
                   <!-- seting -->
                   <div class="me-seting" >
                       <div class="seting-item">
                            <img src="../../assets/me-order.png" alt="" class="seting-img">
                          <div> 我的订单</div>
                          
                       </div>
                       <div class="seting-item">
                            <img src="../../assets/me-ticketholder.png" alt="" class="seting-img">
                          <div> 我的票夹</div>
                          
                       </div>
                        <div class="seting-item">
                            <img src="../../assets/me-cardpackage.png" alt="" class="seting-img">
                          <div> 我的卡包</div>
                          
                       </div>
                   </div>
                   <!-- seting2 -->
                   <div class="me-seting" style="margin-top:.5rem;">
                       <div class="seting-item">
                            <img src="../../assets/me-people.png" alt="" class="seting-img">
                          <div> 实名购票人</div>
                          
                       </div>
                       <div class="seting-item">
                            <img src="../../assets/me-address.png" alt="" class="seting-img">
                          <div> 收货地址</div>
                          
                       </div>
                        <div class="seting-item">
                            <img src="../../assets/me-feelback.png" alt="" class="seting-img">
                          <div> 意见反馈</div>
                          
                       </div>
                         <div class="seting-item">
                            <img src="../../assets/me-help.png" alt="" class="seting-img">
                          <div class="active"> 客服帮助</div>
                       </div>
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
         <div style="position:relative" >
               
    <router-link to="/me"  style="
    text-decoration: none; color:black;font-size:.5rem">
        <i class="icon iconfont icon-me" ></i>
    <div style="position: absolute;top:.86rem;left:2.15rem;">我的</div>
    </router-link>
         </div>
      </div> -->
    </div>
</template>
<script>
import { constants } from 'crypto';
export default {
    data(){
        return{
            uname:sessionStorage.getItem("uname"),//this.sessionStorage.getItem("uname"),
            id:parseInt(Math.random()*100000)*6
        }
    },
    created(){
        
    },
    methods:{
        click(){
            sessionStorage.removeItem("uname")
            this.$toast("退出成功")
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
.deng{
         position: absolute;
    top: .33333rem;
    color: #232323;
    font-size: .7rem;
    font-weight: 700;
}
.hide{
    display: none;
}
.active{
        color: #ff6743;
}
.seting-img{
    width: 1.7rem;
    height: 1.7rem;
}
.seting-item{
        width: 25%;
    text-align: center;
    padding: .44rem 0 .53333rem;
    font-size: .52rem;
    color: #666;
}
.me-seting{
   
    height: 3.8rem;
    width: 14.7rem;
     background-color: #fff;
     border-radius: .4rem;
     display: flex;
}
.mine-vip{
    width: 15rem;
    height: 3.6666rem;
}
.info__main__cnt__item__num--no{
        color: #232323;
    font-size: .60667rem;
    margin-bottom: .277rem;
}
.separator{
    position: absolute;
    width: .1rem;
    height: 1rem;
    background: #ebebeb;
    top: .8rem;
    right: 0;
}
.info-main-cnt-item-num{
    color: #ff6743;
    font-size: .88rem;
    margin-bottom: .2rem;
}
.info-mian-cnt-item{
        flex: 1;
    text-align: center;
    position: relative;
    padding: .4rem 0 .52rem;
    color: #666;
    font-weight: 500;
    font-size: .52rem;
}
.info-mian-cnt{
    align-items: center;
    display: flex;
}
.info-mian-name{
        float: right;
    font-size: .60333rem;
    color: #454341;
    font-weight: 700;
    padding: .09333rem .28rem .09333rem .38667rem;
    background: linear-gradient(-45deg,#f5dea9,#f8d583);
    border-radius: .36rem 0 0 .36rem;
}
.info-mian-label{
        margin-top: -.09333rem;
    overflow: hidden;
    height: 1.5rem;
}
.info-name{
        position: absolute;
    top: .33333rem;
    color: #232323;
    font-size: .7rem;
    font-weight: 700;
}
.info-id{
    position: absolute;
    color: #999;
    font-size: .62rem;
    bottom: 0;
}
.me-head-pic{
        display: inline-block;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    border: .02667rem solid #fff;
    margin-top: -.62rem;
    margin-right: .36667rem;
    background: #f5f5f5;
    overflow: hidden;
}
.me-info-head{
        padding: 0 .6rem;
    position: relative;
    width: 100%;height: 2rem;
    display: flex;
}
.me-info-main{
    width: 14.7rem;height: 7rem;
    background-color: #fff;
    border-radius: .3rem;
    margin-top: 2rem;
    box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
}
    .me-container{
        width: 100%;height: 100%;
        padding: .7rem ;
        position: relative;
    }
    .me-back{
        background-image: url("../../assets/me-back.png");
        width: 17rem;height: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        /* background-color: #666; */
    }
    .set-size{
        width: .8rem;height: .8rem;
        position: absolute;
        left:14.6rem;top:1rem;
    }
    .right{
        float: right;
    }
    #app{
            font-family: Avenir,Helvetica,Arial,sans-serif;
            background-color:#f5f5f5;
            height: 26.8rem;
    }
</style>

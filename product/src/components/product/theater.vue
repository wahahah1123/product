<template>
    <div>
            <header class="head_nav">
                <h3 class="head-title">剧院</h3>
            </header>
            <!-- body -->
            <div class="theater-container">
                <div class="theater-info-show">
                    <div class="info-title">
                        <img src="../../assets/theater1.jpg" alt="" class="info-img">
                        <div class="info-font">
                            <div class="info-font1">南山文体中心</div> 
                            <div class="info-font2">215场在售演出</div>
                        </div>
                        <img src="../../assets/eplie.png" alt="" class="right info-img1">
                    </div>
                    <!-- 板块 -->
                    <div style="margin-top:.4rem;">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                                <div class="swiper-slide " v-for="(dis,i) of dis" :key="i">
                                    <div class="theater-show-data">
                                        <p class="show-date" v-text="dis.date"></p>
                                        <span class="dot"></span>
                                    </div>
                                    <div class="theater-img">
                                        <img :src="dis.src" alt="">  
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>

                </div>
                <!-- 2 -->
                <div class="theater-info-show">
                    <div class="info-title">
                        <img src="../../assets/theater2.jpg" alt="" class="info-img">
                        <div class="info-font">
                            <div class="info-font1">石家庄大剧院</div> 
                            <div class="info-font2">49场在售演出</div>
                        </div>
                        <img src="../../assets/eplie.png" alt="" class="right info-img1">
                    </div>
                    <!-- 板块 -->
                    <div style="margin-top:.4rem;">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                                <div class="swiper-slide " v-for="(dis,i) of dis" :key="i">
                                    <div class="theater-show-data">
                                        <p class="show-date" v-text="dis.date"></p>
                                        <span class="dot"></span>
                                    </div>
                                    <div class="theater-img">
                                        <img :src="dis.src" alt="">  
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>

                </div>
                <!-- 3 -->
                <div class="theater-info-show">
                    <div class="info-title">
                        <img src="../../assets/theater.jpg" alt="" class="info-img">
                        <div class="info-font">
                            <div class="info-font1">柳钢文化中心</div> 
                            <div class="info-font2">12场在售演出</div>
                        </div>
                        <img src="../../assets/eplie.png" alt="" class="right info-img1">
                    </div>
                    <!-- 板块 -->
                    <div style="margin-top:.4rem;">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                                <div class="swiper-slide " v-for="(dis,i) of dis" :key="i">
                                    <div class="theater-show-data">
                                        <p class="show-date" v-text="dis.date"></p>
                                        <span class="dot"></span>
                                    </div>
                                    <div class="theater-img">
                                        <img :src="dis.src" alt="">  
                                    </div>
                                </div>
                            </div>
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
         <div style="position:relative" @click="dev">
               
    <router-link to="/me"  style="
    text-decoration: none; color:black;font-size:.5rem">
        <i class="icon iconfont icon-me" ></i>
    <div style="position: absolute;top:.86rem;left:2.15rem;">我的</div>
    </router-link>
         </div>
      </div>
    </div>
    
</template>
<script>
import "../../assets/swiper.min.css";
export default {
    data(){
        return{
            dis:[
                {date:"8月02日",src:require("../../assets/t1.jpg")},
                {date:"8月03日",src:require("../../assets/t2.jpg")},
                {date:"8月04日",src:require("../../assets/t3.jpg")},
                {date:"8月05日",src:require("../../assets/t4.jpg")},
                {date:"8月06日",src:require("../../assets/t5.jpg")},
                {date:"8月07日",src:require("../../assets/t6.jpg")},
            ]
        }
    },mounted(){
         new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 0,
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
        }
    }
}
</script>
<style scoped>
.theater-img>img{
    width: 100%;
}
.theater-img{
    width: 4.1rem;
}
.dot{
        position: absolute;
    left: 50%;
    bottom: -.23999rem;
    display: inline-block;
    width: .28667rem;
    height: .28667rem;
    margin-left: -.18667rem;
    border-radius: 50%;
    background-color: #ccc;
}
.show-date{
    color: #b3b3b3;
    font-size: .5833rem;
    padding-right: .18667rem;
    text-align: center;
    height: .33333rem;
    margin-bottom: .3rem;
}
.theater-show-data{
    position: relative;
    width: 4.59rem;
    border-bottom: .2rem solid #ebebeb;
    border-radius: .02667rem;
    padding-bottom: .38667rem;
    margin-bottom: .46667rem;
    margin-right: 0rem !important;
}
.info-img1{
    width: .7rem;height: .7rem;
  margin-left: 6rem;
  margin-top: 1rem;
}
.right{
    float: right;
}
.info-font2{
    font-size: .5rem;
    color:#999;
     margin-top: .277777rem
    ;font-weight: 550;
}
.info-font1{
    font-size: .7rem;
    font-weight: 700;
    margin-top: .3rem
}
.info-font{
    margin-left: .5rem;
}
.info-img{
    width: 2.2rem;
    height: 2.2rem;
    border-radius: .3rem;
}
.info-title{
    display: flex;
    width: 100%;
    height: 2.2rem;
}
.theater-info-show{
    height: 10rem;
    width: 13.7rem;
        box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
    border-radius: .10667rem;
    border: 1px solid #ebebeb;
    margin-bottom: .4rem;
    padding: .54667rem .64rem .56rem;
    margin-top: .8rem;
}
.theater-container{
    width: 100%;
    height: 100%;
    padding: 0rem .5rem;
       background-color: #fdfdfd;
    padding-top: 1.59333rem;
    padding-bottom: 1.65333rem;
}
    .head_nav{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.77333rem;
    line-height: 1.17333rem;
    text-align: center;
    border-bottom: 1px solid #ebebeb;
    background-color: #fefefe;
    z-index: 100;
    line-height: 1.77333rem;
    }
   .head-title{
        font-size: .8rem;
    font-weight: 400;
    color: #232323;
    padding: 0 1.33333rem;
    }
    #app{
              font-family: Avenir,Helvetica,Arial,sans-serif;
    }
</style>


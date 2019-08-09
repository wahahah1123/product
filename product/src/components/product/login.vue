<template>
    <div id="app">
       <!-- exit -->
       <div class="nav-bar">
          <i class="icon iconfont icon-left" @click="exit"></i>
       </div>
       <!-- main -->
       <div class="login-main">
           <div class="login-wrap">
               <div class="login-title">欢迎来到聚橙网</div>
           </div>
           <!-- tel注册 -->
           <div id="tel" >
               <div class="login-area">
                   <ul class="lg-list">
                       <li class="lg-item">
                           <span class="tel">+86</span>
                           <input type="text" placeholder="请输入手机号" class="lg-input">
                       </li>
                   </ul>
                   <p class="tip">未注册手机号验证成功后自动创建账户</p>
               </div>
               <!-- 收取验证码 -->
               <div class="login-btn">
                   <div class="btn">获取验证码</div>
               </div>
               <div class="login-toggle">
                   <span class="left" @click="toggle2()">用户注册</span>
                   <span class="right" @click="toggle()">密码登录</span>
               </div>
           </div>
           <!-- 密码登录 -->
           <div id="count" class="hide">
               <div class="login-area">
                   <ul class="lg-list">
                       <li class="lg-item">
                           <input type="text" :placeholder="unamehoder" v-model="uname" class="lg-input">
                       </li>
                         <li class="lg-item" style="margin-top:.7rem;">
                           <input type="password" :placeholder="upwdhoder" v-model="upwd" class="lg-input">
                       </li>
                   </ul>
               </div>
               <!-- 登录 -->
               <div  class="login-toggle">
                    <div class="btn" @click="login()">登录</div>
               </div>
                <div class="login-toggle">
                   <span class="left">忘记密码</span>
                   <span class="right" @click="toggle1()">验证码登录</span>
               </div>
           </div>
           <!-- 注册 -->
           <div id="reg" class="hide">
               <div class="login-area">
                   <ul class="lg-list">
                         <li class="lg-item">
                           <input type="text" :placeholder="unamehoder" v-model="uname" class="lg-input">
                         <li class="lg-item" style="margin-top:.7rem;">
                           <input type="password" :placeholder="upwdhoder" v-model="upwd" class="lg-input">
                       </li>
                    </ul>
            </div>
              <!-- 注册 -->
            <div  class="login-toggle">
                    <div class="btn" @click="reg()">注册</div>
               </div>
           </div>
         
       </div>
       <div class="footer-wrap">
               <div class="footer-title">
                   <p class="footer-title-text">其他登录方式</p>
               </div>
        </div>
        <div class="footer-inner">
            <div class="item">
                <i class="icon iconfont icon-QQ"></i>
            </div>
            <div class="item">
                <i class="icon iconfont icon-xinlang-copy1 "></i>
            </div>
        </div>
    </div>
</template>
<script>
import { constants } from 'crypto';
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            unamehoder:"请输入手机号/邮箱",
            upwdhoder:"请输入密码",
            uname:"",
            upwd:""
        }
    },
    methods:{
        toggle(){
            var tel=document.getElementById("tel");
          var count=document.getElementById("count");
          tel.style.display="none"
          count.style.display="block"
        },
        toggle1(){
              var tel=document.getElementById("tel");
          var count=document.getElementById("count");
         tel.style.display="block"
          count.style.display="none"
        },
        toggle2(){
            var reg=document.getElementById("reg");
             var tel=document.getElementById("tel");
                 tel.style.display="none"
          reg.style.display="block"
        },
        login(){
            var u=this.uname
             sessionStorage.setItem("uname",u)
            var p=this.upwd
            var reg = /^[a-z0-9_]{3,12}$/i;
                if(!reg.test(u)){
                this.$toast("用户名格式不正确");
                return;
                }
            if(!reg.test(p)){
                this.$toast("密码格式不正确");
                return;
            }
            // axios获取
            var url="login"
            var obj={uname:u,upwd:p}
             this.axios.get(url,{params:obj}).then(
                    result=>{
                    if(result.data.code > 0){
                      this.$messagebox("登录成功")
                      this.$router.push("/me")
                    }else{
                        this.$messagebox("提示","用户名或密码有误");
                    }
                })
        },
        exit(){
            this.$router.push("/")
        },
        reg(){
            var u=this.uname
            var p=this.upwd
            var obj={uname:u,upwd:p}
              var url="reg"
             this.axios.get(url,{params:obj}).then(
                    result=>{
                    if(result.data.code > 0){
                      this.$messagebox("注册成功")
                      setTimeout(()=>{
  this.$router.go(0)
                      },1000)
               
                    }else{
                        this.$messagebox("提示","格式不正确");
                    }
                })
        }
    },
}
</script>
<style scoped>
.item>.icon{
    font-size: 1.5rem;
}
.icon-xinlang-copy1{
    color:red;
}
.img-meta{
        display: block;
    height: 1.536rem;
}
.item{
        flex: 1;
    justify-content: center;
    text-align: center;
}
.icon-QQ{
    color:skyblue;
    font-size: 2rem;
}
.footer-inner{
    display: flex;
    width: 10rem;
    padding: 0rem 3rem;
}
.footer-title-text{
    position: absolute;
    left: 27%;
    top:-.5666rem;
    padding: 0 0.42667rem;
    font-size: 0.55467rem;
    color: #999999;
    height: 1.06667rem;
    line-height: 1.06667rem;
    background-color: #FEFEFE;
}
.footer-title{
        position: relative;
    height: 1.32267rem;
    border-top: 1px solid #999;
}
.footer-wrap{
        padding-left: 3.5rem;
    padding-right: 2.88667rem;
    width: 9rem;
    position: relative;
}
.hide{
    display: none
}
.login-toggle{
        margin-top: 0.85333rem;
        font-size: .63rem;
         height: 3rem;
}
.btn{
    width: 100%;
    height: 2.13333rem;
    line-height: 2.13333rem;
    font-size: 0.768rem;
    color: #fefefe;
    border-radius: 1.28rem;
    background-color: #ebebeb;
    border: 0;
    text-align: center;
    outline: none;
}
.login-btn{
        padding-top: 1.92rem;
}
.tip{
        height: 0.512rem;
    font-size: 0.512rem;
    line-height: 0.512rem;
    color: #232323;
}
.lg-input{
        width: 9.6rem;
    height: 0.85333rem;
    font-size: 0.68267rem;
    border: 0;
    background-color: #fdfdfd;
    outline: none;
    margin-left: .2rem;
}
.tel{
        color: #ff6743;  
}
.lg-item{
        list-style: none;
    width: 100%;
    border-bottom: 0.02133rem solid #666;
    font-size: 0.68267rem;
    color: #232323;
    line-height: 0.85333rem;
    padding-bottom: 0.74667rem;
}
.lg-list{
        padding-bottom: 0.64rem;
}
.login-area{
        padding-top: 3.2rem;
}
.login-title{
    text-align: center;
    height: 1.024rem;
    font-size: 1.06667rem;
    font-weight: 700;
    font-stretch: normal;
    line-height: 1.024rem;
    color: #232323;
}
.login-main{
    position: relative;
    padding: 1.87733rem 1.36533rem 0;
    height: 16.41867rem;
}
.icon{
    font-size: .9rem;
}
.nav-bar{
    width: 14.6rem;height: 2rem;
    padding: 0rem .7rem;
    margin-top: .4rem;
}
    #app{
        width: 16rem;height: 26.7rem;
        background-image: url("../../assets/login_bg.png");
        background-repeat: no-repeat;
        background-size: 100%;
    }
</style>



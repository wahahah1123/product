<template>
    <div id="app">
            <header class="head_nav">
                <i class="icon iconfont icon-left" @click="a"></i>
                <h3 class="head-title">票夹</h3>
            </header>
            <!-- 票夹 -->
            <div class="shop">
                <div class="shop-container" v-for="(elem,i) of list" :key="i">
                    <!-- image -->
                    <div class="shop-image">
                        <img :src="`http://127.0.0.1:3000/`+elem.src" alt="" class="shop-img">
                    </div>
                    <!-- 文字加价格 -->
                    <div class="shop-text">
                        <!-- 文字 -->
                        <div class="shop-txt" v-text="elem.jtitle">
                            
                        </div>
                     
                        <div class="shop-k">

                        </div>
                        <div class="flex">
                                <div class="shop-price" v-text="`￥${Number(elem.jprice)}`"></div>
                                <i class="icon iconfont icon-x " @click="d"></i>
                        </div>
  
                      
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        var url="getshop"
        this.axios.get(url).then(result=>{
            this.list=result.data
        })
    },
    methods:{
        a(){
            this.$router.push("/")
        },
        d(){
            var url="delete"
            this.axios.get(url,{params:{id:this.list[0].id}}).then(result=>{
            })
           this.$router.go(0)
        }
    }
}
</script>

<style scoped>
.flex .icon{
    font-size: .4rem;
    position: absolute;
    left:14rem;
}
.shop-price{
    width: 7rem;
}

.shop-k{
    height: 1.8rem;
}
.shop-txt{
    font-size: .7rem;
    color: black;
    font-weight: 600;
}
.shop-text{
    margin-left: 0.8rem;
    width: 8rem;
    max-height: 3rem;
}
.shop-img{
    width: 100%;height: 100%;    
}
.shop-image{
    width: 4.5rem;
    height: 5.7rem;
}
.shop-container{
    padding: 0rem .7rem;
    display: flex;
    margin-top: .5rem;
}
.shop{
    width: 100%;
    height: 100%;
    margin-top: 2rem
}
.head_nav{
        position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.77333rem;
    line-height: 1.17333rem;
    border-bottom: 1px solid #ebebeb;
    background-color: #fefefe;
    z-index: 100;
    line-height: 1.77333rem;
    display: flex;
}
.head-title{
            font-size: .8rem;
    font-weight: 400;
    color: #232323;
    padding: 0 1.33333rem;
    margin-left: 5rem
}
</style>

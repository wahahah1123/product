(function(){
    // 页头
    $.ajax({
        url:'head.html',
        type:'get',
        success:function(result){
         
            $(result).replaceAll('#header')
            $("<link>").attr({ rel: "stylesheet",type: "text/css",
            href: "./css/head.css"
            })
            .appendTo("head");
            $("<link>")
            var uname=sessionStorage.getItem("uname")
            var a=document.querySelector(".tttt>#logint")
           a.innerHTML=`欢迎您 ${uname}`;
           var btn1=document.querySelector(".flex>#btn1")
           btn1.onclick= function(){
               btn1.style.display="none"
               a.innerHTML="登录"
               sessionStorage.clear()
           }
           if(uname==null){
               a.innerHTML="登录"
               btn1.style.display="none"
           }

        }

    })
})()




$("#text").click(function(){
    $("#dx").css("display","block")
    $("#zh").css("dispaly","none")
})
$("#pass").click(function(){
    $("#dx").css("display","none")
    $("#zh").css("dispaly","block")
})
$("#yz").click(function(){
    $(".form-message").css("display","block")
})

var uname=document.getElementById("uname")
var upwd=document.getElementById("upwd")
var valit=document.getElementById("valit")
console.log(valit)
function vali(){
    if(uname.value.length==0){
        valit.innerHTML="请请输入账号"
    }else{
        valit.innerHTML=""
    }
}
$("#btn").click(function(){
    var $uname=$("#uname").val()
    sessionStorage.setItem("uname",$uname)
    var $upwd=$("#upwd").val()
    console.log($uname)
    console.log($upwd)
        $.ajax({
            url:"http://127.0.0.1:3000/login",
            type:"post",
            data:`uname=${$uname}&upwd=${$upwd}`,
            // data:{uname:$uname,upwd:$upwd},
            dataType:"json",
            success:function(result){
                if(result==0){
                    alert("账号密码错误")
                }else{
                    alert("登录成功,一秒后跳转")
                    setTimeout(function(){
                        location.href="http://127.0.0.1:5501/public/body.html"
                    },200)
                }
            }
        })
})



        var i=0;
        var LIWIDTH=1920;
        var DURATION=500;
        var LICOUNT=4;
        var ulImgs=document.getElementById("ul-imgs");
        var ulIdxs=document.getElementById("ul-idxs");
        var lis=ulIdxs.children;
        function moveTo(to){
          if(to==undefined){
            to=i+1;
          }
          if(i==0){
            if(to>i){
              ulImgs.className="transition";
            }else{
              ulImgs.className="";
              ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
              setTimeout(function(){
                moveTo(LICOUNT-1);
              },100);
              return;
            }
          }
          i=to;
          ulImgs.style.marginLeft=-i*LIWIDTH+"px";
          for(var li of lis){
            li.className=""
          }
          //console.log(i);
          if(i==LICOUNT){
            i=0;
            setTimeout(function(){
              ulImgs.className="";
              ulImgs.style.marginLeft=0;
            },DURATION)
          }
          lis[i].className="active";
        }
    
      
        var btnLeft=document.getElementById("btn-left");
        var btnRight=document.getElementById("btn-right");
        var canClick=true;
        btnRight.onclick=function(){
          move(1)
        }
        function move(n){
          if(canClick){
          //  console.log(i+n);
            moveTo(i+n);
            canClick=false;
            setTimeout(function(){
              canClick=true;
            },DURATION+100);
          }
        }
        btnLeft.onclick=function(){
          move(-1);
        }
      
        var interval=3000;
        var timer=setInterval(function(){
          moveTo()
        },3000);
        var banner=document.getElementById("banner");
        banner.onmouseover=function(){
          clearInterval(timer);
        }
        banner.onmouseout=function(){
          timer=setInterval(function(){
            moveTo()
          },3000);
        }
    
        var ulIdxs=document.getElementById("ul-idxs");
        var canClick=true;
        ulIdxs.onclick=function(e){
          if(canClick){
            var li=e.target;
            if(li.nodeName=="LI"){
              if(li.className!=="active"){
                for(var i=0;i<lis.length;i++){
                  if(lis[i]==li){
                    break;
                  }
                }
                moveTo(i);
                setTimeout(function(){
                  canClick=true;
                },DURATION);
              }
            }
          }
        }
     /*末尾的轮播*/ 
        function parent(){
          var a=0
          var width=305
          return function(btn,){
              //console.log(btn)
              //     a+=1
              //     if(a==4){
              //     $('#right').css('pointer-events','none')
              // }
    
            if(a>-4){
              if(btn=="right"){
                  a--
              }
            }
                  if(a<0){
                      if(btn=="left"){
                  a++
              }
          }
              
            
               console.log(a)
              $("#set").css("transform",`translateX(${a*width}px`)
              // console.log(a*width)
          }
      }
     var  add=parent() 
   $("#right").click((e)=>{
      e.stopPropagation()
  
      
          add(e.target.id);
   })
  $("#left").click((e)=>{
      e.stopPropagation()
          add(e.target.id);
  })
  /*动*/ 
  ddd=0 
  aa=1
  setInterval(function(){
    var width=305;
    ddd+=width*aa
    $("#set").css("transform",`translateX(${-ddd}px`)/*-值*/ 
    // console.log(ddd)
    if(ddd>915){
      aa=-1
    }
    if(ddd<=0){
      aa=1
    }
   },2000)
//城市轮播


function leave(){
  var divwidth=70
  var c=0
  return function(btn){
    $("#divs").css("margin-left",`-${c*divwidth}px`)
    if(btn=="imgleft"){
      c--
    }
    if(btn=="imgright"){
      c++
    }
    if(c>=3){
      c=0
    }
    if(c<0){
      c=2
    }
  }
}
var an=leave()
$("#imgright").click(function(e){
  e.stopPropagation()
  an(e.target.id)
})
$("#imgleft").click(function(e){
  e.stopPropagation()
  an(e.target.id)
})
$("#music").mouseenter(function(){
  $("#app").css("display","block")
  $("#imgleft").css("display","block")
  $("#imgright").css("display","block")
})
$("#music").mouseleave(function(){
  $("#app").css("display","none")
  $("#imgleft").css("display","none")
  $("#imgright").css("display","none")
})
function leave1(){
  var divwidth=70
  var c=0
  return function(btn1){
    $("#divss").css("margin-left",`-${c*divwidth}px`)
   
    if(btn1=="imgleft1"){
      c--
    }
    if(btn1=="imgright1"){
      c++
    }
    if(c>=3){
      c=0
    }
    if(c<0){
      c=2
    }
  }
}
var an1=leave1()
$("#imgright1").click(function(e){
  e.stopPropagation()
  an1(e.target.id)
})
$("#imgleft1").click(function(e){
  e.stopPropagation()
  an1(e.target.id)
})
$("#music1").mouseenter(function(){
  $("#app1").css("display","block")
  $("divss").css("display","block")
  $("#imgleft1").css("display","block")
  $("#imgright1").css("display","block")
  $("#sex1").css("display","none")
})
$("#music1").mouseleave(function(){
  $("#app1").css("display","none")
  $("divss").css("display","none")
  $("#imgleft1").css("display","none")
  $("#imgright1").css("display","none")
  $("#sex1").css("display","block")
})
$("#music_one").mouseenter(function(){
  $("#app1").css("display","block")
  $("divss").css("display","block")
  $("#imgleft1").css("display","block")
  $("#imgright1").css("display","block")
  $("#sex1").css("display","none")
})
$("#music_one").mouseleave(function(){
  $("#app1").css("display","none")
  $("divss").css("display","none")
  $("#imgleft1").css("display","none")
  $("#imgright1").css("display","none")
  $("#sex1").css("display","block")
})


function leave2(){
  var divwidth=70
  var c=0
  return function(btn2){
    $("#divss1").css("margin-left",`-${c*divwidth}px`)
   
    if(btn2=="imgleft2"){
      c--
    }
    if(btn2=="imgright2"){
      c++
    }
    if(c>=3){
      c=0
    }
    if(c<0){
      c=2
    }
  }
}
var an2=leave2()
$("#imgright2").click(function(e){
  e.stopPropagation()
  an2(e.target.id)
})
$("#imgleft2").click(function(e){
  e.stopPropagation()
  an2(e.target.id)
})
$("#music2").mouseenter(function(){
  
  $("#app2").css("display","block")
  $("#imgleft2").css("display","block")
  $("#imgright2").css("display","block")
  

})
$("#music2").mouseleave(function(){
  $("#app2").css("display","none")
  $("#imgleft2").css("display","none")
  $("#imgright2").css("display","none")
 
})
$("#zhongxiaojie").mouseenter(function(){
  $("#app2").css("display","block")
  $("#imgleft2").css("display","block")
  $("#imgright2").css("display","block")
})
$("#zhongxiaojie").mouseleave(function(){
  $("#app2").css("display","none")
  $("#imgleft2").css("display","none")
  $("#imgright2").css("display","none")
})

function leave3(){
  var divwidth=70
  var c=0
  return function(btn2){
    $("#divss2").css("margin-left",`-${c*divwidth}px`)
   
    if(btn2=="imgleft3"){
      c--
    }
    if(btn2=="imgright3"){
      c++
    }
    if(c>=3){
      c=0
    }
    if(c<0){
      c=2
    }
  }
}
var an3=leave3()
$("#imgright3").click(function(e){
  e.stopPropagation()
  an3(e.target.id)
})
$("#imgleft3").click(function(e){
  e.stopPropagation()
  an3(e.target.id)
})
$("#maisimilan").mouseenter(function(){
  $("#app3").css("display","block")
  $("#imgleft3").css("display","block")
  $("#imgright3").css("display","block")
})
$("#maisimilan").mouseleave(function(){
  $("#app3").css("display","none")
  $("#imgleft3").css("display","none")
  $("#imgright3").css("display","none")
})
$("#music_two").mouseenter(function(){
  $("#app3").css("display","block")
  $("#imgleft3").css("display","block")
  $("#imgright3").css("display","block")
})
$("#music_two").mouseleave(function(){
  $("#app3").css("display","none")
  $("#imgleft3").css("display","none")
  $("#imgright3").css("display","none")
})
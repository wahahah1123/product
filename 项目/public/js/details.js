

    
        $(".act_main_buttom>ul>li").click(function(){
            $(this).children().addClass("active")
            $(this).siblings().children().removeClass("active")
            $(".act_main_buttom>ul>li:contains(上一页)").attr("data-p",`${$(this).attr("data-p")-1}`)
            $(".act_main_buttom>ul>li:contains(下一页)").attr("data-p",`${parseInt($(this).attr("data-p"))+1}`)
            $("#appen").html("")
            var page=parseInt($(this).attr("data-p")) 
            var count=parseInt($(this).attr("data-c")) 
            if(page<=0)page=1
            if(page>=8)page=8
            $.ajax({
                url:'http://127.0.0.1:3000/details',
                type:'get',
                data:{page,count},
                dataType:'json'
            }).then(function(result){
                for(var i in result){
                    var html=`
                    <div class="secc">
                    <div class="d-flex">
                        <div>
                            <img src="http://127.0.0.1:3000/${result[i].img_url}" class="wilie_width">
                        </div>
                        <div class="ml-5">
                            <a href="http://127.0.0.1:5501/public/details1.html?id=${i}" class="title">
                               ${result[i].title}
                            </a>
                            <div class="line"></div>
                            <p class="desc">
                            ${result[i].test}
            <a href="javascript:;">阅读全文&gt;&gt;</a>
                            </p>
                            <div class="tail">
                            <span class="mr-3">2019.05.12</span>
                            <span id="cl">阅读量</span><span id="add" class="mr-3"></span>
                            </div>
                        </div>
                    </div>
                </div>
                    `
                $('#appen').append(html);
                // $(`<link sel="stylesheet" href="./css/head.css">`).appendTo('head');
                }
            })
        })
$(window).ready(function(){
        var page=1
        var count=8
        $.ajax({
            url:'http://127.0.0.1:3000/details',
            type:'get',
            data:{page,count},
            dataType:'json'
        }).then(function(result){
            for(var i in result){
                var html=`
                <div class="secc">
                <div class="d-flex">
                    <div>
                        <img src="http://127.0.0.1:3000/${result[i].img_url}" class="wilie_width">
                    </div>
                    <div class="ml-5">
                        <a href="http://127.0.0.1:5501/public/details1.html?id=${i}" class="title">
                           ${result[i].title}
                        </a>
                        <div class="line"></div>
                        <p class="desc">
                        ${result[i].test}
        <a href="javascript:;">阅读全文&gt;&gt;</a>
                        </p>
                        <div class="tail">
                        <span class="mr-3">2019.05.12</span>
                        <span id="cl">阅读量</span><span id="add" class="mr-3"></span>
                        </div>
                    </div>
                </div>
            </div>
                `
            $('#appen').append(html);
            // $(`<link sel="stylesheet" href="./css/head.css">`).appendTo('head');
            }
        })
    
})
       


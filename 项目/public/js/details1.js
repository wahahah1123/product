var id=location.search.split('=')[1]
console.log(id);
(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/details1",
        type:"get",
        data:{id},
        dataType:"json"
    }).then(function(result){
        console.log(result);
        for (var i=0;i<result.length;i++){
            var html=`
            <div class="new_header">
            <div class="content">
                <div class="new_title">
                    <div class="title">
                       ${result[i].title}
                     </div>
                     <div class="line"></div>
                     <div class="tail">
                         <span class="time">2018.08.02 14:15</span>
                         |
                         <span class="num">浏览（1470）</span>
                     </div>
                </div>
            </div>
        </div>
      
        <div class="new-content">
            <div class="content">
                <div class="desc">
                     <div class="test">
               ${result[i].test} 
                    </div>
                    <div class="mt-3">
                    <img src="http://127.0.0.1:3000/${result[i].pic}" class="wilie_width">
                    </div> 
                    <div class="pd mt-3">
               ${result[i].pd}
                    </div> 
                </div>
            </div>
        </div>
            `
            $("#details").append(html)
        }
    })
})()
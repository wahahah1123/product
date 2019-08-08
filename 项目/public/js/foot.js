(function(){
    // 页头
    $.ajax({
        url:'footer.html',
        type:'get',
        success:function(result){
        
            $(result).replaceAll('#footer')
            $("<link>").attr({ rel: "stylesheet",type: "text/css",href:"./css/foot.css"})
                    .appendTo("head");
        }
    })
})()
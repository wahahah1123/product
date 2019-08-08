(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/artists",
        type:"get",
        dataType:"json"
    }).then(function(result){
        for(var i in result){
            var html=`
           
                <li class="artists_img mr-3" >
                    <img src="http://127.0.0.1:3000/${result[i].img_url}" class="artists_width">
                    <p class="lit">${result[i].lit}</p>
                </li>
       
            `
            $('#arr').append(html);
        }
    })
})()
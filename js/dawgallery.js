$(document).ready(function(){

    $.get("images/images.php.txt",function(data, status){

        var files = data.split('\n');
        for(var line = 0; line < files.length; line++){
            console.log(files[line]);
            $("#thumbs").append("<li><img src=\"images/thumbs/" + files[line] + "\"></li>");
        }

        initThumbs();
        botoneraDetail();
    });


});


function initThumbs(){
    $("#thumbs li").hover(function(){
        var file =  $(this).find("img").attr( "src");
        $(this).css( "opacity", "0.5"	);
        $("h1").html( file);
        $(this).addClass( "transition"	);
    });

    $("#thumbs li").mouseleave(function(){
        $(this).css( "opacity", "1"	);
        $(this).removeClass( "transition"	);
    });

    $("#thumbs li img ").click(function(){
        var pathimg =   $(this).attr("src");
        var nameimg = pathimg.split('/').pop();

        $("h1.imgname").html(nameimg);
        $("#thumbs .selected").removeClass("selected");
        $(this).addClass("selected");
        $("#picture").show();
    });
}


function botoneraDetail(){
    $("#picture a ").click(function(event){
        event.preventDefault();
        return false;
    });

    $("#picture .gallery-button-next ").on("click",function(){
        $(".selected").next().trigger("click");
    });

    $("#picture .gallery-button-close ").click(function(){
        $("#picture ").hide();
        $("#thumbs .selected").removeClass("selected");
    });
}
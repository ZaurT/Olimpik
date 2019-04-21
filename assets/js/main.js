$(document).ready(function(){
    var activeClass = "active";
    var angle = 0;

    $("#plateHolder .icons img").click(function(){
        var imgId = $(this).attr("id");
        
        animation();
        $("#plateHolder .icons img").removeClass(activeClass);
        $(this).addClass(activeClass);
        $("#whyUs [data-target*='data']").removeClass(activeClass);
        $("#whyUs [data-target='"+imgId+"']").addClass(activeClass);
        
    });


    $("#whyUs [data-target*='data']").click(function(){
        var imgId = $(this).attr("data-target");
        
        animation();
        $("#whyUs [data-target*='data']").removeClass(activeClass);
        $(this).addClass(activeClass);
        $("#plateHolder .icons img").removeClass(activeClass);
        $("#"+imgId).addClass(activeClass);   
    });

    function animation(){
        $("#whyUs").addClass(activeClass);
        $("#plateHolder h1").addClass("hidden");
        angle+=20;
        $("#plateHolder>img").css("transform","rotate("+angle+"deg)");
    }
});
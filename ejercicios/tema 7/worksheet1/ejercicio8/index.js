$(document).ready(function(){
    $("button").click(function(){
        $("p").css("font-family", "Arial");
        $("h1").css("font-family", "Arial");
    });

    $("h1").click(function(){
        $(this).siblings('p:first').toggle()
    });

    $("p").mouseover(function(){
        $("p").css("backgroundColor", "blue");
    });    

    $("p").mouseout(function(){
        $("p").css("backgroundColor", "white");
    }); 
});


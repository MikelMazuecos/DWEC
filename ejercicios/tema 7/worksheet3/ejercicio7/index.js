$(document).ready(function(){
    $('#inicia').click(function(){
        $("img").animate({
            opacity: .5,
            height: "50%"
        })

        $("img").animate({
            width: '300px',
            height: '300px'
        })

        $("img").animate({
            marginLeft: "9in"
        })

        $("img").animate({
            marginTop: "2in",
            opacity: 1,
            height: '400px',
            width: '400px'
        })
    })
    $('#acaba').click(function(){
        $('img').stop(true,true)
    })
});
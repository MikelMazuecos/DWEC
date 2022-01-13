$(document).ready(function(){
    $('button').eq(0).click(function(){
        $('div').eq(0).hide().fadeIn('slow')
    })

    $('button').eq(1).click(function(){
        $('div').eq(1).hide().fadeIn('fast')
    })

    $('button').eq(2).click(function(){
        $('div').eq(2).hide().fadeIn(800)
    })

    $('button').eq(3).click(function(){
        $('div').eq(3).hide().fadeIn(2000)
    })

    $('button').eq(4).click(function(){
        $('div').eq(4).hide().fadeIn(4000)
    })
});
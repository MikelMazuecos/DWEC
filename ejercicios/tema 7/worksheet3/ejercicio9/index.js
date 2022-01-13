$(document).ready(function(){
    $('button').eq(0).click(function(){
        $('div').css('width','40px')
        $('div').css('height','40px')
        $('div').css('backgroundColor','black')

        $('div').animate({
            marginLeft: '200px',
        },1500, function() {
            $('div').css('backgroundColor','blue')
          }
        )

        $('div').animate({
            marginTop: '-300px',
        },2000)
    })
})

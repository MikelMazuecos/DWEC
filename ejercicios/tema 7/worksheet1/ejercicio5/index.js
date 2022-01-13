//selecciona el primer elemento de la lista y ocultalo

$(document).ready(function(){
    $("button").click(function(){
      $("ol li:first-child").hide();
    });
});
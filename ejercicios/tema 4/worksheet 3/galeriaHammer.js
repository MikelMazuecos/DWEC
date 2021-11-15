var num= 2
var imagen;
function anterior(){
    if(num>1){
    num -=1
    document.getElementById("miimagen").src= num+".jpg";
    }
}
function siguiente(){
    if(num<3){
    num+=1
    document.getElementById("miimagen").src= num+".jpg";
    }
}

function inicia(){
    imagen = document.getElementById("miimagen")
    var mc = new Hammer(imagen);
    mc.on("panleft",siguiente);
    mc.on("panright",anterior);

document.getElementById("flechaizquierda").addEventListener("click", anterior);
document.getElementById("flechaderecha").addEventListener("click", siguiente);
}

window.addEventListener('load',inicia);
var num= 2
function izquierda(){
    if(num>1){
    num -=1
    document.getElementById("imagen").src= num+".jpg";
    document.getElementById("numeracion").innerHTML=num+"/3";
    }
    else{
        num = 3
        document.getElementById("imagen").src= num+".jpg";
        document.getElementById("numeracion").innerHTML=num+"/3";
    }
}
function derecha(){
    if(num<3){
    num+=1
    document.getElementById("imagen").src= num+".jpg";
    document.getElementById("numeracion").innerHTML=num+"/3";
    }
    else{
        num = 1
        document.getElementById("imagen").src= num+".jpg";
        document.getElementById("numeracion").innerHTML=num+"/3";
    }

}

function inicia(){
document.getElementById("numeracion").innerHTML=num+"/3";
document.getElementById("flechaizquierda").addEventListener("click", izquierda);
document.getElementById("flechaderecha").addEventListener("click", derecha);

}

window.addEventListener('load',inicia);
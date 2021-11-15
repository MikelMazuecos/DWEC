var num= 2
function myFunction1(){
    if(num>1){
    num -=1
    document.getElementById("miimagen").src= num+".jpg";
    }
}
function myFunction2(){
    if(num<3){
    num+=1
    document.getElementById("miimagen").src= num+".jpg";
    }
}

function inicia(){
document.getElementById("flechaizquierda").addEventListener("click", myFunction1);
document.getElementById("flechaderecha").addEventListener("click", myFunction2);
}

window.addEventListener('load',inicia);
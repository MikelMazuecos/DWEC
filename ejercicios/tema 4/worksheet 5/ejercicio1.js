function mayus(string) {
    return string.replace(/A-Z{1}/);
  }

function caracter(string){
    return string.replace(/!@#$%^&/);
}

function email(string){
    return string.replace();
}

function tarjeta(string){
    return string.replace();
}

function caracteres(string){
    return string.replace();
}

function digito(string){
    return string.replace();
}


function inicia(){
    document.getElementById('mayus',mayus)
    document.getElementById('caracter',caracter)
    document.getElementById('email',email)
    document.getElementById('tarjeta',email)
    document.getElementById('caracteres',email)
    document.getElementById('digito',email)
}

window.addEventListener('load',inicia);
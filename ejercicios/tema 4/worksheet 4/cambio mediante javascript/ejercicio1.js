function normal(e){
    e.preventDefault();
    var body = document.querySelector('body');
    body.style.backgroundColor = 'rgb(255, 255, 204)';
    body.style.fontFamily = 'sans-serif';

    var negrita = document.getElementById('negrita');
    negrita.style.fontWeight = 'bold';

    var amarillo = document.getElementById('amarillo');  
    amarillo.style.padding = '0'; 
    amarillo.style.border = '1px black solid'; 
    amarillo.style.backgroundColor = 'yellow';

    var enlace = document.getElementById('enlace');
    enlace.style.border = 'solid 1px black';
    enlace.style.backgroundColor = 'lightgrey';

    var a = document.querySelector('a');
    a.style.textDecoration = 'none';
}

function minimalista(e){
    e.preventDefault();
    var body = document.querySelector('body');
    body.attributeStyleMap.clear()
}

function inicia(){
    document.getElementById('minimalista').addEventListener('click',minimalista);
    document.getElementById('normal').addEventListener('click',normal);
    
}

window.addEventListener('load',inicia);
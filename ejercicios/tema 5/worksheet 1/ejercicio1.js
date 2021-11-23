function inicia(){
    a = document.querySelectorAll('a'); 
    console.log('numero de enlaces: ' + a.length);

    console.log('penultimo enlace: ' + a[a.length -2].innerHTML); 

    var contador = 0
    a.forEach(element => {
        if(element.href == "https://www.google.com/"){
            contador++;
        }
    });
    console.log('numero de enlaces que van a google: ' + contador);

    p = document.querySelectorAll('p'); 
    console.log('el numero de enlaces en el tercer parrafo es: ' + p[2].children.length);
}

window.addEventListener('load',inicia);
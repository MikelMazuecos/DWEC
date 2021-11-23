function crearFichero(){
    nuevoInput = document.createElement('input');
    nuevoInput.type = 'file';
    document.getElementById('lista').appendChild(nuevoInput);
}

function inicia(){
    document.getElementById('boton').addEventListener('click',crearFichero)
}

window.addEventListener('load',inicia);
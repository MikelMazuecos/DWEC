function crearEntrada(){
    li = document.createElement('li');
    li.innerHTML = 'nueva entrada';
    document.getElementById('lista').appendChild(li);
}

function inicia(){
    document.getElementById('crearEntrada').addEventListener('click',crearEntrada)
}

window.addEventListener('load',inicia);
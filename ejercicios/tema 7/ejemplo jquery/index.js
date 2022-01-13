function inicia(){
    document.getElementById('cambia').addEventListener('click',cambio)
}

window.addEventListener('load',inicia)

function cambio(){
    $('p').html('pepe')
}

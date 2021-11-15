function cambiaEstiloNormal(e){
    e.preventDefault();
    document.getElementById("estilo").href='estilo_normal.css'
}   

function cambiaEstiloMinimalista(e){
    e.preventDefault();
    document.getElementById("estilo").href='estilo_minimalista.css'
}

function inicia(){
    document.getElementById("normal").addEventListener('click',cambiaEstiloNormal)
    document.getElementById("minimalista").addEventListener('click',cambiaEstiloMinimalista)
}

window.addEventListener('load',inicia);
function borraRepetidos(cadena){
    cadena = cadena.split(" ")
    palabrasNoRepetidas = []
    for(palabra of cadena){
        if(palabrasNoRepetidas.includes(palabra) == false ){
            palabrasNoRepetidas.push(palabra)
        }
    }

    return palabrasNoRepetidas.join(" ")
}

cadena = "probando la la funcion funcion"
document.write(borraRepetidos(cadena)) 
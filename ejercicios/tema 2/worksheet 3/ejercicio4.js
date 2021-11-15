//funcion que a partir de una cadena de texto coloque todas sus consonantes al principio y todas sus vocales al 
//final eliminando los blancos

function cambiaCadena(cadena){
    nuevaCadena = []
    vocales = ["a","e","i","o","u"]
    consonantes = ["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z"]
    for (i=0;i<=cadena.length;i++){
        if(vocales.includes(cadena[i]) == true){
            nuevaCadena.push(cadena[i])
        }
        else if(consonantes.includes(cadena[i]) == true){
            nuevaCadena.unshift(cadena[i])
        }
    }

    return nuevaCadena.join("")
}

cadena = "probando la funcion"
document.write(cambiaCadena(cadena)) 
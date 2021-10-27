//a. devuelve invertida una cadena dada por el usuario

function invierteCadena(cad_arg)
{
    resultado=""
    for (let i=cad_arg.length-1; i>=0; i--)
        {resultado+=cad_arg[i]}
    
    return resultado
}

cadena = "hola mundo que tal estamos"
let cadena_invertida = invierteCadena(cadena)
document.write(cadena_invertida + "<br>")

//b. devuelve invertidas las palabras contenidas en la cadena

function inviertePalabras(cad_arg)
{
    return cad_arg.split(" ").reverse().join(" ");
}

let cadena_invertida2 = inviertePalabras(cadena)
document.write(cadena_invertida2 + "<br>")

//c. para una cadena de caracteres dada devuelve la longitud de la palabra mas larga en ella contenida

function encuentraPalabraMasLarga(cad_arg)
{
    palabra_grande = [" "]
    for (let palabra of cad_arg.split(" "))
    {
        if (palabra.length > palabra_grande.length)
        {
            palabra_grande = palabra
        }
    }
    return palabra_grande.length
}

let palabra_larga = encuentraPalabraMasLarga(cadena)
document.write(palabra_larga + "<br>")

//d. para una cadena de caracteres y un valor numerico (i), devuelve el numero de palabras cuya longitud es mayor a i

function filtraPalabrasMasLargas(cad_arg, numero_minimo = 4)
{
    palabras_grandes = []
    for (let palabra of cad_arg.split(" "))
    {
        if (palabra.length > numero_minimo)
        {
            palabras_grandes += (palabra + " ")
        }
    }
    return palabras_grandes
}

let palabra_larga2 = filtraPalabrasMasLargas(cadena)
document.write(palabra_larga2 + "<br>")

//e formatea correctamente la cadena pasada, de tal modo que solo aparece en mayuscula la primera letra y el resto en minuscula

//toLowerCase, toUpperCase

function cadenaBienFormada(cad_arg)
{
    let cad = cad.slice(1)
    return cad_arg.charAt(0).toUpperCase() + cad.toLowerCase()
}

let cadena_formateada = cadenaBienFormada(cadena)
document.write(cadena_formateada)
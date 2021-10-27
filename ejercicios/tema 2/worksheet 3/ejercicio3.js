function subcadena(cadena)
{
    let palabras = cadena.split(" ")
    for (let palabra of palabras)
    {
        document.write(palabra)
    }
}

cadena = "algunas palabras continenen algun elemento que se repite con frecuencia"
document.write(subcaden(cadena))
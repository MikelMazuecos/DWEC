function localizarSubcadena(cadena,subcadena)
{
    if(cadena.includes(subcadena))
        return subcadena
}

cadena = "algunas palabras continenen algun elemento que se repite con frecuencia"
subcadena = "elemento que se repite"
document.write(localizarSubcadena(cadena,subcadena))
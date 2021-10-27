function muestraMayusculaOMinuscula(cadena)
{
    for (palabra of cadena.split(" "))
    {
        let mayusculas = 0 //65-90
        let minusculas = 0//97-122
        let lista_mayusculas = [65,66,67,68,69,70,71,72,73,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]
        let lista_minusculas = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122]
        for(let i = 0; i < palabra.length; i++)
        {
            if (palabra.charAt(lista_mayusculas))
            {
                mayusculas += 1
            }
            if (palabra.charAt(lista_mayusculas))
            {
                minusculas += 1
            }
        if (mayusculas > 0 && minusculas == 0)
        {
            console.write(palabra + " es mayuscula" + "<br>")
        }
        if (mayusculas == 0 && minusculas > 0)
        {
            document.write(palabra + " es minuscula" + "<br>")
        }
        if (mayusculas > 0 && minusculas > 0)
        {
            document.write(palabra + " tiene mayusculas y minusculas" + "<br>")
        }
        }
    }

}

let cadena = "ALGUNAS DE esTas Palabras estan EN  MAYUSCULA, otras ESTAN en minUsculA Y otras Mezcladas"
document.write(muestraMayusculaOMinuscula(cadena))

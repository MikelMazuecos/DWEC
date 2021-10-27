function establecerACero(array)
{
    return nuevoArray = array.map(numero => numero * 0);
}

function añadirUno(array)
{
    return nuevoArray = array.map(numero => numero + 1);
}

function añadirEspacios(array)
{
    return nuevoArray = array.map(numero => numero + " ");
}

array = [4,34,6,12,45,9,80,7,43,20];
document.write("establecer a cero: " + establecerACero(array) + "<br>");
document.write("añadir 1 a cada numero: " + añadirUno(array) + "<br>");
document.write("añadir un espacio: " + añadirEspacios(array));

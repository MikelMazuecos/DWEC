arrayTesoro = [[34,21,32,41,25],[14,42,43,14,31],[54,45,,52,42,23],[33,15,51,31,35],[21,52,33,13,23]];

posicion = arrayTesoro[0][0];
console.log(posicion);
while(arrayTesoro[posicion.toString()[0] - 1][posicion.toString()[1] - 1] != posicion)
{
    posicion = arrayTesoro[posicion.toString()[0] - 1][posicion.toString()[1] - 1];
    console.log(posicion);
}

console.log("has encontrado el tesoro en la posicion " + posicion);


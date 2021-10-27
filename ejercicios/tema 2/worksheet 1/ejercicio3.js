//utilizando setTimeout() creo un contador hacia atras de 60 segundos
var segundos = 60
function mostrar_segundo()
{
    document.write(segundos-- + "<br>")
}

for (let i=60; i>=0; i--)
{
    let value = setTimeout(mostrar_segundo,i*1000)
}

/*
otra forma de hacerlo con recursividad

setTimeout(muestraseg,1000)
var segundos = 60

function muestraseg()
{
    document.write(segundos--)
    document.write("<br>")

    if(segundo>=0)
        setTimeout(muestraseg, 1000)
}
*/
hermanos = parseInt(prompt("cuantos hermanos tienes"))
cantidad = parseInt(prompt("escribe una cantidad"))

if(hermanos >=3)
{
    alert(cantidad - (cantidad * 15 / 100))
}
else{
    if(hermanos <3 && hermanos >0)
    {
        alert(cantidad - (cantidad * 5 / 100))
    }
    else{
        alert(cantidad)
    }
}
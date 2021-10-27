function generarNumeroAleatorio()
{
    return Math.floor(Math.random() * (1000 - 1) + 1);
}

function paresImpares(array)
{
    for(i=0; i<100; i++)
    {
        array.push(generarNumeroAleatorio());
    }
}

array = [];
paresImpares(array);
document.write("lista desordenada: " + array + "<br>");

array.sort((a,b)=>{
    if(a%2 == 0 || b%2 == 0)
        return 1;
    else
        return -1;
})

document.write("lista ordenada: " + array);
//Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all 
//of the squares.

function squareAndSum(...valores)
{   
    let suma = 0
    for (valor of valores)
    {
        suma = suma + valor**2
    }

    document.write(suma)
}

squareAndSum(2,4,3)



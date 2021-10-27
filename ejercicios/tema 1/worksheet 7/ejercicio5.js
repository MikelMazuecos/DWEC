//Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

function sumEveryOther(...valores)
{
    let suma = 0
    for(let i=0; i < valores.length; i+=2)
    {
        suma += valores[i]
    }

    document.write(suma)
}

let misuma = sumEveryOther(1,2,3,4,5,6,7,8,9)

/*
otra forma de hacerlo

function suma(v1,v2,v3)
{
    return v1+v2+v3
}

miarray = [1,2,3,4,5,6,7,8,9]

let misuma = suma(...miarray)
console.log(misuma)
*/


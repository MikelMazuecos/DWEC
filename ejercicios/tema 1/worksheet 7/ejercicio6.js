//Write a function called onlyUniques that can take in any number of arguments, and returns an array of only 
//the unique arguments.

function onlyUniques(...valores)
{
    let unicos = []
    for (valor of valores)
    {
        if (unicos.includes(valor) == false)
        {
            unicos += valor
        }
    }

    document.write(unicos)
}

onlyUniques(1,1,1,2,3,4,4,5,5,5,5,5,6,' gato ',' gato ',' perro ')
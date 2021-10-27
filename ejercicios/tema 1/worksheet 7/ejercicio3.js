//Write a function called countTheArgs that can take any number of arguments, and returns the number of 
//arguments that are passed in.

function countTheArgs(...valores)
{
    let suma = 0
    for (let i= 0; i < valores.length; i++)
    {
        suma += 1
    }

    document.write(suma)
}

countTheArgs(1,5,9,3,6,2)
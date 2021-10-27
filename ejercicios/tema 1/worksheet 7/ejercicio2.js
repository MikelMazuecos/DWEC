//Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only
//the numbers.

function addOnlyNums (...argumento)
{
    let suma = 0
    for (let i = 0; i < argumento.length; i++)
    {
        if (typeof(argumento[i]) == 'number')
        {
            suma += argumento[i]
        }       
    }

    console.log(suma)
}

addOnlyNums(1,2,3,4,"j",6,7,"h",9,"q")
//Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array 
//that combines both (using the spread operator).

function combineTwoArrays(...arrays)
    {
        let suma = []
        for (array of arrays)
        {
            suma = suma.concat(array)
        }
        
        document.write(suma)
    }

combineTwoArrays(['Mikel','jose','carlos'],['antonio','fernando','david'])

    

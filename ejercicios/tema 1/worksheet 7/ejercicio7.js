//Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all 
//of them into one array.

function combineAllArrays(...arrays)
{
    let arrayfinal = []

    for (let array of arrays)
    {   
        arrayfinal = arrayfinal.concat(array)
    }

    document.write(arrayfinal)
}

combineAllArrays(['gato','perro'],['tortuga','conejo'],['pajaro','caballo'])
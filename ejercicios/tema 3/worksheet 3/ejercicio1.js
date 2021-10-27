//find largest number
numeros = [4,7,34,12,29,3,0,87];
numeros.sort((a,b)=>{
    if(a>b)
        return 1;
    if(a<b)
        return -1;
    else
        return 0;
})

//find longest string
numeroMayor = numeros.pop();

palabras = ["hola","mundo","yo","murcielago","adios","si","donde","ordenador"];
palabras.sort((a,b)=>{
    if(a.length>b.length)
        return -1;
    if(a.length>b.length)
        return 1;
    else
        return 0;
})

palabraMayor = palabras.pop();

//find even numbers
pares = Array();
numeros.forEach(num => {
    if(num%2 == 0)
        pares.push(num);
});

numerosPares = pares;

//find odd numbers
impares = Array();
numeros.forEach(num => {
    if(num%2 != 0)
        impares.push(num);
});

numerosImpares = impares;

//find words that contain 'is'
palabra = "is";
console.log(`la palabra "${palabra}" ${palabras.includes(palabra) ? 'esta' : 'no esta'} en la frase`);

//assert all numbers are divisible by three
divisiblePor3 = Array();
numeros.forEach(num => {
    if(num%3 == 0)
        divisiblePor3.push(num);
});

numerosDivisiblesPor3 = divisiblePor3;

//zip two arrays together
palabras2 = ["pizza","pescado","carne","verdura","fruta"];
arraysUnidos = palabras.concat(palabras2);

//sort joined array from smallest to largest
arraysUnidos.sort((a,b)=>{
    if(a.length>b.length)
        return -1;
    if(a.length<b.length)
        return 1;
    else
        return 0;
})

//remove the first word in the array

palabras.shift();

//place a new word at the start of the array

palabras.unshift("palabra");

//replace some elements

palabras.splice(1,2,"sustituto");
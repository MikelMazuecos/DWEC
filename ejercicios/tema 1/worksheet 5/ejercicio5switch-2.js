num = parseInt(prompt("dime un numero"))

switch(true)
{
    case num % 2 == 0:
        alert("el numero es par")
    break;

    case num % 3 == 0:
        alert("el numero es multiplo de 3")
    break;

    case num % 5 == 0:
        alert("el numero es multiplo de 5")
    break;
}
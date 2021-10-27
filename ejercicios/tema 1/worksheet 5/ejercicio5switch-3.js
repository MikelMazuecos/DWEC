num1 = parseInt(prompt("dime un numero"))
num2 = parseInt(prompt("dime otro numero"))
operacion = prompt("que operacion queires hacer (+ - * /)")

switch(operacion)
{
    case "+":
        alert(num1 + num2)
    break;

    case "-":
        alert(num1-num2)
    break;

    case "*":
        alert(num1*num2)
    break;

    case "/":
        alert(num1/num2)
    break;
}
var num_adivinar = parseInt(prompt("introduce el numero a adivinar"))
var num = parseInt(prompt("di un numero"))

do{
    if (num < num_adivinar)
    {
        alert("el numero es mayor")
    }

    else{
        alert("el numero es menor")
    }

    var num = parseInt(prompt("di un numero"))
}

while(num !== num_adivinar)

alert(`acertaste! era ${num_adivinar}`)
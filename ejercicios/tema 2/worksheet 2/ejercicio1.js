//se muestre un numero aleatorio entre 0 y 100

document.write(Math.floor(Math.random() * (101 - 0)) + '<br>')

//igual pero entre 100 y 200

document.write(Math.floor(Math.random() * (201 - 100)) + 100 + '<br>')

//pide dos valores al usuario y genera un nº aleatorio entre esos dos valores

let minimo = parseInt(prompt('dime un numero minimo'))
let maximo = parseInt(prompt('dime un numero maximo'))

document.write(Math.floor(Math.random() * (maximo - minimo)) + minimo)

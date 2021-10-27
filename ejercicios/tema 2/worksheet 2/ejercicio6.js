//crea una web que calcule potencia

let base = parseInt(prompt("dime la base"))
let exponente = parseInt(prompt("dime el exponente"))

let resultado = Math.pow(base,exponente)
document.write(base + " ^ " + exponente + " = " + resultado)
//crea una web para resolver ecuaciones de segundo grado. debera pedir por teclado tanto los coeficientes 
//y mostrar las soluciones posibles

let a = parseInt(prompt("dime cuanto vale a"))
let b = parseInt(prompt("dime cuanto vale b"))
let c = parseInt(prompt("dime cuanto vale c"))

let raiz = Math.sqrt(b**2 - 4 * a * c) 
let x1 = (-b + raiz) / (2 * a)
let x2 = (-b - raiz) / (2 * a)

document.write("solucion 1: " + x1 + "<br>")
document.write("solucion 2: " + x2)

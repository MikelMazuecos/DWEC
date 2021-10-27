//crea una web que calcula la hipotenusa de un triangulo rectangulo (pidiendo al usuario el tamaño de los 
//dos catetos)

let cateto1 = parseInt(prompt("dime el cateto 1"))
let cateto2 = parseInt(prompt("dime el cateto 2"))

let hipotenusa = Math.sqrt(cateto1**2 + cateto2**2) 
document.write("la hipotenusa es: " + hipotenusa)
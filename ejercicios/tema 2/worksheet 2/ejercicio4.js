//crea una web que calcula la hipotenusa de un triangulo rectangulo (pidiendo al usuario el tamaño de los 
//dos catetos) hasta que el usuario decida que no queire continuar

do{
    let cateto1 = parseInt(prompt("dime el cateto 1"))
    let cateto2 = parseInt(prompt("dime el cateto 2"))

    let hipotenusa = Math.sqrt(cateto1**2 + cateto2**2) 
    alert("la hipotenusa es: " + hipotenusa)

    var respuesta = prompt("¿quieres continuar? (si/no)")
}
while(respuesta == "si")

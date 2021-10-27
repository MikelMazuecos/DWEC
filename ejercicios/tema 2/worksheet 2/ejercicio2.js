//en una pagina web, pide al usuario un angulo y calcula su seno, coseno y tangente

let angulo = parseInt(prompt("dime un angulo"))

let seno = Math.sin(angulo)
let coseno = Math.cos(angulo)
let tangente = Math.tan(angulo)

document.write("seno: " + seno + "<br>")
document.write("coseno: " + coseno + "<br>")
document.write("tangente: " + tangente + "<br>")
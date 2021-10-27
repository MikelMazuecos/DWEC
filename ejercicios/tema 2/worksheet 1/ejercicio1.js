//realiza una pagina que cree un objeto de tipo Date y muestre en la pagina:
//año,mes,dia,hora,minuto,segundo

let fecha = new Date()

let año = fecha.getFullYear()
let mes = fecha.getMonth()
let dia = fecha.getDate()
let hora = fecha.getHours()
let minuto = fecha.getMinutes()
let segundo = fecha.getSeconds()

document.write("año: " + año + "<br>")
document.write("mes: " + mes + "<br>")
document.write("dia: " + dia + "<br>")
document.write("hora: " + hora + "<br>")
document.write("minuto: " + minuto + "<br>")
document.write("segundo: " + segundo)

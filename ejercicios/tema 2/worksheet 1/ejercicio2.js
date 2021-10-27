/*muestra el resultado de:
a.crear variable "fechahoy" con fecha de hoy
b.crear variable "fecha85" que sume 85 dias a la variable fechahoy
c.crear variable "fecha187" que reste 187 dias a la variable fechahoy
d.sumar dos años a la variable "fecha85"
e.restar 24 horas a la variable "fecha187"
f.crear variable "fecharesto" que sea la resta de "fecha85" - "fecha187" */

//a
let fechahoy = new Date()
document.write(fechahoy + "<br>")

//b
var fecha85 = fechahoy.setDate(fechahoy.getDate() + 85)
document.write(fechahoy + "<br>")

//c
var fecha187 = fechahoy.setDate(fechahoy.getDate() - 187)
document.write(fechahoy + "<br>")

//d
var fecha85 = fechahoy.setFullYear(fechahoy.getFullYear() + 2)
document.write(fechahoy + "<br>")

//e
var fecha187 = fechahoy.setHours(fechahoy.getHours() - 24)
document.write(fechahoy + "<br>")

//f
var fecharesto = fecha85 - fecha187
document.write(fechahoy)
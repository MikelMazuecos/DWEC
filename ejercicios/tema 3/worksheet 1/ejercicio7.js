function calcularFactorial(num)
{
    if(num == 0)
    return 1;
    else
    return num * calcularFactorial(num - 1);
}

var body = document.getElementsByTagName("body")[0];
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");

for (var i = 0; i < 10; i++) {
  var fila = document.createElement("tr");
  for (var j = 0; j < 1; j++) {
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(calcularFactorial(i + 1));
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
  }

tblBody.appendChild(fila);
}

tabla.appendChild(tblBody);
body.appendChild(tabla);
tabla.setAttribute("border", 2);
tabla.setAttribute("id", "tabla");
var result = document.getElementById("resultado");
result.appendChild(tabla);
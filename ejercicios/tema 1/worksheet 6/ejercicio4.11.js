var columnas = parseInt(prompt("dime el numero de columnas"))
var altura = parseInt(prompt("dime el numero de pixeles para la altura"))
var anchura = parseInt(prompt("dime el numero de pixeles para la anchura"))

document.write(`<table border = "0" cellspacing = "2" bgcolor ="black" width = "200">`)
document.write(`<tr bgcolor = "white" height = "${altura}">`)

for (let i=0; i < columnas; i++)
{
    document.write(`<td width = "${anchura}"> &nbsp; </td>`)
}

document.write(`</tr>`)
document.write(`</table >`)
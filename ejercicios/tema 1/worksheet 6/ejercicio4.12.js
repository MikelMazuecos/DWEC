var columnas = parseInt(prompt("dime el numero de columnas"))
var altura = parseInt(prompt("dime el numero de pixeles para la altura"))
var anchura = parseInt(prompt("dime el numero de pixeles para la anchura"))

document.write(`<table border = "0" cellspacing = "2" bgcolor ="black" width = "200">`)
document.write(`<tr bgcolor = "white" height = "${altura}">`)

for (let i=0; i < columnas; i++)
{
    if (i%2 == 0){
    document.write(`<td width = "${anchura}" bgcolor = "black"> &nbsp; </td>`)
    }

    else{
    document.write(`<td width = "${anchura}" bgcolor = "white"> &nbsp; </td>`)
    }
}

document.write(`</tr>`)
document.write(`</table >`)
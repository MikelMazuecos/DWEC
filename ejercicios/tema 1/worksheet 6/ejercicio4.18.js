
var columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var filas = parseInt(prompt(`Introduce el número de filas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`)

for (let i = 0; i < columnas; i++)
{
    document.write(`<tr bgcolor = "white" height = "${alto}"> `)

    for (let j = 0; j < filas; j++)
    {
        document.write(`<td width = "${ancho}"> &nbsp; </td>`)
    }

    document.write(`</tr>`)
} 

document.write(`</table>`)
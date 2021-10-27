var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`)

for (let i = 0; i < 8; i++)
{
    document.write(`<tr bgcolor = "white" height = "${ancho}"> `)

    for (let j = 0; j < 8; j++)
    {
        if(i%2 == 0)
        {
            if (j%2 == 0){
                document.write(`<td width = "${ancho}" bgcolor = "black"> &nbsp; </td>`)
                }
            
                else{
                document.write(`<td width = "${ancho}" bgcolor = "white"> &nbsp; </td>`)
                }
        }

        else{
            if (j%2 !== 0){
                document.write(`<td width = "${ancho}" bgcolor = "black"> &nbsp; </td>`)
                }
            
                else{
                document.write(`<td width = "${ancho}" bgcolor = "white"> &nbsp; </td>`)
                }          
        }
    }
    document.write(`</tr>`)
} 
document.write(`</table>`)
//crea una web que genere una tabla con dos columnas. en la primera un numero ascendente y en la otra el
// valor de su seno

document.write('<table border = "1" bgcolor = "white">')
document.write("<tr>")
document.write("<td><b>numero</b></td>")
document.write("<td><b>seno</b></td>")
document.write("</tr>")

for(let i=0; i<=10; i++)
{   
    let seno = Math.sin(i)
    document.write("<tr>")
    document.write(`<td>${i}</td>`)
    document.write(`<td>${seno}</td>`)
    document.write("</tr>")
}

document.write("</table>")

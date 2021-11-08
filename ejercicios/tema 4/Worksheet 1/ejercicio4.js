//debe pintar los cuadros en azul si se pulsa la tecla ctrl y en rojo con shift.

document.write('<table border="2">')
for(i=0;i<=100;i++){
    document.write("<tr>")
    for(j=0;j<=100;j++){
        document.write("<td></td>")
    }
    document.write("</tr>")
}
document.write('</table>')

function pintar(e){
    if(e.ctrlKey)
        e.target.style.backgroundColor = "blue";
    else if(e.shiftKey)
        e.target.style.backgroundColor = "red";   
}

function inicia() {
   // const td = document.querySelectorAll('td');
    //td.forEach((td)=>td.onmousemove = pintar)

    document.addEventListener('mousemove', pintar);
}

window.addEventListener('load',inicia);


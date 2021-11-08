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

function borrarLineas(){
    const tr = document.querySelector('tr');
    tr.style.backgroundColor = "white";
}

function borrarTodo(e){
    e.target.style.backgroundColor = "white";
}

function inicia() {
    document.addEventListener('mousemove', pintar);
    document.addEventListener('click', borrarLineas);
    document.addEventListener('dblclick', borrarTodo);
}

window.addEventListener('load',inicia);


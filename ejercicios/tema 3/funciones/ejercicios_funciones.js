//crear array con 10 numeros y ordenar creciente y decreciente
//{nombre:"pikachu", tipo: "electrico"} ordenarlos por nombre y por tipo

numeros = [8,4,2,9,5,0,1,3,7,6];
numeros.sort((a,b) => a-b);
document.write("ordenados de menor a mayor: " + numeros + "<br>");
numeros.sort((a,b) => b-a);
document.write("ordenados de mayor a menor: " + numeros + "<br>");

pokemons = [{nombre:"pikachu",tipo:"electrico"},
            {nombre:"charmander", tipo:"fuego"},
            {nombre:"squirtle", tipo:"agua"},
            {nombre:"bulbasur",tipo:"planta"}];

pokemons.sort((a,b)=>{
    if (a.nombre > b.nombre)
        return 1;
    else if (a.nombre < b.nombre)
        return -1;
    else
        if(a.tipo > b.tipo)
            return 1;
        else if (a.tipo < b.tipo)
            return -1;
        else    
            return 0;
});




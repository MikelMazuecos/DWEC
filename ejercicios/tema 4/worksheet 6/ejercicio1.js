/*Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no tener ninguna cookie de 
ese sitio, deberá preguntar el nombre del usuario y almacenarlo en una cookie que caducará en 5 minutos. Tras esto 
saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie deberá leerla y mostrar el 
mensaje anterior directamente. Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar 
'Cerrar Sesión').
Nota: Asegúrate de que tu cookie acepta todo tipo de caracteres (como ñ, espacio en blanco, acentos, etc....)*/

function obtenernombre(){
    var variosCaracteres =  document.cookie.split("=")
    return variosCaracteres[1]
}

function inicia(){
    if(document.cookie == ""){
        var nombre = prompt('Dime tu nombre')
        document.cookie = `name=${nombre}`
        alert(`Bienvenido ${obtenernombre()}`)
    }

    else{
        alert(`Bienvenido ${document.cookie}`)
    }
}

window.addEventListener('load',inicia)
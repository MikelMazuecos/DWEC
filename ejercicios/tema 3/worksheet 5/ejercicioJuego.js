class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.victorias = 0;
        this.derrotas = 0;
        this.mano = "";
    }
}

class Juego{
    constructor(jugador1,jugador2) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.estado = "partida sin empezar";
    }

    resultado(){
        this.estado = "partida empezada";
        p = document.createElement('p');

        if(jugadorPrimero.mano == jugadorSegundo.mano){
            p.innerHTML = "empate";
            document.getElementById("resultado").appendChild(p);
        }
        else if((jugadorPrimero.mano == "piedra" && jugadorSegundo.mano == "papel") || 
                (jugadorPrimero.mano == "tijera" && jugadorSegundo.mano == "piedra") || 
                (jugadorPrimero.mano == "papel" && jugadorSegundo.mano == "tijera")){
            p.innerHTML = "gana " + jugadorSegundo.nombre;
            document.getElementById("resultado").appendChild(p);
            jugadorSegundo.victorias += 1;
            jugadorPrimero.derrotas += 1;
            document.getElementById("1").innerHTML = jugadorPrimero.nombre.bold() + " => Victorias: " + jugadorPrimero.victorias + " | " + "Derrotas: " + jugadorPrimero.derrotas
            document.getElementById("2").innerHTML = jugadorSegundo.nombre.bold() + " => Victorias: " + jugadorSegundo.victorias + " | " + "Derrotas: " + jugadorSegundo.derrotas
            }

            else if((jugadorPrimero.mano == "piedra" && jugadorSegundo.mano == "tijera") || 
                    (jugadorPrimero.mano == "tijera" && jugadorSegundo.mano == "papel") || 
                    (jugadorPrimero.mano == "papel" && jugadorSegundo.mano == "piedra")){
                p.innerHTML = "gana " + jugadorPrimero.nombre;
                document.getElementById("resultado").appendChild(p);
                jugadorPrimero.victorias += 1;
                jugadorSegundo.derrotas += 1;
                document.getElementById("1").innerHTML = jugadorPrimero.nombre.bold() + " => Victorias: " + jugadorPrimero.victorias + " | " + "Derrotas: " + jugadorPrimero.derrotas
                document.getElementById("2").innerHTML = jugadorSegundo.nombre.bold() + " => Victorias: " + jugadorSegundo.victorias + " | " + "Derrotas: " + jugadorSegundo.derrotas
            }
        this.estado = "partida terminada";
    }
}

var p;
var juego;
var jugadorPrimero;
var jugadorSegundo;

function crearJugadores(){
    var nombre1 = document.getElementById("nombre1").value;
    jugadorPrimero = new Jugador(nombre1);
    var nombre2 = document.getElementById("nombre2").value;
    jugadorSegundo = new Jugador(nombre2);
    juego = new Juego(jugadorPrimero,jugadorSegundo);
    document.getElementById("1").innerHTML = jugadorPrimero.nombre.bold() + " => Victorias: " + jugadorPrimero.victorias + " | " + "Derrotas: " + jugadorPrimero.derrotas
    document.getElementById("2").innerHTML = jugadorSegundo.nombre.bold() + " => Victorias: " + jugadorSegundo.victorias + " | " + "Derrotas: " + jugadorSegundo.derrotas
}

function manoJugador1Piedra(){
    jugadorPrimero.mano = "piedra";
}
function manoJugador1Papel(){
    jugadorPrimero.mano = "papel";
}
function manoJugador1Tijera(){
    jugadorPrimero.mano = "tijera";
}
function manoJugador2Piedra(){
    jugadorSegundo.mano = "piedra";
}
function manoJugador2Papel(){
    jugadorSegundo.mano = "papel";
}
function manoJugador2Tijera(){
    jugadorSegundo.mano = "tijera";
}


function resultado(){
    juego.resultado();
}

function inicia(){
    document.getElementById("crearJugadores1").addEventListener('click',crearJugadores);
    document.getElementById("jugar").addEventListener('click',resultado);
    document.getElementById("piedra1").addEventListener('click',manoJugador1Piedra);
    document.getElementById("papel1").addEventListener('click',manoJugador1Papel);
    document.getElementById("tijera1").addEventListener('click',manoJugador1Tijera);
    document.getElementById("piedra2").addEventListener('click',manoJugador2Piedra);
    document.getElementById("papel2").addEventListener('click',manoJugador2Papel);
    document.getElementById("tijera2").addEventListener('click',manoJugador2Tijera);
}

window.addEventListener('load',inicia);
import{bola} from './clase_bola.js'
import{interfaz_bola} from './clase_interfaz_bola.js'
import{barra} from './clase_barra.js'
import{interfaz_barra} from './clase interfaz_barra.js'

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function colorAleatorio()
{
    return "#"+ Math.floor(Math.random()*16777215).toString(16);
}

var svg; 
var tamanoSVG;
var elId;
var bola1;
var bola_moviendo;
var barra1;
var barra2;
var barra_moviendose1;
var barra_moviendose2;
var movimiento;

window.onload = () =>
{
    svg = document.getElementById("panel");

    bola1 = new bola(25, 670, 250, 0, 0);
    bola_moviendo = new interfaz_bola(bola1,'black',svg)

    barra1 = new barra(10,200,30,100)
    barra2 = new barra(1300,200,30,100)

    barra_moviendose1 = new interfaz_barra(barra1,svg)
    barra_moviendose2 = new interfaz_barra(barra2,svg)

    window.addEventListener('keydown',moverBarra)
    document.getElementById("velocidad1").addEventListener('click',velocidadLenta)
    document.getElementById("velocidad2").addEventListener('click',velocidadMedia)
    document.getElementById("velocidad3").addEventListener('click',velocidadRapida)
    document.getElementById("pausa").addEventListener('click',pausar)

    elId = window.requestAnimationFrame(loop);
}

function loop()
  {
    tamanoSVG = svg.getBoundingClientRect();

    movimiento = bola_moviendo.bola.mueve(tamanoSVG.width, tamanoSVG.height,barra1,barra2);

    bola1.chocaDerecha(barra2)
    bola1.chocaIzquierda(barra1)
    bola_moviendo.dibuja()

    barra_moviendose1.dibuja()
    barra_moviendose2.dibuja()

    if(movimiento == 'I'){
        document.getElementById("marcador").innerHTML = `${bola1.marcadorDe} : ${bola1.marcadorIz}`
        bola1.marcadorIz += 1
    }

    if(movimiento == 'D'){
        document.getElementById("marcador").innerHTML = `${bola1.marcadorDe} : ${bola1.marcadorIz}`
        bola1.marcadorDe += 1
    }

    elId = window.requestAnimationFrame(loop);
}

function moverBarra(e) {
    if(e.key == 'p'){
        barra2.mueve(tamanoSVG.height, -barra2.velocidad)
        barra_moviendose2.dibuja()
    }

    else if(e.key == 'l'){
        barra2.mueve(tamanoSVG.height, barra2.velocidad)
        barra_moviendose2.dibuja()
    }

    else if(e.key == 'q'){
        barra1.mueve(tamanoSVG.height, -barra1.velocidad)
        barra_moviendose1.dibuja()
    }

    else if(e.key == 'a'){
        barra1.mueve(tamanoSVG.height, barra1.velocidad)
        barra_moviendose1.dibuja()
    }
}

function velocidadLenta() {
    if(bola1.vX >= 0){
        if(bola1.vY >=0){
            bola1.vX = 6
            bola1.vY = 6
        }
        else{
            bola1.vX = 6
            bola1.vY = -6
        }
    }
    else{        
        if(bola1.vY >=0){
            bola1.vX = -6
            bola1.vY = 6
    }else{
        bola1.vX = -6
        bola1.vY = -6
        }
    }
}

function velocidadMedia() {

    if(bola1.vX >= 0){
        if(bola1.vY >=0){
            bola1.vX = 10
            bola1.vY = 10
        }
        else{
            bola1.vX = 10
            bola1.vY = -10
        }
    }
    else{        
        if(bola1.vY >=0){
            bola1.vX = -10
            bola1.vY = 10
    }else{
        bola1.vX = -10
        bola1.vY = -10
        }
    }
}

function velocidadRapida() {

    if(bola1.vX >= 0){
        if(bola1.vY >=0){
            bola1.vX = 14
            bola1.vY = 14
        }
        else{
            bola1.vX = 14
            bola1.vY = -14
        }
    }
    else{        
        if(bola1.vY >=0){
            bola1.vX = -14
            bola1.vY = 14
    }else{
        bola1.vX = -14
        bola1.vY = -14
        }
    }
}

function pausar() {
    bola1.vX = 0
    bola1.vY = 0
}
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

window.onload = () =>
{
    svg = document.getElementById("panel");

    bola1 = new bola(25, 600, 600, 10, 10);
    bola_moviendo = new interfaz_bola(bola1,'black',svg)

    barra1 = new barra(10,200,30,100)
    barra2 = new barra(1300,200,30,100)

    barra_moviendose1 = new interfaz_barra(barra1,svg)
    barra_moviendose2 = new interfaz_barra(barra2,svg)

    window.addEventListener('keydown',moverBarra)

    elId = window.requestAnimationFrame(loop);
}

function loop()
  {
    tamanoSVG = svg.getBoundingClientRect();

    bola_moviendo.bola.mueve(tamanoSVG.width, tamanoSVG.height,barra1,barra2);
    bola1.chocaDerecha(barra2)
    bola1.chocaIzquierda(barra1)
    bola_moviendo.dibuja()

    barra_moviendose1.dibuja()
    barra_moviendose2.dibuja()

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

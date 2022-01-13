import{gato,interfaz_gato} from "./clases.js"

var animal;

function inicia(){
    animal = new gato(0,"gato1")
    new interfaz_gato(animal).mostrar_mensaje()

}

window.addEventListener('load',inicia)
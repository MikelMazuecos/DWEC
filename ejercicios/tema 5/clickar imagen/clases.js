export class gato{
    constructor(clicks,id){
        this.clicks = clicks
        this.id = id
    }
}

export class interfaz_gato{
    constructor(gato){
        this.gato = gato
    }

    mandar_mensaje(){
        this.gato.clicks += 1
        document.getElementById("mensaje").innerHTML = `numero de veces que has hecho click en el primer gato: ${this.gato.clicks}` 
    }
    
    mostrar_mensaje(){
        document.getElementById(this.gato.id).addEventListener('click',this.mandar_mensaje)
    }
}
class jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.victorias = 0;
        this.derrotas = 0;
        this.mano = "";
    }

    jugar(){
        this.mano = prompt(this.nombre + " Elige piedra, papel o tijera");
        return this.mano;
    }
}

class juego{
    constructor(jugador1,jugador2) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.estado = "partida sin empezar";
    }

    jugar(){
        console.log("Empieza la partida");
        this.estado = "partida empezada";
        console.log("Turno del jugador 1: ")

        while(manoJugador1 == manoJugador2){

        var manoJugador1 = this.jugador1.jugar();
        var manoJugador2 = this.jugador2.jugar();
        console.log("jugador 1 sacó " + manoJugador1);
        console.log("jugador 2 sacó " + manoJugador2);
        
        if(manoJugador1 == manoJugador2)
            console.log("empate");

        else if((manoJugador1 == "piedra" && manoJugador2 == "papel") || 
                (manoJugador1 == "tijera" && manoJugador2 == "piedra") || 
                (manoJugador1 == "papel" && manoJugador2 == "tijera")){
            console.log("gana jugador2");
            this.jugador2.victorias += 1;
            this.jugador1.derrotas += 1;}

            else if((manoJugador1 == "piedra" && manoJugador2 == "tijera") || 
                    (manoJugador1 == "tijera" && manoJugador2 == "papel") || 
                    (manoJugador1 == "papel" && manoJugador2 == "piedra")){
                console.log("gana jugador1");
                this.jugador1.victorias += 1;
                this.jugador2.derrotas += 1;
            }
        }
        this.estado = "partida terminada";
    }
}

jugador1 = new jugador("Mikel");
jugador2 = new jugador("Jose");
juego1 = new juego(jugador1,jugador2);
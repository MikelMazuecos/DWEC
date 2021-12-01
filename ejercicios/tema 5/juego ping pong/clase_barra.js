export class barra{
    constructor(posicionX, posicionY,ancho,largo){
        this.x = posicionX;
        this.y = posicionY;
        this.ancho = ancho
        this.largo = largo
        this.velocidad = 15;
    }

    mueve(altoContenedor, velocidad)
    {
        this.y += velocidad;    

        if (this.y < 0 || (this.y+this.largo) > altoContenedor) {
            this.y = (this.y < 0) ? 0: altoContenedor - this.largo;
        }
    }
}
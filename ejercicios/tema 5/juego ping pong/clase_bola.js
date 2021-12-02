export class bola{
    constructor(radio, posicionX, posicionY, velocidadX, velocidadY){
        this.radio = radio;
        this.x = posicionX;
        this.y = posicionY;
        this.vX = velocidadX;
        this.vY = velocidadY;
        this.xI = posicionX;
        this.yI = posicionY;
        this.marcadorIz = 0
        this.marcadorDe = 0
    }

    reset(){
        this.x = this.xI;
        this.y = this.yI;
    }

    mueve(anchoContenedor, altoContenedor)
    {

        this.x += this.vX;
        this.y += this.vY;
        
        // Comprobamos ahora si está fuera de los límites
        // Eje X
        if (this.x<=0){
            this.reset();
            return 'I'
        }

        if(this.x >= anchoContenedor){
            this.reset();
            return 'D'
        }
        
        // Eje Y
        if (this.y-this.radio <=0 || this.y+this.radio >= altoContenedor )
        {
            this.vY *= -1;
            this.y  = (this.y-this.radio<=0) ? this.radio: altoContenedor-this.radio;
        }
    }

    chocaDerecha(barra){
        let posAnteriorX = this.x;
        let posAnteriorY = this.y;

        if((barra.x<=this.x+this.radio) && (!(this.y+this.radio <= barra.y) && !(this.y-this.radio>=barra.y+barra.largo))){
            this.vX *=-1;

            this.x = posAnteriorX - 10;
            this.y = posAnteriorY;
        }
    }

    chocaIzquierda(barra){
        let posAnteriorX = this.x;
        let posAnteriorY = this.y;

        if((barra.x+barra.ancho>=this.x-this.radio) && (!(this.y+this.radio <= barra.y) && !(this.y-this.radio>=barra.y+barra.largo))){
            this.vX *=-1;

            this.x = posAnteriorX + 10;
            this.y = posAnteriorY;
        }

        if((this.y+this.radio >= barra.y || this.y-this.radio <= barra.y+barra.largo) && (this.x-this.radio <= barra.x+barra.ancho)){
            this.vy *= -1;
        }
    }
}
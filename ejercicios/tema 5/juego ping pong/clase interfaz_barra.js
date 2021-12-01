export class interfaz_barra{
    constructor(barra,svgContenedor){
        this.barra = barra;
        this.tagSquare = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.tagSquare.setAttributeNS(null,"x",this.barra.x)
        this.tagSquare.setAttributeNS(null,"y",this.barra.y)
        this.tagSquare.setAttributeNS(null,"height",this.barra.largo)
        this.tagSquare.setAttributeNS(null,"width",this.barra.ancho)
        this.tagSquare.setAttributeNS(null, "fill", "#FF0000");
        svgContenedor.appendChild(this.tagSquare);
    }

    dibuja()
    {
        this.tagSquare.setAttributeNS(null, "y", this.barra.y);
    }
}
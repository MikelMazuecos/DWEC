export class interfaz_bola{
    constructor(bola,color,svgContenedor){
        // Creación del tag
        this.bola = bola;
        this.color = color
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tagCircle.setAttributeNS(null, "fill", this.color);
        this.tagCircle.setAttributeNS(null, "cx", bola.x);
        this.tagCircle.setAttributeNS(null, "cy", bola.y);
        this.tagCircle.setAttributeNS(null, "r", bola.radio);
        svgContenedor.appendChild(this.tagCircle);
    }

    dibuja()
    {
        this.tagCircle.setAttributeNS(null, "cx", this.bola.x);
        this.tagCircle.setAttributeNS(null, "cy", this.bola.y);
    }
}
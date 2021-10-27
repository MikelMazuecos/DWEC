class Alumnos{
    constructor(nombre,apellidos,curso)
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
    }

    imprimedatos()
    {
        console.log(`el alumno ${this.nombre} ${this.apellidos} peretenece al curso ${this.curso}`);
    }

    despertar(segundos)
    {
        setTimeout(()=>{
            console.log(`acaba de despertarse ${this.nombre}`)
        } ,segundos*1000)
    }
}

class AlumnoCiclos extends Alumnos{
    constructor(nom,ape,curso,nivelfrikismo)
    {
        super(nom,ape,curso)
        this.nivelfrikismo = nivelfrikismo;
    }

    getInfor()
    {
        super.imprimedatos()
        console.log(` y su nivel de friki es ${this.nivelfrikismo}`)
    }
}

let al1 = new Alumnos("Carlos","Moreno","2DAW");
al1.imprimedatos();
let al2 = new Alumnos("Mikel","Mazuecos","2DAW");
al2.imprimedatos();
let al3 = new AlumnoCiclos("Antonio","Martinez","2DAW",100);
al3.getInfor();
al1.despertar(2);
al2.despertar(3);



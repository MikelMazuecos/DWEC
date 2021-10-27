function lanzamiento()
{
    return Math.floor(Math.random() * (7 - 1) + 1);
}

uno = 0;
dos = 0;
tres = 0;
cuatro = 0;
cinco = 0;
seis = 0;

for(let i=0;i<6000;i++)
{   
    tirada = lanzamiento();
    if(tirada == 1)
        uno += 1;
    if(tirada == 2)
        dos += 1;
    if(tirada == 3)
        tres += 1;
    if(tirada == 4)
        cuatro += 1;
    if(tirada == 5)
        cinco += 1;
    if(tirada == 6)
        seis += 1; 
}

document.write(("unos: " + uno + "<br>" + "doses: " + dos + "<br>" + "treses: " + tres + "<br>" + 
"cuatros: " + cuatro + "<br>" + "cincos: " + cinco + "<br>" + "seises: " + seis + "<br>")
);


function numeroAleatorio()
{
    return Math.floor(Math.random() * (7 - 1) + 1);
}

function lanzarDado()
{
    return numeroAleatorio();
}

doses = 0
treses = 0
cuatros = 0
cincos = 0
seises = 0
sietes = 0
ochos = 0
nueves = 0
dieces = 0
onces = 0
doces = 0

for(i=0;i<36000;i++)
{
    lanzamiento = lanzarDado() + lanzarDado();

    if (lanzamiento == 2)
        doses += 1;
    if (lanzamiento == 3)
        treses += 1;
    if (lanzamiento == 4)
        cuatros += 1;
    if (lanzamiento == 5)
        cincos += 1;
    if (lanzamiento == 6)
        seises += 1;
    if (lanzamiento == 7)
        sietes += 1;
    if (lanzamiento == 8)
        ochos += 1;
    if (lanzamiento == 9)
        nueves += 1;
    if (lanzamiento == 10)
        dieces += 1;
    if (lanzamiento == 11)
        onces += 1;
    if (lanzamiento == 12)
        doces += 1;
}

document.write("doses: " + doses + "<br>" + "treses: " + treses + "<br>" +
"cuatros: " + cuatros + "<br>" + "cincos: " + cincos + "<br>" + "seises: " + seises + "<br>" +
"sietes: " + sietes + "<br>" + "ochos: " + ochos + "<br>" + "nueves: " + nueves + "<br>" +
"dieces: " + dieces + "<br>" + "onces: " + onces + "<br>" + "doces: " + doces + "<br>");
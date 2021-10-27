function lanzamiento()
{
    return Math.floor(Math.random() * (7 - 1) + 1);
}

document.write(lanzamiento())
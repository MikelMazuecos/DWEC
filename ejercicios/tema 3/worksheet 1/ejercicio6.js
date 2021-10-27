function calcularPotencia(base,exp)
{
    if(exp == 0)
    return 1;
    else
    return base * calcularPotencia(base,(exp - 1));
}

document.write(calcularPotencia(2,4));
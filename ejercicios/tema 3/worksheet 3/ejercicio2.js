nombres = ["Mikel","Juan","Carlos","Jose","David"];
letra = "J";
nombres.forEach(palabra => {
    console.log(`la letra "${letra}" ${palabra.includes(letra) ? 'esta' : 'no esta'} en el nombre ${palabra}`);
});
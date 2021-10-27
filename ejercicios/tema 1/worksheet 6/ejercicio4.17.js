for (let i = 1; i <= 10; i++)
{
    document.write(`<b>tabla del ${i}: <br></b>`)

    for (let j = 1; j <= 10; j++)
    {
        let resultado = i * j
        document.write(`${i} x ${j} = ${resultado} <br>`)
    }
    document.write("<br>") 
}
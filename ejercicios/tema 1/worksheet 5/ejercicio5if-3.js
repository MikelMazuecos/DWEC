edad = parseInt(prompt("dime tu edad"))

if(edad < 5)
{
    alert("vas al jardin de infancia")
}
else{
    if(edad >=6 && edad <=11)
    {
        alert("vas a primaria")
    }
    else{
        if(edad >=12 && edad <=16)
        {
            alert("vas a la eso")
        }
        else{
            if(edad >=17 && edad <= 21)
            {
                alert("vas a bachillerato o ciclo")
            }
            else{
                if(edad > 21)
                    {
                        alert("vas a la universidad")
                    }
            }
        }
    }
}
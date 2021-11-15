const max_age = 100;
resultado = 0;

function calculateSupply(age, amount_per_day) 
{
    resultado = (max_age - age) * (amount_per_day * 365);
    console.log("you will need " + resultado + " to last you until the ripe old age of " + max_age);
}

calculateSupply(30,2);
calculateSupply(45,3);
calculateSupply(18,5);
function maximo(v1,v2,v3,v4)
{
    if(v1 > v2 && v1 > v3 && v1 > v4)
        return v1
    else
    if(v2 > v1 && v2 > v3 && v2 > v4)
        return v2
        else
        if(v3 > v1 && v3 > v2 && v3 > v4)
            return v3
            else
            return v4  
}

document.write(maximo(24,12,65,8))

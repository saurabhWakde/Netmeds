var temp=1;
setInterval(function()
{
    document.getElementById('radio'+temp).checked=true;
    temp++;
    if(temp>4)
    {
        temp=1;
    }
},4000);
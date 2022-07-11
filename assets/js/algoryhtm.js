var span = document.getElementById('return');
var tramer=document.getElementById('tramer');
var year=document.getElementById('year');



function calculate()
{
    

//try catch to check proper values

if(year== 0)
{
    
    span.innerHTML ="Invalid format";
}
else if(year== 1)
{
    tramer = (tramer/100)*125;
}
else if(year== 2)
{
    tramer = tramer;
    
}
else if(year== 3)
{
    tramer = (tramer/100)*125;
    
}
else if(year== 4)
{
    tramer = (tramer/100)*50;
    
}
else if(year== 5)
{
    tramer = (tramer/100)*50;

}

if(damage == 1)
{
    tramer= (tramer/100)*75;
}
if(accident == 1)
{
    tramer= (tramer/100)*75;
}






}

function calculate2()
{
document.getElementById("return").innerHTML = "hello";   
}

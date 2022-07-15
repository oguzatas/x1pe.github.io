

function calculate()
{
    var tramer=document.getElementById('tramer');
    var putout = document.getElementById('output');
    var year=document.getElementById('year');
    var hata = document.getElementById('eror');
    var model = document.getElementById('model');
    

    var temp;
    

//try catch to check proper values
if(tramer.value <= 0)
{
    putout.innerHTML="Lütfen geçerli bir tramer kaydı belirtin.";
   putout.style ="visibility:visible;";
   putout.className = "alert alert-danger";
}
else 
{
if(model.value == 0)
{
    putout.innerHTML="Lütfen geçerli bir marka seçin.";
   putout.style ="visibility:visible;";
   putout.className = "alert alert-danger";
}
else
{

if(year.value== 0)
{
    
    putout.innerHTML ="Lütfen Geçerli bir Yıl Seçin.";
    putout.style ="visibility:visible;";
   putout.className = "alert alert-danger";
}
else 
{
if(year.value== 1)
{
    temp = (tramer.value/100)*125;
}
else if(year.value== 2)
{
    temp = tramer.value;
    
}
else if(year.value== 3)
{
    temp = (tramer.value/100)*125;
    
}
else if(year.value== 4)
{
    temp = (tramer.value/100)*50;
    
}
else if(year.value== 5)
{
    temp = (tramer.value/100)*50;

}

if(document.getElementById("damage").checked == true)
{
    temp = (tramer.value/100)*75;
}
if(document.getElementById("accident").checked == true)
{
    temp = (tramer.value/100)*75;
}




    
   putout.innerHTML="Aracınızdaki değer kaybı:"+temp +"TL";
   putout.style ="visibility:visible;";
   putout.className = "alert alert-success";

   
   
}
}
}
}

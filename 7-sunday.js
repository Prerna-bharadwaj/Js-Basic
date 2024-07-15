for(let year= 2014; year<=2050; year++)
{
    var a=new Date(year,0,1);
    if(a.getDay()==0)
        console.log("1st January is being a Sunday" + year);
}
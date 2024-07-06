var count = 0;
var timer1 = undefined;
var a =["red","black","yellow","blue","green"];


window.onload = function ()
{
    timerfun();
    setInterval(timerfun,1000);
}
function timerfun(){
    if (count >= a.length) {
        count = 0;
    }
   document.getElementById("bg").style.backgroundColor = a[count];
   count++;
}
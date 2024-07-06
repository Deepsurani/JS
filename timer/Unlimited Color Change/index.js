var count = 0;
var timer = undefined;

window.onload = function()
{
    timerfun1();
    setInterval(timerfun1,1000);
}
var color = 100;
function timerfun1() {
    var RandomColor = Math.floor(Math.random() * (999999 - 100000) + 100000);
    document.getElementById("bg").style.backgroundColor = "#"+RandomColor;
    // color++;
   
    
}
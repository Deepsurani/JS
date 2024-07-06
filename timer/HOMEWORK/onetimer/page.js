var Count =0;
var Count1=0;
var Timer1 =undefined
function TimerFun()
{
    lbl1.innerHTML =Count;
    lbl2.innerHTML =Count1;
    if (lbl1.innerHTML =="10") {
        lbl1.innerHTML ="10";
        Count1++;

    }
    else{
        Count++
    }
   if (lbl2.innerHTML =="10") {
    clearInterval(Timer1);
   }
}
function btn1click() {
    if (Timer1 == undefined) {
        Timer1 = setInterval(TimerFun, 100);
   
    }

}    
var Count = 10;
var Timer1=undefined;

function TimerFun()
{
    lbl1.innerHTML=Count;
    if (Count == 0) {
        clearInterval(Timer1);
    }
    Count--;



}
function btn1click() {
    if (Timer1 == undefined) {
        Timer1 = setInterval(TimerFun, 100);
    }

}  
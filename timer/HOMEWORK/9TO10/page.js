var Count = 0;
var Timer1 = undefined;

function TimerFun() {
    Count++;
    lbl1.innerHTML = Count;
    if (Count == 10) {
        clearInterval(Timer1);
        Timer1 =undefined;
    }
}

function btn1click() {
    if (Timer1 == undefined) {
        Timer1 = setInterval(TimerFun, 100);
   
    }

}       
var count = 10;
var Timer1 = undefined;

window.onload = function () {};

function TimerFun1() 
{
    lbl1.innerHTML = --count;
    
    if(count == 0)
        {
            clearInterval(Timer1);
            Timer1 = undefined;
        }
}

function btn1Click() {
    if (Timer1 == undefined)
     {
        count = 10;
      Timer1 = setInterval(TimerFun1, 100);
     }
   
  }
  
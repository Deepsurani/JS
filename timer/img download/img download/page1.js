var count = 0;
var count1 = 0;
var Timer1 = undefined;
var Timer2 = undefined;

window.onload = function () {
  sec20.style.display = "none";
  link.style.display = "none";
  sec10.style.display = "none";
};

function Timer1Fun() {
  lbl1.innerHTML = count++;


  if (lbl1.innerHTML == 20) {
  
    clearInterval(Timer1);
    Timer1 = undefined;
  
    link.style.display = "block";
    sec10.style.display = "block";
    Timer2 = setInterval(Timer2Fun, 200);
    count1=0;
  }
  if (lbl1.innerHTML==20) {
   count++;
  
  }
  if (lbl1.innerHTML==40) {
    clearInterval(Timer1);
     
    link.style.display = "block";
    sec10.style.display = "block";
    Timer2 = setInterval(Timer2Fun, 2000);
    count1=0;
 }  
}

function Timer2Fun() {
  lbl2.innerHTML = count1++;
  if (lbl2.innerHTML == 10) {
    clearInterval(Timer2);
    Timer2 = undefined;
    count1 = 0;
    link.style.display = "none";
    sec10.style.display = "none";
    sec20.style.display = "none";
  }
}

function btn1Click() {
  if (Timer1 == undefined) {
    Timer1 = setInterval(Timer1Fun, 100);
  }
  sec20.style.display = "block";
}

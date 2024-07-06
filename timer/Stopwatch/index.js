var count1 = 0;
var count2 = 0;
var count3 = 0;
var timer = undefined;

function timerfun1() {
    if (lbl1.innerHTML != "60") {
        lbl1.innerHTML = parseInt(lbl1.innerHTML) + 1;
    }
    else if (lbl2.innerHTML != "60") {
        lbl2.innerHTML = parseInt(lbl2.innerHTML) + 1;
        lbl1.innerHTML = "0";
    }
    else if (lbl3.innerHTML != "60") {
        lbl3.innerHTML = parseInt(lbl3.innerHTML) + 1;
        lbl2.innerHTML = "0";
    }
}
function btn1Click() {
    if (timer == undefined) {
        timer = setInterval(timerfun1, 1);
    }
}
function btn2Click() {
    clearInterval(timer);
    timer = undefined;
}
function btn3Click() {
    clearInterval(timer);
    timer = undefined;
    count1 = 0;
    count2 = 0;
    count3 = 0;
    lbl1.innerHTML = count1;
    lbl2.innerHTML = count2;
    lbl3.innerHTML = count3;
}
function btn4Click() {
  lbl4.innerHTML =  lbl3.innerHTML  + lbl2.innerHTML + ":" + lbl1.innerHTML +  "<br>" + lbl4.innerHTML;
}


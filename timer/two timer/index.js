var timer = undefined;
var count = 0;
var count2 = 0;
function timerfun1() {
    
    // count++;
    lbl1.innerHTML = count;
    lbl2.innerHTML = count2;


    if (lbl1.innerHTML == "10")
         {
            lbl1.innerHTML = "10";
            count2++;
         }
    else
    {
        count++;
    }
    if(lbl2.innerHTML == "10")
    {
     clearInterval(timer);
    }
}

function btn1click() {
    if (timer == undefined) {
        timer = setInterval(timerfun1,100);
    }
}
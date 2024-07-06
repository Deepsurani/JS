var Cuont = 0;
var Timer1 = undefined;
var img = ["s1.png","s1.png","s3.png","s4.png","1.jpg", "2.JPG"];
window.onload = function () {
    timerfun();
    setInterval(timerfun, 1000);
}
function timerfun() {   
   // var randomimg = Math.floor(Math.random() * (img.length));
    //console.log(randomimg);
    bd.style.background= "url(/image/" + img[Cuont] + ")";
    Cuont++;
    if (Cuont>img.length-1) {
        Cuont=0;
    }
}
var img=["url("+"../../Drawable/Myself/food_3.jpg"+")",
    "url("+"../../Drawable/Myself/food_1.jpg"+")",
    "url("+"../../Drawable/Myself/food_2.jpg"+")"];
var i=0;
window.onload=function image(){
    //alert(3);
    var back=document.getElementById("background");
    back.style.background=img[i];
    setTimeout(function(){
        if(i<3) {
            i += 1;
            image();
        }else {
            i=0;
            image();
        }
    },2000);
};



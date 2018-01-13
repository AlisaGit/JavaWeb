var img=["url("+"../../Drawable/Myself/dogPhoto_6.png"+")",
    "url("+"../../Drawable/Myself/dogPhoto_3.png"+")",
    "url("+"../../Drawable/Myself/dogPhoto_2.png"+")",
    "url("+"../../Drawable/Myself/dogPhoto_9.png"+")"
];
var pChar=["An honest man is not"+ "<br/>"+"the worse because"+"<br/>"+"a dog barks at him.",
    "Three things it is best to avoid:"+ "<br/>"+"a strange dog, a flood, "+"<br/>"+"and a man who thinks he is wise.",
    "The greater love is a mother's; "+ "<br/>"+" then comes a dog's;"+"<br/>"+"then a sweetheart's.",
    "The dog wags his tail, "+ "<br/>"+"not for you, "+"<br/>"+"but for your bread."];
var i=0;
window.onload=function image(){
    //alert(3);
    var back=document.getElementById("background");
    var p=document.getElementById("pId");
    p.innerHTML=pChar[i];
    p.style.background.width=window.innerWidth;
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


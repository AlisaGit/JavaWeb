window.onload=function(){

    drawPath(600,400,6,20);

};
function drawPath(x,y,n,radius){
    var canvas=document.getElementById("draw");
    var context=canvas.getContext("2d");
    context.width=800;
    context.height=670;
    var angle=Math.PI*2/n;
    context.save();
    context.fillStyle="gray";
    context.moveTo(x,y);
    context.beginPath();
    for(var index=0;index<n;index++){
        context.rotate(angle);
        context.lineTo(0,-radius);
    }
    context.closePath();
    context.fill();
    context.restore();
}
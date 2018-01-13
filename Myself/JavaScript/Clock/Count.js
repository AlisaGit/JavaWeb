var margin_left=0;
var margin_top=0;
var radius=4;
var hour=0;
var minute=0;
var second=0;
var ball=[];
var color=["#FF0000","#4EFEB3","#28FF28","#F9F900","#FF79BC","#BE77FF","#FF9797"];
var position;
var hourLength=0;
var getCurTime=0;
var endTime=new Date(2018,0,1,0,0,0);
window.onload=function  count(){
    var canvas=document.getElementById("clock");
    var context=canvas.getContext("2d");
    getCurTime=getTime();
    setInterval(function(){
        draw(context);
        update();
    },50);
};
function getTime(){
    var curTime=new Date();
    var ret=endTime.getTime()-curTime.getTime();
    ret=Math.round(ret/1000);
    return ret;
}
function update() {
    var nextTime = getTime();
    var nextSecond=nextTime%60;
    var nextHour=parseInt(nextTime/3600);
    var nextMinute=parseInt((nextTime-nextHour*3600)/60);

    if (second!=nextSecond) {

        if(parseInt(nextMinute/10)!=parseInt(minute/10)){
            addBall(margin_left + 15 * (position-4) * 4.5, margin_top, parseInt(nextMinute/10));
        }
        if((nextMinute%10)!=(minute%10)){
            addBall(margin_left + 15 * (position-3) * 4.5, margin_top, parseInt(nextMinute%10));
        }
        if(second%10!=nextSecond%10){
            addBall(margin_left + 15 * position * 4.5, margin_top, parseInt(second % 10));
        }
        if(parseInt(second/10)!=parseInt(nextSecond/10)){
            addBall(margin_left + 15 * (position-1) * 4.5, margin_top, parseInt(second / 10));
        }
        getCurTime=nextTime;
    }
    updatePosition();


}
function updatePosition(){
    for(var i=0;i<ball.length;i++){
        ball[i].x+=ball[i].vx;
        ball[i].y+=ball[i].vy;
        ball[i].vy+=ball[i].g;
    if(ball[i].y>400){
        ball[i].y=400-radius;
        ball[i].vy=-ball[i].vy*0.75;
    }
    }
}
function addBall(xPosition,yPosition,num){
    for(var i=0;i<numberic[num].length;i++) {
        for (var j = 0; j < numberic[num][i].length; j++) {
            if (numberic[num][i][j] == 1) {
                var new_ball = {
                    x: xPosition+j *2*(radius+1),
                    y: yPosition+i *2*(radius+1) + (radius+1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000))*4,
                    vy: -5,
                    cor: color[Math.floor(Math.random() * color.length)]
                };
                ball.push(new_ball);
            }
        }
    }
}
function draw(con){
    //刷新屏幕
    con.clearRect(0,0,1024,700);
    minute=parseInt((getCurTime-parseInt(getCurTime/3600)*3600)/60);
    second=getCurTime%60;
    var distance=0;
    hour=(parseInt(getCurTime/3600)).toString();
    hourLength=hour.length;
    hour=parseInt(hour);
    for(;hourLength>0;hourLength--){
        drawNumber(margin_left+15*distance*4.5,margin_top,parseInt(hour/(Math.pow(10,hourLength-1))),con);
        hour=parseInt(hour%(Math.pow(10,hourLength-1)));
        distance+=1;
    }
    drawNumber(margin_left+15*distance*4.5,margin_top,10,con);
    distance+=1;
    drawNumber(margin_left+15*distance*4.5,margin_top,parseInt(minute/10),con);
    distance+=1;
    drawNumber(margin_left+15*distance*4.5,margin_top,parseInt(minute%10),con);
    distance+=1;
    drawNumber(margin_left+15*distance*4.5,margin_top,10,con);
    distance+=1;
    drawNumber(margin_left+15*distance*4.5,margin_top,parseInt(second/10),con);
    distance+=1;
    drawNumber(margin_left+15*distance*4.5,margin_top,parseInt(second%10),con);
    position=distance;
    for(var indexBall=0;indexBall<ball.length;indexBall++){
        con.fillStyle=ball[indexBall].cor;
        con.beginPath();
        con.arc(ball[indexBall].x,ball[indexBall].y,8,0,2*Math.PI);
        con.closePath();
        con.fill();
    }
}
//画数字
function drawNumber(left,top,time,con){
    con.fillStyle="#66B3FF";
    for(var i=0;i<numberic[time].length;i++)
        for(var j=0;j<numberic[time][i].length;j++){
            if(numberic[time][i][j]==1){
                con.beginPath();
                con.arc(left+j*2*(radius+1)+(radius+1),top+i*2*(radius+1)+(radius+1),radius,0,2*Math.PI,true);
                con.closePath();
                con.fill();
            }
        }

}

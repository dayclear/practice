var WINDOW_WIDTH =600;
var WINDOW_HEIGHT = 400;
var RADIUS = 3;
var MARGIN_TOP = 100;
var MARGIN_LEFT = 40;
var balls=[];
const colors=["#33B5E5","#09C","#A6C","#93C","#9C0","#690","#FB3","#F80","#F44","#C00"];
var date=new Date();
var currentTime=Math.round(date.getTime()/1000);
window.onload=function(){
    var canvas=document.getElementById("canvas");
    canvas.width=WINDOW_WIDTH;
    canvas.height=WINDOW_HEIGHT;
    var context=canvas.getContext("2d");
    setInterval(function(){
        update();
        show(context);
    },100);
};
function update(){
    var date2=new Date();
    var nextHours=date2.getHours();
    var nextMinutes=date2.getMinutes();
    var nextSeconds=date2.getSeconds();
    var nextTime=Math.round(date2.getTime()/1000);
    var currentHours=date.getHours();
    var currentMinutes=date.getMinutes();
    var currentSeconds=date.getSeconds();
    if(parseInt(currentHours/10)!=parseInt(nextHours/10)){
        addBalls(MARGIN_LEFT , MARGIN_TOP,(nextSeconds%10) );
    }
    if((currentHours%10)!=(nextHours%10)){
        addBalls(MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP,(nextSeconds%10) );
    }
    if(parseInt(currentMinutes/10)!=parseInt(nextMinutes/10)){
        addBalls(MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP,(nextSeconds%10) );
    }
    if((currentMinutes%10)!=(nextMinutes%10)){
        addBalls(MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP,(nextSeconds%10) );
    }
    if(parseInt(currentSeconds/10)!=parseInt(nextSeconds/10)){
        addBalls(MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP,(nextSeconds%10) );
    }
    if((currentSeconds%10)!=(nextSeconds%10)){
        addBalls(MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP,(nextSeconds%10) );
    }
    if(nextTime != currentTime){
        date=date2;
    }
    updateBalls();
}
function updateBalls() {
    for(var i=0;i<balls.length;i++){
        balls[i].x+=balls[i].vx;
        balls[i].y+=balls[i].vy;
        balls[i].vy+=balls[i].g;
        if(balls[i].y>=WINDOW_HEIGHT-RADIUS){
            balls[i].y=WINDOW_HEIGHT-RADIUS;
            balls[i].vy=-balls[i].vy*0.6;
        }
    }
    var n=0;
    for(var k=0; k<balls.length;k++){
        if(balls[k].x+RADIUS>0){
           balls[n++]=balls[k];
        }
    }
    while(balls.length>n){
        balls.pop();
    }
}
function addBalls(x,y,num){
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++) {
            if (digit[num][i][j] == 1) {
                var aBall = {
                    x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                    y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -5,
                    color: colors[Math.floor(Math.random() * colors.length)]
                };
                balls.push(aBall);
            }
        }
    }
}
function show(cxt){
    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    showDigit( MARGIN_LEFT , MARGIN_TOP , parseInt(hours/10) , cxt );
    showDigit( MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP , hours%10 , cxt );
    showDigit( MARGIN_LEFT + 30*(RADIUS + 1) , MARGIN_TOP , 10 , cxt );
    showDigit( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(minutes/10) , cxt);
    showDigit( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , minutes%10 , cxt);
    showDigit( MARGIN_LEFT + 69*(RADIUS+1) , MARGIN_TOP , 10 , cxt);
    showDigit( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(seconds/10) , cxt);
    showDigit( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , seconds%10 , cxt);
    for(var i=0;i<balls.length;i++){
        cxt.fillStyle=balls[i].color;
        cxt.beginPath();
        cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI);
        cxt.closePath();
        cxt.fill();
    }
}
function showDigit(x,y,num,cxt){
    cxt.fillStyle = "#0cb2e8";//数字颜色
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                cxt.beginPath();
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
            }
        }
    }
}
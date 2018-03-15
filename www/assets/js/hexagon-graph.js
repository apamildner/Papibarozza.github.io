var pi = new Image();
pi.src='www/assets/img/svg/pi.svg'
var grad = new Image();
grad.src = 'www//assets/img/svg/black.svg'
var images = [pi, grad];
//var data_points = {a:4, b:2, c:2, d:4, e:0, f:3, g:4}
//var colorData = {hexagonColor:"#ffa630",dataLineColor:"#FFFFFF"}
//var hexagonData= {centerX: 150, centerY:150, radius:130, canvasSize:300, color:colorData.hexagonColor}

$(document).ready(function draw(){
    var canvas = $('#js-hexagon-canvas')[0];
    var ctx = canvas.getContext('2d');

//    var radius= hexagonData.radius;
    for(i=0; i<4; i++){
        var hexagon = hexagonData;
       
        drawHexagon(hexagon,ctx);
        hexagon.radius-=30;           
    }
    animate();
       
})

function getDataPoints(data_points,hexagonData){ 
    var radius=130,centerX=hexagonData.centerX,centerY=hexagonData.centerY;   
    var angle=0;  
    var path = [];
   
    var dataValueArray= Object.values(data_points);
   
    for (index in dataValueArray){
        var data_value= dataValueArray[index];            
        var xC= centerX + (radius-30*(4-data_value))*Math.cos(angle);
        var yC= centerY +  (radius-30*(4-data_value))*Math.sin(angle);
        path.push({x:xC,y:yC})
        angle+=Math.PI/3;                              
        console.log(path);                 
    }
return path;
 


}

//Draws a hexagon with the given hexagon object and a specified canvas.

function drawHexagon(hexagonData,ctx){
    var color=hexagonData.color, canvasSize=hexagonData.canvasSize,radius=hexagonData.radius,centerX=hexagonData.centerX,centerY=hexagonData.centerY;   
    var angle=0,x,y;
    ctx.beginPath();
    ctx.strokeStyle  = color;
    ctx.shadowColor = "rgb(210, 135, 121)";
    ctx.shadowOffsetX = 2; 
    ctx.shadowOffsetY = 2;
    
for (side=0; side < 8; side++) {   
    x= centerX + radius*Math.cos(angle);
    y= centerY +  radius*Math.sin(angle);
    ctx.lineTo(x ,y);
    ctx.lineWidth= 4;
    ctx.stroke();
    angle+=Math.PI/3;
}

}
function drawImages(images,ctx,hexagonData){
    var radius=hexagonData.radius,centerX=hexagonData.centerX,centerY=hexagonData.centerY;   
    var angle=0,x,y;
    ctx.beginPath();
for (i=0; i < 8; i++) {   
    x= centerX + radius*Math.cos(angle);
    y= centerY +  radius*Math.sin(angle);
    ctx.drawImage(images[i],x,y);  
    angle+=Math.PI/3;
}


}




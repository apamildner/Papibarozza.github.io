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
        hexagon.radius-=hexagonData.radiusDecrement;          
    }
    
    ctx.strokeStyle = "black"
    ctx.lineWidth = 10;
    ctx.shadowColor = "rgba(210, 135, 121, 0)";
    ctx.font = "bold 20px Raleway"
    
    ctx.fillText("Mathematics",55,35);

    ctx.fillText("Front end",265,35)
    ctx.fillText("Development",265,55)

    ctx.fillText("Machine",315,150)
    ctx.fillText("Learning",315,165);

    ctx.fillText("Neural",0,150);
    ctx.fillText("Networks",0,165);

    ctx.fillText("Coffe",265,265)
    ctx.fillText("Drinking",265,282)

    ctx.fillText("Backend",55,265)
    ctx.fillText("Development",55,282)

   animate();

    /*
    vertices.forEach(function(point){
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(point.x,point.y,10,0,2*Math.PI);
        ctx.fill();
    })
    */
    
       
})

function getDataPoints(data_points,hexagonData){ 
    var radius=hexagonData.radius,centerX=hexagonData.centerX,centerY=hexagonData.centerY;   
    var angle=0;  
    var path = [];
   
    var dataValueArray= Object.values(data_points);
   
    for (index in dataValueArray){
        var data_value= dataValueArray[index];            
        var xC= centerX + (radius-hexagonData.radiusDecrement*(4-data_value))*Math.cos(angle);
        var yC= centerY +  (radius-hexagonData.radiusDecrement*(4-data_value))*Math.sin(angle);
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
    //ctx.shadowColor = "rgb(210, 135, 121)";
    ctx.shadowColor = "rgba(0, 0, 0,0.1)";
    ctx.shadowOffsetX = 3; 
    ctx.shadowOffsetY = 7;
    ctx.shadowBlur = 4;

    
for (side=0; side < 8; side++) {   
    x= centerX + radius*Math.cos(angle);
    y= centerY +  radius*Math.sin(angle);
    ctx.lineTo(x ,y);
    ctx.lineWidth= 3;
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




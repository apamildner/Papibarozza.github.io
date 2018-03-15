

// calculate incremental points along the path
//var data_points = {a:4, b:2, c:2, d:4, e:0, f:3, g:4}
//var colorData = {hexagonColor:"#ffa630",dataLineColor:"#FFFFFF"}
//var hexagonData= {centerX: 150, centerY:150, radius:130, canvasSize:300, color:colorData.hexagonColor}
//var vertices=getDataPoints(data_points,hexagonData)
//var points=calcWaypoints(vertices);


// calc waypoints traveling along vertices
function calcWaypoints(vertices){
  var waypoints=[];
  for(var i=1;i<vertices.length;i++){
      var pt0=vertices[i-1];
      var pt1=vertices[i];
      var dx=pt1.x-pt0.x;
      var dy=pt1.y-pt0.y;
      for(var j=0;j<100;j++){
          var x=pt0.x+dx*j/100;
          var y=pt0.y+dy*j/100;
          waypoints.push({x:x,y:y});
      }
  }
  return(waypoints);
}

// variable to hold how many frames have elapsed in the animation
// t represents each waypoint along the path and is incremented in the animation loop
var t=1;



  
//animate();

// incrementally draw additional line segments along the path
function animate(){
  var canvas = $('#js-hexagon-canvas')[0];
  var ctx = canvas.getContext('2d');
  ctx.shadowColor = "rgb(128, 128, 128)";
  //ctx.shadowOffsetX = 3; 
  //ctx.shadowOffsetY = 3;
  ctx.lineWidth= 3;
  ctx.strokeStyle= colorData.dataLineColor;
    if(t<points.length-1){ requestAnimationFrame(animate); }
    // draw a line segment from the last waypoint
    // to the current waypoint
    ctx.beginPath();
    ctx.moveTo(points[t-1].x,points[t-1].y);
    ctx.lineTo(points[t].x,points[t].y);
    ctx.stroke();
    // increment "t" to get the next waypoint
    t++;
}

//Put all global variables used here
var data_points = {a:3, b:4, c:4, d:3, e:3, f:4, g:3}
var colorData = {hexagonColor:"#95C85B",dataLineColor:"#8866CC"}
var hexagonData= {centerX: 200, centerY:150, radius:110, radiusDecrement:30, canvasSize:400, color:colorData.hexagonColor}
var vertices=getDataPoints(data_points,hexagonData)
var points=calcWaypoints(vertices);
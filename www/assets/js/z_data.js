
//Put all global variables used here
var data_points = {a:4, b:1, c:3, d:4, e:3, f:3, g:4}
var colorData = {hexagonColor:"#95C85B",dataLineColor:"#8866CC"}
var hexagonData= {centerX: 150, centerY:150, radius:130, canvasSize:300, color:colorData.hexagonColor}
var vertices=getDataPoints(data_points,hexagonData)
var points=calcWaypoints(vertices);
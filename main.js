var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');


ctx.shadowColor = 'rgba(0, 200, 0, 0.2)'
ctx.shadowOffsetX = -10;
ctx.shadowOffsetY = -20;
ctx.fillStyle = 'rgba(0, 0, 200, 1)'//color or rgba or hex-value 
ctx.fillRect(50, 50, 100, 100);
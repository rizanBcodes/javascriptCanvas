var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.bezierCurveTo(100, 100, 120, 120, 150, 50);
// ctx.lineTo(200, 150);

// console.log(ctx.isPointInPath(200, 200));

ctx.arc(100, 100, 50, 0, 3.14, false);
ctx.quadraticCurveTo(50, 50, 100, 100);
ctx.stroke();

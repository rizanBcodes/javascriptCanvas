var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');

// color or rgba or hex or gradient or pattern

// var img = new Image();
// img.src = 'texture.jpg';

// img.onload = function(){
//     var pattern = ctx.createPattern(img, 'repeat-y')

//     ctx.fillStyle = pattern;
//     ctx.fillRect(0, 0, 200, 200);
// }

ctx.lineWidth = 1000;
ctx.strokeRect(50, 50, 200, 200) 

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 200, 200) 
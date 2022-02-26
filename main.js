var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');

// ctx.scale(1, 1); // default 1 1

// ctx.translate(-20, 20);
ctx.transform(1, 0, 0, 1, 60 , 40);
ctx.scale(1, 1);
ctx.fillStyle = 'purple';
ctx.fillRect(20, 20, 60, 60);

ctx.setTransform(1, 0, 0, 1, 60, 40);
ctx.fillStyle = 'green';
ctx.fillRect(20, 100, 60, 60);
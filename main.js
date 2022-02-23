var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');

let hey = 'hey everybody this is text on canvas';

// ctx.fillStyle = ;
// ctx.textBaseline = '';
// ctx.textAlign = 'end';

ctx.font = 'bold 16px Arial, sans-serif';
ctx.fillText(hey, 50, 50);
ctx.strokeText(hey, 50, 50);
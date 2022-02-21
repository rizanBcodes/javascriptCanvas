
function elid(x){
    return document.getElementById(x);
}

function draw(){
    // var canvas = document.getElementById('my_canvas');
    var ctx = elid('my_canvas').getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 50, 70);
    ctx.strokeStyle = 'red';
    
    // console.log(ctx.canvas)

    ctx.strokeRect(50, 50, 50, 70);
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


draw();
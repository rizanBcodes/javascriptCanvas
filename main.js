var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');

var myImage = new Image();
myImage.src = 'lego.jpg';

myImage.onload = () => {
    ctx.drawImage(myImage, -165, -10, myImage.width, myImage.height, 10, 10, myImage.width, myImage.height);
}

// script to draw canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function draw(trigger)
{
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	
	ctx.fillStyle = trigger;
	ctx.fillRect(0, 0, 750, 75);
	ctx.fillRect(0, 0, 75, 450);
	
}
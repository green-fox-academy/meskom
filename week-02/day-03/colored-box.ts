'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

//ctx.fillStyle = 'red';
//ctx.fillRect(110, 110, 100, 100);
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 310);
ctx.lineTo(400, 310);
ctx.stroke();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(400, 310);
ctx.lineTo(400, 150);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(50, 150);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(50, 310);
ctx.stroke();


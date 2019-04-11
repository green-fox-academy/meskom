'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function goCenter(x: number, y: number) {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

let a: number = 0;
let b: number = 0;
for (let i: number = 0; i <= 600; i = i + 20) {

    b = i

    goCenter(b, a)
}
let b: number = 0;
for (let i: number = 0; i <= 400; i = i + 20) {

    a = i

    goCenter(b, a)
}
a = 400

for (let i: number = 0; i <= 600; i = i + 20) {

    b = i

    goCenter(b, a)
}

b = 600

for (let i: number = 0; i <= 400; i = i + 20) {

    a = i

    goCenter(b, a)
}


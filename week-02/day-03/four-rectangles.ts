'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function rect(x: number, y: number, z: number, v: number) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, z, v);
}

let x: number  = 20
let y: number = 11
let z: number = 15
let v: number = 10
rect(x, y, z, v)


for (let i: number = 1; i <= 4; i++) {
    x = i * 10
    y = i * 3
    z = i + 1
    v = i + 1
    rect(x, y, z, v)
}

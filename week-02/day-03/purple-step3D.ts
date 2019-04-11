'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function Box(x:number, size: number) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, x, size, size);
}
//let size: number = 10;

//Box(20,20)

let a: number = 0
let b: number = 0

  for (let i: number = 0; i <=100; i++) {
      a = a + i
      b = i  
      Box(a, b)
    }

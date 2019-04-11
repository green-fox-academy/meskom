'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function centerBox(size: number, color: string) {
    ctx.fillStyle = color; 
    ctx.fillRect(300-size/2, 200-size/2, size, size);
}
//let size: number = 15;
//let colors [] = ['red', 'blue','green','yellow'] 


//centerBox(100,'red')
let colors:string [] = ['red', 'blue','green','yellow']

  for (let i: number = 4; i >= 0 ; i--) {
      let s: number = 20*i+20
      //color = colors[i]
      centerBox(s,colors[i])
  }

'user strict'
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// function triangle_2 (a: number, b: number, s2: number){

//     ctx.beginPath();
//     ctx.moveTo(a, b);
//     ctx.lineTo(a + s2/2, b + (s2 * Math.sqrt(3)/2));
//     ctx.lineTo((a + s2), b);
//     ctx.lineTo(a, b);
//     ctx.stroke(); 
//  }
// //triangle_2 (200,200,200)

function triangle (x: number, y: number, s: number){

    if (s < 1) {
        return 
    }
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + s/2, y - (s * Math.sqrt(3)/2));
    //ctx.moveTo(x + s/2, y - (s * Math.sqrt(3)/2));
    ctx.lineTo((x + s), y);
    //ctx.moveTo((x + s), y);
    ctx.lineTo(x, y);
    ctx.stroke(); 
         //small
     triangle (x, y, s/2)
     triangle (x + s/4, y - (s * (Math.sqrt(3)/4)), s/2) 
     triangle (x + s/2, y, s/2)
 }
triangle (200, 400, 400)

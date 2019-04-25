'use strict';

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;
constructor(backgroundColor: string, text: string, textColor: string){
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
myPostIt(): void {
console.log(`this is a(n) ${this.backgroundColor} post-it with ${this.text +'  '+ this.textColor} text 
`);
}
}


 

const my1stPostit: PostIt = new PostIt('orange', 'Idea', 'blue');
my1stPostit.myPostIt();
const my2ndPostit: PostIt = new PostIt('blue', 'Awesome', 'pink');
my2ndPostit.myPostIt();
const my3rdPostit: PostIt = new PostIt('orange', 'superb', 'blue');
my3rdPostit.myPostIt();

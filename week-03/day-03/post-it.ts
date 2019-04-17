'user '

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
console.log(`this is a(n) ${this.backgroundColor} with ${this.text +'  '+ this.textColor} 
`);
}
}


 

const myFirstPostit: PostIt = new PostIt('orange', 'Idea', 'blue');
myFirstPostit.myPostIt();
/*const myPostit: PostIt = new PostIt('orange', 'Idea', 'blue';
const myPostit: PostIt = new PostIt('orange', 'Idea', 'blue';

myFirstTree.gimmeinfo();
*/
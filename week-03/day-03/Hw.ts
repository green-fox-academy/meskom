'user strict';

class Tree {
  type: string;
  leafColor: string;
  age: number;
  gender: string;
  isEvergreen: boolean;

  constructor(
    type: string,
    leafColor: string,
    gender: string,
    isEvergreen: boolean,
    age: number = 0
  ) {
    this.age = age;
    this.type = type;
    this.gender = gender;
    this.leafColor = leafColor;
    this.isEvergreen = isEvergreen;
    //this.type = type; 
  }

  gimmeinfo(): void {
    console.log(
      `Your tree is a(n) ${this.gender + ' ' + this.type} aged ${
      this.age
      } with ${this.leafColor} leaves and it is ${
      this.isEvergreen ? 'evergreen' : 'not evergreen'
      }`
    );
  }
}
const myFirstTree: Tree = new Tree('oak', 'greeeeen', 'female', false);
myFirstTree.gimmeinfo();


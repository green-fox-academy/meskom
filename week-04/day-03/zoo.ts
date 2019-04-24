' use strict';

abstract class Animals {
    name: string;
    age: number;
    breedType: string;
   
    constructor(name: string, age: number = 10, breedType: string ='') {
        this.name = name;
        this.age = age;
        this.breedType = breedType;

    }

    getName(): string {
        return this.name

    }

    breed(): string {
        return this.breedType

    }
    scream():void {

    }
    sleep():void {
    }

}
class Bird extends Animals {
 
    breedType: string = 'lying eggs'

}

class Reptile extends Animals {
    breedType: string = 'lying eggs'

}
class Mammal extends Animals{
    breedType: string = 'pushing miniature versions out.'
    
}


let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());


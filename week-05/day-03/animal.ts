'use strict';

export class Animals {
    ownerName: string;
    isHealty: boolean;
    healCost: number;
    name : string;

    constructor (ownerName: string,
        isHealty: boolean,
        healCost: number,
        name: string){
            this.ownerName = ownerName;
            this.isHealty = isHealty;
            this.healCost = healCost;
            this.name = name;
        }
        heal(){
            this.isHealty = true;
        }
        isAdoptable():boolean{
            if (this.isHealty !== true){
                return false
            }
            return true
        }
        toString(): string { if (this.isHealty !== true) {
            return ` ${this.name} is not healthy; ${this.healCost}$  (cost of heal) and not adoptable,\n`
            }
            return `${this.name} is healthy and adoptable,\n`

        }


}
//import { Animals } from "./animal";

export class Cat extends Animals {

    constructor(ownerName: string,
            isHealty: boolean,
            healCost: number = Math.floor(Math.random() * 7),
            name: string = 'cat' )
            {
            super(ownerName, isHealty, healCost, name)

            }
}

//import { Animals } from "./animal";

export class Dog extends Animals {

    constructor(ownerName: string,
            isHealty: boolean,
            healCost: number = Math.floor(Math.random() * 8) + 1,
            name: string = 'dog' )
            {
            super(ownerName, isHealty, healCost, name)

            }
}
//import { Animals } from "./animal";

export class Parrot extends Animals {

    constructor(ownerName: string,
            isHealty: boolean,
            healCost: number = Math.floor(Math.random() * 7) + 4,
            name: string = 'parrot' )
            {
            super(ownerName, isHealty, healCost, name)

            }
}
let kitty = new Cat ('Jhon', true);

//console.log(kitty.toString())
// console.log(kitty)
// let newDog = new Dog ('Jhon', true, 0);
// console.log(newDog)
// let newParrot = new Parrot ('Tom',false);
// console.log(newParrot)
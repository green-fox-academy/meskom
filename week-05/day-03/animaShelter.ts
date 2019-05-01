'use strict';


import { Cat, Dog } from "./animal";

import { Animals } from "./animal";


export class AnimalShelter {

    budget: number;
    adoptersName: string[];
    animals: Animals[];

    constructor(budget: number = 50, adoptersName: string[] = ['tom'], animals: Animals[] = [kitty]) {
        this.animals = animals;
        this.adoptersName = adoptersName;
        this.budget = 50;

    }
    rescue(ani: Animals): number {
        this.animals.push(ani)
        return this.animals.length
    }
    heal(): number {
        for (let i: number = 0; i < this.animals.length; i++) {
            if (this.animals[i].isHealty !== true && this.animals[i].healCost <= this.budget) {
                this.budget -= this.animals[i].healCost;
                this.animals[i].isHealty = true;
                this.animals[i].healCost = 0;
                return 1
            }
        } return 0
    }

    addAdopter(pName: string) {
        this.adoptersName.push(pName)

    }
    findNewOwner(): void {
        let i: number = Math.floor(Math.random() * this.adoptersName.length);
        let adName: string = this.adoptersName[i];
        let j: number = Math.floor(Math.random() * this.animals.length);
        let animalName: Animals = this.animals[j];
        console.log(` name of adopter: ${adName}   And the Lucky animal: ${shelter.animals[j]}`)
        if (animalName.isAdoptable) {
            this.adoptersName.splice(i, 1);
            this.animals.splice(j, 1);
        }
        //return ` name of adopter: ${adName} lucky animal: ${shelter.animals[j]}  remain ${this.adoptersName}  ${this.animals}`

    }
    earDonation(amount) {
        this.budget += amount;
        return this.budget;

    }
    toString() {
        let allString: any = '';
        for (let i: number = 0; i < this.animals.length; i++) {
            allString += this.animals[i].toString()
        }
        console.log(
            `Budget: ${this.budget}, \n
    There are ${this.animals.length} animal(s) and ${this.adoptersName.length} potential adopter(s) \n`
     , allString)
    }

    

}
let kitty = new Cat('jhon', true, 0);
//let newParrot = new Parrot ('joe',false);
let newDog = new Dog('Jhon', false);

let shelter = new AnimalShelter();

// shelter.addAdopter('terez');
shelter.rescue(newDog);
//shelter.rescue(newParrot);
// console.log(shelter.findNewOwner())

// console.log(shelter.adoptersName);
// console.log(shelter.animals);

//console.log(shelter.findNewOwner())

shelter.toString();

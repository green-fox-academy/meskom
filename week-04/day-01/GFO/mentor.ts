import { Person } from "./person";

export class Mentor extends Person {
    level: string;
    
    constructor (name?: string, age?: number, gender?: string,
    level: string ='intermediate')
    {
        super(name, age , gender)
        this.level = level;
    }
    introduce (): void {
    console.log (`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender},${this.level} mentor`)
    }
    getGoal(): void {
        console.log ("My goal is: Educate brilliant junior software developers")
    }
     
}




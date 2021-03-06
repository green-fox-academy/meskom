'use strict';
import { Person } from './person'

export class Student extends Person {

    previousOrganization: string;
    skippedDays: number;

    constructor(name?: string, age?: number, gender?: string,
        previousOrganization: string = 'The School of Live', skippedDays: number = 0) {
        super(name, age, gender)
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }
    introduce(): void {
        console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}, from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already. `)
    }
    getGoal(): void {
        console.log("My goal is: Be a junior software developer.")
    }
    skipDays(numberOfDays: number) {
        return this.skippedDays += numberOfDays
    }
}
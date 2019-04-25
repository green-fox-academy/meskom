'use strict';

export class Person {
    name: string;
    age: number;
    gender: string;

    constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'female'){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduce (): void {
    console.log (`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.`)
    }
    getGoal(): void {
        console.log ("My goal is: Live for the moment!")
    } 
}
export class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays: number;

    constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'female',
    previousOrganization: string ='The School of Live', skippedDays: number = 0)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }
    introduce (): void {
    console.log (`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}, from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already. `)
    }
    getGoal(): void {
        console.log ("My goal is: Be a junior software developer.")
    }
    skipDays(numberOfDays: number) {
        return this.skippedDays += numberOfDays
    } 
}
export class Mentor {
    name: string;
    age: number;
    gender: string;
    level: string;
    
    constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'female',
    level: string ='intermediate')
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.level = level;
    }
    introduce (): void {
    console.log (`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender},${this.level} mentor`)
    }
    getGoal(): void {
        console.log ("My goal is: Educate brilliant junior software developers")
    }
     
}
export class Sponsor {
    name: string;
    age: number;
    gender: string;
    company: string;
    hiredStudents: number;

    constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'female',
    company: string ='Google', hiredStudents: number = 0)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
        this.hiredStudents = hiredStudents;
    }
    introduce (): void {
    console.log (`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}, who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
    }
    getGoal(): void {
        console.log ("My goal is: Hire brilliant junior software developers")
    }
    hire() {
        return this.hiredStudents ++
    } 
}




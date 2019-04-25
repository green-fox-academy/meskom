'use strict';

// Create Student and Teacher classes
// Student
//     learn()
//     question(teacher) -> calls the teachers answer method
// Teacher
//     teach(student) -> calls the students learn method
//     answer()

class Student{
    name: string;
    knowledge: string;
    answer: boolean;

    constructor (
        name: string,
        knowledge: string,
        answer: boolean
    )
    {
        this.name = name;
        this.knowledge = knowledge;
        this.answer = answer;
    }
    learn(){
        return learning
    }
    question(teacher){

    }
}

class Teacher {
    subject: string;
    age: number;
    srict: boolean;

    constructor(
        subject: string, 
        age: number = 40, 
        strict: boolean)
        {
            this.subject= subject;
            this.age = age;
            this.srict = strict;
        }
        teach (){
            return
        }
        answer() {
            return
        }


    }
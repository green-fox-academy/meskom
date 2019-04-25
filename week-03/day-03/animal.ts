'use strict';


class Animal {
    hunger: number;
    thrist: number;

    constructor (hunger: number = 50, thrist: number = 50){
        this.hunger = hunger,
        this.thrist = thrist
        
    }
  eat(): void {
      this.hunger -- ;
  }  
  drink(): void {
      this.thrist -- ;
  }
  play(): void {
      this.thrist ++ ;
      this.hunger ++ ;
  }
}
  const animal1: Animal = new Animal();
  animal1.eat();
  console.log(animal1) 
  const animal2: Animal = new Animal();
  animal2.drink();
  console.log(animal2) 
    
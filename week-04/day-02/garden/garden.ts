'use strict'; 
// The Garden

//     is able to hold unlimited amount of flowers or trees
//     when watering it should only water those what needs water with equally divided amount amongst them
//     eg. watering with 40 and 4 of them need water then each gets watered with 10


export class Garden {
    plants: Plant[]
    waterAmount: number
    absorb


    constructor(waterAmount: number=110){
    this.plants = []
    this.waterAmount = waterAmount
    }
    watering1() {
        this.waterAmount = 40
    }
    watering2() {
        this.waterAmount = 70 
    }
}


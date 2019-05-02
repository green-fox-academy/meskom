'use strict';

import { Aircraft } from "./aircraft";

class AircraftCarrier {
    aircrafts: Aircraft[];
    ammoStore: number;
    healthPoint: number;

    constructor(aircrafts: Aircraft[] = [F16],
        ammoStore: number = 100,
        healthPoint: number = 10) {
        this.aircrafts = aircrafts;
        this.ammoStore = ammoStore;
        this.healthPoint = healthPoint;

    }
    add(newAircraft: Aircraft) {
        this.aircrafts.push(newAircraft);
    }
    fill(): any {
        if (this.ammoStore === 0) {
            return 'run out of ammo'
        }
        let allAmmo = 0;
        let firstPriorAircrafts: Aircraft[] = [];
        let secPrioraircrafts: Aircraft[] = [];
        for (let i: number = 0; i < this.aircrafts.length; i++) {
            allAmmo += this.aircrafts[i].ammo
            if (this.aircrafts[i].isPriority() === true) {
                firstPriorAircrafts.push(this.aircrafts[i])
            }
            else secPrioraircrafts.push(this.aircrafts[i])

        }
        
        if (allAmmo > this.ammoStore) {
            firstPriorAircrafts.forEach(plane => {
                plane.refill(this.ammoStore);
            });
            secPrioraircrafts.forEach(plane => {
                plane.refill(this.ammoStore);
            })
            return 'not enough ammo'
        }
        this.aircrafts.forEach(plane => {
            plane.refill(this.ammoStore)
        })
        return 'every craft full of ammo'
    }

    fight() {

    }
    getStatus() {

    }


}
let F16: Aircraft = new Aircraft('F16', 8, 30, 8);
let F35: Aircraft = new Aircraft('F35', 12, 50);
let newCarrier = new AircraftCarrier([F16,F35])

console.log(newCarrier.fill())

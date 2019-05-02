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
                this.ammoStore = plane.refill(this.ammoStore);
            });
            secPrioraircrafts.forEach(plane => {
                this.ammoStore = plane.refill(this.ammoStore);
            })
            return `not enough ammo, remain: ${this.ammoStore}`
        }
        this.aircrafts.forEach(plane => {
            this.ammoStore = plane.refill(this.ammoStore)
        })
        return `every craft full of ammo, remain: ${this.ammoStore}`
    }
    fight(enemy: AircraftCarrier) {
        let allDamage: number = 0;
        for (let i: number = 0; i < this.aircrafts.length; i++) {
            this.aircrafts[i].fight();
            allDamage += this.aircrafts[i].fight();
        }
        enemy.healthPoint -= allDamage


    }
    getSumDamage(): number {
        let sumDamage = 0;
        this.aircrafts.forEach(plane => {
            sumDamage += plane.baseDamage * plane.ammo
        });
        return sumDamage

    }

    getStatus(): string {
        let allStatus: string = '';
        this.aircrafts.forEach(plane => {
            allStatus += plane.getStatus()
        });
        return `HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${this.getSumDamage()}
    Aircrafts: \n ${allStatus}`
    }
}
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240

let F16: Aircraft = new Aircraft('F16', 8, 30);
let F35: Aircraft = new Aircraft('F35', 12, 50);
let newCarrier = new AircraftCarrier([F16, F35]);

//console.log(newCarrier.fill()) ;
console.log(newCarrier.fill())
console.log(newCarrier.getStatus());

'use strict';

export class Aircraft {
    type: string;
    maxAmmo: number;
    baseDamage: number;
    ammo: number;


    constructor(type: string, maxAmmo: number, baseDamage: number, ammo: number = 0) {
        this.type = type;
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
        this.ammo = 0;
        //this.damage = damage
    }
    fight(): number {
        let damage: number = this.ammo * this.baseDamage;
        this.ammo = 0;
        return damage;
    }
    refill(num: number): number {
        if (num > this.maxAmmo) {
            let fillAmmo: number = this.maxAmmo - this.ammo
            this.ammo = this.maxAmmo;
            return (num - fillAmmo);
        }
        this.ammo += num;
        return 0;
    }
    getType():string{
        return this.type
    }
    getStatus():string{
        return ` Type: ${this.type}, Ammo: ${this.ammo}, Base Damage ${this.baseDamage}, All Damage: ${this.baseDamage * this.ammo} \n`
    }
    isPriority(): boolean {
        return (this.type == 'F35')
    }
}
let F16: Aircraft = new Aircraft('F16', 8, 30);
let F35: Aircraft = new Aircraft('F35', 12, 50);

// console.log(F16.isPriority());
// console.log(F16.getType());
// console.log(F16.getStatus());
// console.log(F16.refill(100));
// console.log(F16.getStatus());

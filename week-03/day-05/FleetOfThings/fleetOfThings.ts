import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

const things1: Thing = new Thing('Get milk')
const things2: Thing = new Thing('Remove the obstacles')
const things3: Thing = new Thing('Stand up')
const things4: Thing = new Thing('Eat lunch')


// /* Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch
// // Hint: You have to create a `print()` method as well */

fleet.add(things1);
fleet.add(things2);
fleet.add(things3);
fleet.add(things4);

things3.getCompleted;
things3.complete();
things4.getCompleted;
things4.complete();

for (let i: number = 0; i < fleet.getThings().length; i++) {
    if (fleet.getThings()[i].getCompleted() === true) {
        console.log((i + 1) + "." + "[X] " + fleet.getThings()[i].getName());
    }
    else {
        console.log((i + 1) + "." + "[ ] " + fleet.getThings()[i].getName())
    }
}

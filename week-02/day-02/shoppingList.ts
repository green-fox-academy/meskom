'use strict';

let shoppingList: any[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];
let food: string = 'milk';
for (let i: number = 0; i < shoppingList.length; i++) {
    if (shoppingList[i] == food) {
        console.log('there is ' + food + ' in the list')
    }
    //else {
    //    console.log('there is NO ' + food + ' in the list')
    //}
}





' use strict';


let obj: any = {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab",
}
Object.keys(obj).forEach(element => { console.log(obj[element] + '(ISBN: ' + element + ')') })

//Object.keys(obj).map(e => console.log(`${obj[e]} (ISBN: ${e})`)) 
for (let i: number = 0; i < Object.values(obj).length; i++) {
    console.log(Object.values(obj)[i] + ' (ISBN:' + Object.keys(obj)[i] + ')')
}
console.log('-------------------------')
//Remove the key-value pair with key 978-1-60309-444-3
delete obj['978-1-60309-444-3']

//Remove the key-value pair with value The Lab
Object.keys(obj).forEach(element => (obj[element] === 'The Lab') ? (delete obj[element]) : undefined);
//Object.keys(obj).forEach(element => {console.log (obj[element] + '(ISBN: '+ element + ')')})

console.log('-------------------------')
//Add the following key-value pairs to the map
obj['978-1-60309-450-4'] = 'They Called Us Enemy'
obj['978-1-60309-453-5'] = 'Why Did We Trust Him?'


console.log('-------------------------')
Object.keys(obj).forEach(element => { console.log(element === '478-0-61159-424-8' ? 'yes' : 'no') })


console.log('-------------------------')

console.log(obj['478-0-61159-424-8'] === undefined ? 'No' : 'yes')

console.log(obj['978-1-60309-453-5']);

console.log(obj['978-1-60309-453-5'] === undefined ? 'No' : 'yes')

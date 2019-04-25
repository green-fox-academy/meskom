'use strict';

let phoneBook = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982',
}

// What is John K. Miller's phone number?
// Whose phone number is 307-687-2982?
// Do we know Chris E. Myers' phone number?


function pbApp(pBook: any, num: any, name: any) {
  let pNumber: any = pBook[name]
  //  (pNumber == undefined) ? ('No contact with this name') : (pBook[name]);
  let pName: any = Object.keys(pBook).filter(element => pBook[element] === num);
  return (`this number: ${num} belongs ${pName}, and ${name}'s number is ${pNumber}`)
}
console.log(pbApp(phoneBook, '307-687-2982', 'John K. Miller'))

console.log(pbApp(phoneBook, '307-687-2982', 'Chris E. Myers'))

 // Primitive Data types 
 // 7 types : String, Number, Boolean, Null, Undefined, symbol, BigInt
 let value = null;
//  console.log(value);

 const score = false;// or 100 or 300.53 
 // It is dynamic type of language 
 // it means that the variables can hold different values at runtime.
const isLoggedIn = false
const outsideTemp = null // value is not 0 

let userEmail ;// the value of this is undefined therefore it will show us undefined 

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id);
// console.log(anotherId);

console.log(id == anotherId)
const bigNumber = 756428156254612546n
// console.log(typeof(bigNumber));


// Reference Data Types (Non primitive)
// Array , Objects , Functions  

const heros = ["shaktiman", "naagraj","doga"]
let MyObj = {
    name: "hitesh",
    age: 22
}
// function

const myfunction = function()
{
    console.log('Hello World');
}
console.log(typeof myfunction);
console.log(typeof MyObj);
console.log(typeof heros);
console.log(typeof id);

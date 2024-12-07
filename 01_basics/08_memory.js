// Memory - Stack and Heap 
// Stack - is used at primitive 
// Heap - is used at non-primitive

let myYt = "prashantchoudhary.com"
console.log(myYt);
let anothername = myYt;
anothername = "Ben Ten ";
console.log(anothername);
console.log(myYt);


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne

userTwo.email = "myuser@gmai.com"

console.log(userOne.email)
console.log(userTwo.email)
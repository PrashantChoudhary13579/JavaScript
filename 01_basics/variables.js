const accountId = 114552 // value is fixed
let accountEmail = "prasshnt@gmail.com"
// let keyword is prefered as it has scope
var accountPassword = "12356"
// var keyword is not used anywhere in the code because it do not has scope 

accountCity = "Jaipur"
// we can also define the variables like this but it is not a good practice 

let accountState
// defining variable but not declaring it's value will give us a undefined value.
// accountId = 2 // not allowed
accountEmail = "random@gmail.com"
accountPassword = "753852"
accountCity = "Haridwar"
// changing the values of the variables 
console.log(accountId);
console.log(accountEmail);
// printing in the form of table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

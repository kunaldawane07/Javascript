const accountId = 114453
let accountEmail = "kunal@gmail.com"
var accountPassword = "225412"
accountCity = "Mumbai"  // if we didn't define  a variable still javascript treat as a variable
let accountState;

// accountId = 2 // not allowed

accountEmail = "kd@gmail.com"
accountPassword = "66656966"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountState, accountCity])
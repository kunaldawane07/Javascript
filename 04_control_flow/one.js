// hamesha pura code run nahi hona chahiye condition base run hona chahiye

// if

// if (condition) {
    
// }

const isUserloggedIn = true
const temperature = 41

if (temperature === 40){
console.log("less than 50");
} else{
    console.log("temperature is greater than 50");
}
console.log("Execute");

// comparision operator
// <, >, <=, >=, == (kya wo uske equal hai iske liye check krne ke liye), !=, === (ye type bhi check krta means datatype bhi check krtaa hai), !== 

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);

const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");  // implicit

if (balance < 500){
    console.log("less than");
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

// in real life uses

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}
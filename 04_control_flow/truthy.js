// truthy & falsy means jo ki man liya hai ki truthy hai or falsy hai

const userEmail = "kunal@kd.ai"
//const userEmail = []

if (userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// array ko check ka tarika
if(userEmail.length === 0){
    console.log("Array is empty");
}

// empty object check karne ka tarika
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null, undefined

let val1; // ye database se valuse lene ke liye ya fir koi aur se value lene ho to
// val = 5 ?? 10 // first value print krta hai
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 // yaha pe first value print hogi

console.log(val1);

// Terniary Operator

condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
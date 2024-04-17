// two types of datatypes  1.primitive 2.non-primitive or refrence type

// call by value and call by refrence - jo difference hai wo is tarah se kiya gaya hai ki jo bhi data hai memory kis tarah se store aur kis tarah access kr sakte ho iske basis pe categorization kiya gaya hai

// memory allocation in memory and access

// => Primitive - ye jo bhi primitave hote wo call by value hote hai matlab ki aap agar inko copy karne jaoge to inka jo original refrence hai wo nahi diya jata uska copy krke diya jata hai alag aur jo bhi aap changes krte ho wo sare copy me changes hote hai

// 7 types : String, Number, Boolean, null, undefined, Symbol(kisiko bhi unique banana), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 54687785522244445555n //BigInt

// Refrence Type(Non Primitive) => iska matlab ye hai ki inka jo refrence hai wo apko directly diya ja sakta hai

// to master javascript = master javascript objects and browser events or web events this two topic is sufficient to master javascript

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "kunal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof null);

// all non primiotive will give type of is "Object" and for function only it gives "object function"
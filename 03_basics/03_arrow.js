const user = {
    username: "kunal",
    price: 999,

    welcomeMessage: function(){
       console.log(`${this.username}, welcome to website`); // this means current context ko refer krta hai
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // isme jo this hai wo {} empty scope print karega kuki wo node environment me hai || agar yahi hum browser ke console pe karege to wo window print kyuki javascript  pahale se hi browser me hi run kiya krte the ab browser se extract krke node and any other isme dali hai


function chai(){
    let username = "kunal"
    console.log(this.username); // is function me agar humne this ko print krne ki koshish ki to wo bahut sare value milati hai  || but agar hum this.username ko print krna chahenge to undefined aayega kyuki because of this word they can't print matalab wo accessable hi nahi hai 
}

chai()

const chai = function () {
    let username = "kunal"
    console.log(this.username); // isme bhi same output aayega undefined
}

chai()

const chai =  () => {
    let username = "kunal"
    console.log(this); // isme this ka output empty { } hi aayega
}

chai()

// const addTwo = (num1, num2) => {   // explict return
//     return num1 + num2
// }

console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2 // implict iska matlab hai ki system maan leta hai ki return ko kyuki ek line ka statement
console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => (num1 + num2) // arrow ke baad ke num1 + num2 ko parenthesis me  likha to return nahi likhna padega || but agar curly braces me likha to return likhana padega

console.log(addTwo(3, 4));

const addTwo = (num1, num2) => ({ username: "kunal"}) // jab bhi object ko return krne ke liye to parenthesis dena hi padega

const myArray = [2, 5, 3, 4,]

// myArray.forEach(function () {})
// myArray.forEach( () => {})
// myArray.forEach(() => () )
// object ko likhane ke two type hai 1)constructor 2)literal

// singleton => iska matlab ye hai ki agar aap constructor se object banate hai to wo singleton object banata hai(ye apne tarah ka ek hi object hai!!)
// Object.create => aise banta hai constructor method ke through isme singleton banta hai

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Kunal",
    "full name": "Kunal Dawane",
    [mySym] :"mykey1",//symbol aise define krte hai
    age: 18,
    location: "Amravati",
    email: "kunal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
 } // ye jo curly braces hai wo hai object ab ye empty object hai but isme hum values de sakte hai ----- object ke andar Keys and value --- isme jo "name" naam ki keys hai use system by default use string samaj leta hai and values me aap kuch bhi de sakte ho (string,boolean, number, etc.)

 console.log(JsUser.email)
 console.log(JsUser["email"]); // dusare type se access krne ka tarika 
 console.log(JsUser["full name"]);
 console.log(JsUser[mySym]);

 JsUser.email = "kunal@chatgpt.com"
 // Object.freeze(JsUser) // kisi bhi object ko lock krne ka raha to
 JsUser.email = "kunal@microsoft.com"
 console.log(JsUser);

 JsUser.greeting = function(){
    console.log("Hello JS user");
 }
 JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
 } // this islye use kiya hai us object ki property ko access krne ke liye

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
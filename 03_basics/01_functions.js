// function ka kam itna hi hai jitna bhi code aapne likha hai 10, 20 line use ek package ke andar band kr diya hai use aap kahi pr bhi use kr sakte ho



function sayMyName (){            // ye pura jo hai wo hai function ka defination   || first me hai function ka keyword || second me hai function ka naam hai || () and {} ye uska syntax hai || () iske andar parameters diye jate hai || {} ye function ka scope hai aur 
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("L");
}

sayMyName() // sayMyName jo hai wo hai refrence and () wo hai execution. agar ye nahi likha to function execute nahi hoga

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);  // is function me jab hum result print karenge to result nahi dikhayi dega kyuki result ko humne return nahi kiya hai bas use console se print kiya aur console sirf print krta hai retirn nahi || so be carefull this type 

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("kunal"); //agar humne return ke baad kuch print krne ki koshish ki ya kuch krne ki koshish ki to unreachable hota hai  || aur wo kabhi execute nahi hota

    return number1 + number2
}

const result = addTwoNumbers(3, 78)

console.log("Result: ", result);

function loginUserMessage(username = "sam") // default value dene ke liye
{
    if(!username)// (username === undefined)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

loginUserMessage("Kunal") // yaha pe output kya aayega ki jo funtion hai return karega but print nahi karega aur humko lagata hai print karega but aisa nahi hota jab aap command doge tabhi wo print karega
console.log(loginUserMessage("Kunal"));  // yaha pe print hoga
console.log(loginUserMessage());  

// Shopping Cart ke liye function

function calculateCartPrice(val1, val2, ...num1){     // ye three dot jo hai wo rest operator and spread operator bhi hai but iske use case nirbhar hota hai system use kya samjati hai || aur jo rest operator hai uska kam ye hota hai jo bhi choti choti chize hai use ek bundle me pack karo
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));

// object ko function me kaise pass kiya jata hai

const user = {
username: "kunal",
prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  // isme ye dikkat hai ki agar price ki jagah prices mention kr diya to wo use call nahi kr payega to usme humko check krna padta hai to thoda code jyada likhana padta hai
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));
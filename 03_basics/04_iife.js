// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE kyuki function ko name hai
    console.log(`DB CONNECTED`);
})();     // yaha pe semi colan isliye lagayi hai kyuki jab ye function call hoga tab start ho jayega but stop kab hona hai wo use pata nahi rahega isliye semi colan lagana hoga so dusara function chalu ho

// ()() // first parenthesis hai function ki defination and second parenthesis hai execuation

((name) => {
    // simple IIFE function ko name nahi hai
    console.log(`DB CONNECTED TWO ${name}`);
}) ("kunal")    // isko function ki tarah hi treat karna hai
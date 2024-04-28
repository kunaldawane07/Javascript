// for each loop
// kuch loops array ke andar by default hi ho hote hai 
// sabse jyada aap isko hi kaam me lenge but ye thodasa kya hai ki higher order function hai
const coding = ["js", "java", "cpp", "python", "ruby"]

coding.forEach( function  (item) {
    console.log(item);
}) // iske andar call back function dena padta hai || callback jo function hai uska naam nahi hota hai, aur jo hum function ke andar parameter dete the but ye itana smart hai array ke sab value pe jata hai to bas usko kya naam dena hai use likhana hai

coding.forEach(  (item) => {
    console.log(item); // arrow function se
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // agar humne function kahi aur pe likha hai fir bhi hum use for-each me call kr sakte hai || but function ka refrence dena hai use execute nahi krna hai coding.forEach(printMe()) ye nahi krna

coding.forEach( (item, index, arr) => { //aur for-each ke andar bas item ka nahi to bahut saro ka access hota hai jaise ki index, array, etc.
    console.log(item, index, arr);
})

// array ke andar object hai
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
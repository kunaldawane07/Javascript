// ab sab jo padhane wale hai sab array specific loop hai
// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {  // const iterator of object iska ye matlab nahi hai ki ye loop bas object ke liye hai ye array, string || const ka variable define krne ke liye jo bhi aapko dene hai uska naam iterator ki jagah aur jo object usko broder perpesctive se dekhiye ye javascript ka object nahi hai || object ka matlab ye hai kis cheez pe aapko ye loop lagana hai
    
// }

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const great of greetings) {
    console.log(`Each char is ${great}`);
}

// Maps ke andar unique values hoti duplicate values nahi hoti 

const map = new Map()  // aur Map apne aap me hi object hai || map holds key-value pairs ko || aur jaise aap insert krte ho waise values deta hai original insertion order
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('IN', "India") // map values duplicate nahi krti

console.log(map);

for (const key of map) {
    console.log(key);  // isme pura ka pura array print hoga 
}

for (const [key,value] of map) {
    console.log(key, ':-', value); // isme values single aur specific print hogi
}

const myObject = {
    'game1' : "NFS",
    'game2' : "Ironman",
    'game3' : "Spiderman",
}

for (const [key,value] of map) { // for of jo hai object ke liye work nahi krta  kyuki "myObject is not iterable hi nahi hai" || aur object iterate krne ke dusare tarike hai isase nahi hoga
    console.log(key, ':-', value);
}

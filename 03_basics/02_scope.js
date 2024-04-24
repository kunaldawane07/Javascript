// {} isko scope kahte hai jab ye koi function ke sath ata hai ya kisi if-else ke sath ata tab ise scope kahte hai!  || but jab hum object declare krte hai tab wo declaration ke andar ata hai naki scope ke andar

// var c = 300 // var scope ka  issue create krta hai islye use use nahi krte  || agar aap var mention kare ya na kare tab bhi ye issue ata hai isliye let introduce kiya gaya || scope issue means agar aap scope andar use kiya hai to wo aap scope andar bhi aur scope bahar use kr sakte hai that's the issue  

let a = 300

if (true) {                   // scope ke two types hai 1)block scope  2)global scope => block of scope ke bahar ka use global scope kahte hai 
    let a = 10
    const b = 20
  //   c = 30 
  console.log("INNER: ", a);
}
// scope ka bhi code environment me jo bhi node ke use likhate hai uska global scope alag hai aur jo bhi aap browser ke console pe use krte hai uska global scope alag hota hai 


console.log(a);
console.log(b);
console.log(c);

function one() {                  // ye kuch aisa hai ki chote bacche bado se ice-cream mang sakte hai ya chin sakte hai pr bade choto se na ice-cream le sakte na mang sakte hai 
   const username = "kunal"        // closure use kahate ki  child function outer function ke variable use kr sakte hai 
   
   function two(){
    const website = "youtube"
    console.log(username);
   }
   console.log(website);

   two()

}

one()

if (true) {
    const username = "kunal"
    if (username === "kunal") {
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);
    
}

console.log(username);


// ------------------------------------- interesting ------------------------------------

console.log(addone(5))

function addone(num){   // isme humne function ko declare kiya hai to app ise likhane se pahale use bhi kr sakte hai
    return num + 1
}



addTwo(5)
const addTwo = function(num){        // isko expression bhi kahte hai  ||  but isme aap function likha ke use aap ek variable me store bhi kr rahe isliye app use pahale declare krne se pahale use nahi kr sakte 
    return num + 2
}


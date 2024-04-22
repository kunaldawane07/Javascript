// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]); // array-copy operations create shallow copies (means if we change in it.It will change in original also)

// Array methods

myArr.push(6) // to add in array
myArr.push(7) 
myArr.pop() 

myArr.unshift(0) //insert value in zeroth index or add at first element 
myArr.shift() // the first element will be deleted means on zeroth index element

console.log(myArr.includes(9)); // to ask question and datatype will be boolean 
console.log(myArr.indexOf(19));// to find which index have which value

const newArr = myArr.join() //it will join the array and convert into in string

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // start from mention number and end with given number end number not include || aur isme array manipulate nahi hota hai aur usme se number aate jitane mention kiye hai utane

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // isme jitana aapne mention kiya hai utana portion pura cut ho jata hai aur pura array manipulate hota hai and isme last number jo include kiya hai wo include hota hai

console.log(myn2);
console.log("C ", myArr);

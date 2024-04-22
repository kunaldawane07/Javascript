const name = "kunal"
const repoCount = 1

console.log(name + repoCount + "Value"); //outdated don't use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // modern syntax is called string interpolation

const gameName = new String('kunal-kd-com') //aise define krne se lots of feature milte hai

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4) // isme aap -ve value bhi de skte hai aur ye reverse kr sakta hai
console.log(anotherString);

const newStringOne = "   kunal   "
console.log(newStringOne);
console.log(newStringOne.trim);

const url = "https://kunal.com/kunal%20dawane"

console.log(url.replace('%20', '-'))

console.log(url.includes('kunal'));

console.log(gameName.split('-')); // it create an array
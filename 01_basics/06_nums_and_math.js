const score = 400 //automatically detected
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // mainly use e-commerce applicatio  to precise the calculation

const otherNumber = 23.8245

console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//----------------Maths----------------------

console.log(Math);
console.log(Math.abs(-5)); // -ve value convert into +ve but not +ve value convert into -ve value
console.log(Math.round(4.3));
console.log(Math.ceil(4.2)); // just same as round but convert into higher means 4.2 into 5
console.log(Math.floor(4.9)); //just same as round but convert into lower means 4.9 into 4
console.log(Math.min(4,3,8,7,9));
console.log(Math.max(4,3,8,7,9));

console.log(Math.random()); // always value comes in between 0 and  1 in decimal
console.log((Math.random()*10) + 1); // to avoid 0.04 case we add 1 for surety to come under 1
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // because we want to define in between in range for without multiplying 10 we give the range and to avoid the random 5 or 4  we add the min value in it
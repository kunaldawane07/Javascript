// for loop

for (let index = 0; index < array.length; index++) {      // 1)variable declare 2)condition 3)increment
    const element = array[index]; //working aise hai ki firstly jo variable hai wo declare hoga uske baad wo condition check karega aur fir uske baad wo loop kw andar jayega fir uske baad increment hoga fir uske baad condition uske baad loop uske baad increment
    
}

for (let i = 0; i < 10; i++) {
    const element = array[i];
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value: ${j} and inner loop ${i}`);
      console.log(i + '*' + j + ' = ' + i*j);  
        
    }
     
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break  //kisi bhi control flow ko band krna ho to break use kiya jata hai 
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue  // continue ka matlan ye hai ki ek baar hum usko skip kr dege ya phir ek galati maaf
    }
    console.log(`Value of i is ${index}`);
    
}


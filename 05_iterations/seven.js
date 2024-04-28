// map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)
// const newNums = myNumbers.map( (num) => {return num + 10})

// chaining 

const newNums = myNumbers                            // 2-3 methods ek sath use kr sakte hai
                        .map((num) => num * 10)  // jab bhi chaining hoti hai tab jo bhi first method ka result hota hai wo us variable me store hota hai aur dusare method me pass hota hai 
                        .map((num) => num + 1) 
                        .filter( (num) => num >= 40)
console.log(newNums);
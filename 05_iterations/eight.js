// reduce() method
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) { // ye aise work krta hai ki function leta hai usme jo humne start value zero li wo leta hai aur currentvalue hai wo array ki 1st value leta hai aur usko return krne ke baad accu me jo result aya hai wo leta fir current value aise aage badhte jata hai
//     console.log(`accumulator : ${accumulator} and currentValue: ${currentValue}`); 
//     return accumulator + currentValue
// }, 0) //reduce ke andar bhi call-back function likhana hota hai || scope start kiya hai to return to krna padega || function ke baad comma(,) likha jata hai aur start value likhi jati hai

const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0)

console.log(priceToPay);
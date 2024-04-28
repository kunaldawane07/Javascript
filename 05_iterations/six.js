const coding = ["js", "java", "cpp", "python", "ruby"]

const values = coding.forEach( (item) => { //for each jo hai koi bhi value return nahi krta 
    console.log(item);
    return item
} )

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4) // jaise for-each method hoti hai waise hi filter method bhi hoti hai || ye bhi call-back function leta hai || for-each jo hai wo values return nahi krta but filter values return krta hai
// console.log(newNums); // filter ke andar call-back function milta jisme array ki each value liyi jati hai aur uske baad condition diye jati hai aur jo condition satisfy hogi to value return hogi ya fir nahi

// const newNums = myNums.filter( (num) => {
//     num > 4  // agar aapne () me likha to return apne aap se hoga but wahi agar {} mention kiya to waha pe aa jayega scope to uske liye aapko return specific mention krna hoga tabhi wo retun karega || agar aapne scope nahi kiya to fir aap bina return kiye bhi run kr sakte ho
// }) 

// -- agar upar wala code for-each me likhana raha to aise likh sakte hai  

const newNums = []

myNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})

console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

 let userBooks = books.filter ( (bk) => {return bk.publish >= 2000}) // agar {} mention kiya hai to return keyword likahana padega

userBooks = books.filter ( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);

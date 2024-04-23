// singleton object

const tinderUser = new Object() // by constructor method means singleton object
// const tinderUser = { } // by object literal method means non-singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
email: "some@gmail.com",
fullname : {
    userfullname: {
        firstname: "kunal",
        lastname: "dawane"
    }
}
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)  // empty curly braces ko target kahte hai aur baki values ko source => so sare jo values hai wo target me define hoti hai agar wo nahi diya to wo sare obj1 me hogi to hamesha curly braces de dena chahiye 

const obj3 = {...obj1, ...obj2, ...obj4} // most of the time aap spread operator wala use krne wale hai aur ye simple bhi hai latest bhi aur 90% yehi use kronge
console.log(obj3);

const users = [
    {
        id:1,
        email: "k@gmail.com"
    }, // ye sab jab bhi SQL se data ata hai us samay agar access krne ka raha to
    {
        id:1,
        email: "k@gmail.com"
    },
    {
        id:1,
        email: "k@gmail.com"
    },
    {
        id:1,
        email: "k@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //jo bhi aapki object ki keys hai use agar ek array me krna hai tab use kiya jata hai
console.log(Object.values(tinderUser)); //jo bhi apke object ki values hai use agar ek array krna hai tab ye use hota hai
console.log(Object.entries(tinderUser)); // appke object ki keys and values ka ek array banata hai single ka

console.log(tinderUser.hasOwnProperty("isLogged")); // object ke pas is name ka keys hai ya nahi question krne ke liye

//-----------------------------

// object de-structure

const course ={ 
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor // is tarah se call kr sakte hai but bahut baar krna raha to isliye use nahi krte hai professional log so humne bhi nahi krna chahiye

const {courseInstructor: instructor} = course // jo curly braces ke andar jo kiya hai wo object de-structuring hai

//console.log(courseInstructor);
console.log(instructor);

//----------------------------------------------------------
//API => API kya hai jo bhi aapke values aati hai Backend se use aap kaise likhate hai |...| pahele wo xml structure me aati thi par ab wo JSON me aati hai  

// {                                // JSON me aise hi values likhi jati hai same as object but LHS:RHS me string me hi likhi jani chahiye tabhi wo JSON hai
//     "name": "Kunal",
//     "coursename" : "js in hindi"
//     "price" : "free"
// }

[
    {}, // kabhi kabhi api arrays ke form me bhi aa sakti hai
    {},
    {}
]
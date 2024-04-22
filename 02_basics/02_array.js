const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //this is a spread operator to spread the array ex.glass ko drop krdo to wo kaise spread hota hai same waise hi

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // sab array element ko ek new array me concat kr deta hai
console.log(real_another_array);



console.log(Array.isArray("Kunal"))
console.log(Array.from("Kunal")) //convert into a array
console.log(Array.from({name:"Kunal"})) // intresting ||is specific mention krna hota 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // set of element se array create krta hai
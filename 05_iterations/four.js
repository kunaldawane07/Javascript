// for in loop
const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "rubby",
    swift : "swift by apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
    }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) { // for in loop me array ki keys aati hai aur for of loop me sidha value aati hai
    console.log(programming[key]);
}

const map = new Map()  
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('IN', "India") 
for (const key in map) {  // ye map ke upar work nahi krta loop kyuki ye iteratable nahi hai isliye
    console.log(key);
}

// jab  bhi array ke upar loop lagana ho to "for of" use karege
// jab bhi object ke upar loop lagana ho to "for in" use karege
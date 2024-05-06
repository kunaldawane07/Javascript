// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++ ){
        color += hex[Math.floor(Math.random() * 16)] // += ye iske liye + increment krne ke liye aur = value dene ke liye
    }
    return color;
};

let intervalId; 
const startChangingColor = function(){
    
     if (!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
     } 
    
    function changeBgColor() {
    document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;  // problem kya hai ki jo aap intervalId use kr rahe ho aap use kahi jagah use aap overwrite kr rahe isliye
}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)
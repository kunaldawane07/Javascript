let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []; // guess ki value store krne ke liye
let numGuess = 1; // guess start krne ke liye

let playGame = true; // allow krta hai game khelane ke liye

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess =  parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess);
    })
}

function validateGuess(guess){
    // kya valid input de raha hai,  -ve value to nahi de raha, ya fir value 100 ke upar to nahi de raha
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number more than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    } else{
        prevGuess.push(guess)
        if(numGuess  === 11){
            displayGuess(guess)
            displayMessage(`Game Over . Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // aapne jo value di hai wo proper di hai ki nahi isliye alert dene ke liye
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is tooo Low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is tooo High`)
}
}

function displayGuess(guess){
// values ko clean karega and array ko update karega
userInput.value = ''
guessSlot.innerHTML += `${guess}   `
numGuess++;
remaining.innerHTML = `${11 -  numGuess }`
}

function displayMessage(message){
// ye sidha DOM ke sath interact krne wala hai 
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
userInput.value = '' // isase value clean hoti hai
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
startOver.appendChild(p)
playGame = false
newGame()
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess }`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)



    playGame = true
})
}

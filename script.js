let randomNumber = (Math.random()*100+1).toFixed(0);
console.log("Random Number between 1 and 100: " + randomNumber);

const submitBtn = document.querySelector('#submitBtn');
const userInput = document.querySelector('#guessValue');
console.log(userInput);
const message = document.querySelector('#message');
const resetBtn = document.querySelector('#resetBtn');
const userGuessesDisplay = document.querySelector('#userGuesses');
const remainingGuessesDisplay = document.querySelector('#remainingGuesses');
const resultDisplay = document.querySelector('#result');

let userGuesses = [];

let initialGuesses = 10;
let remainingGuesses = initialGuesses;

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    ValidateGuess(userInput.value);
})

// @validateGuess
function ValidateGuess(userInput){
    console.log(userInput);
    let userVal = parseInt(userInput);
    
    if(userVal < 1 || userVal > 100 || isNaN(userVal)){
        alert(`Please enter a valid number`);
    }

    if(randomNumber === userVal){
        resultDisplay.innerHTML += `You Won!`
    }
}

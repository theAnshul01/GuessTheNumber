let randomNumber = parseInt(Math.random()*100 + 1)
console.log(`random number: ${randomNumber}`)

// accessing the DOM elements
const userInput = document.querySelector('#guessValue');
// console.log(userInput)
const submitBtn = document.querySelector('#submitBtn')
const result = document.querySelector('#result')
const remainingGuessesDisplay = document.querySelector('#remainingGuesses')
const userGuesses = document.querySelector('#userGuesses')
const resetBtn = document.querySelector('#resetBtn')

// game values
let initialGuesses = 10;
let currentGuessCount = 0;
let guesses = [];


//  @handle submit button
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    ValidateUserInput(userInput)
    userInput.value = '';
    currentGuessCount++;
    if(initialGuesses - currentGuessCount == 0){
        displayMessage(`Better Luck Next Time!! The Number is ${randomNumber} <br> Restart the game`)
        userInput.setAttribute('disabled', '')
        submitBtn.setAttribute('disabled', '')
        
    }
    remainingGuessCount();
})

const remainingGuessCount = () => {
    remainingGuessesDisplay.innerHTML = `Remaining Guesses: ${initialGuesses - currentGuessCount}`
}

resetBtn.addEventListener('click', ()=>{
    restartGame();
})

// @validate the userInput
const ValidateUserInput = (userInput) => {
    const inputValue = parseInt(userInput.value);
    
    console.log(`guesses: ${guesses}`)

    console.log(`input: ${inputValue}`)
    
    // check for not allowed inputs
    if(inputValue > 100 || inputValue < 1 || isNaN(inputValue)){
        alert('Enter Valid Number: 1 to 100')
    } else if (inputValue == randomNumber){
        displayMessage(`You Won!! The number is ${randomNumber} <br> Click Restart to play again!`);
        userInput.setAttribute('disabled', '')
        submitBtn.setAttribute('disabled', '')
        guesses.push(inputValue);
    guessDisplay(guesses)
        // endGame();
    } else if (inputValue != randomNumber){
        displayGuessDirection(inputValue)
        guesses.push(inputValue);
    guessDisplay(guesses)
    }
}

const guessDisplay = (guesses) => {
    userGuesses.innerHTML = `Your Guesses: ${guesses}`
}

const endGame = () => {
    userInput.value = '';
    // restartGame()
    // randomNumber = parseInt(Math.random()*100 + 1)
    console.log(`from endgame: ${randomNumber}`)
       
}

const restartGame = () => {
    randomNumber = parseInt(Math.random()*100 + 1)
    initialGuesses = 10;
    currentGuessCount = 0;
    remainingGuessCount()
    displayMessage('')
    userInput.removeAttribute('disabled');
    submitBtn.removeAttribute('disabled');
    guesses = []
    guessDisplay(guesses)
}

const displayMessage = (message) => {
    result.innerHTML = message;
}

const displayGuessDirection = (inputValue) => {
    if(inputValue < randomNumber){
        displayMessage("Go Higher >>")
    } else{
        displayMessage("Go Lower <<")
    }
}


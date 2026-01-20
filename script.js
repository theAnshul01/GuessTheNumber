let randomNumber = parseInt(Math.random()*100 + 1)

// accessing the DOM elements
const userInput = document.querySelector('#guessValue');

const submitBtn = document.querySelector('#submitBtn')
const result = document.querySelector('#result')
const remainingGuessesDisplay = document.querySelector('#remainingGuesses')
const userGuesses = document.querySelector('#userGuesses')
const resetBtn = document.querySelector('#resetBtn')

// game values
let initialGuesses = 10;
let currentGuessCount = 0;
let guesses = [];
let flag = 0;


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


resetBtn.addEventListener('click', ()=>{
    restartGame();
})

// @validate the userInput
const ValidateUserInput = (userInput) => {
    const inputValue = parseInt(userInput.value);
    
    // check for not allowed inputs
    if(inputValue > 100 || inputValue < 1 || isNaN(inputValue)){
        alert('Enter Valid Number: 1 to 100')
    } else if (inputValue == randomNumber){
        flag = 1;
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

const remainingGuessCount = () => {
    remainingGuessesDisplay.innerHTML = `Remaining Guesses: ${initialGuesses - currentGuessCount}`
}

const restartGame = () => {
    flag = 0;
    randomNumber = parseInt(Math.random()*100 + 1)
    initialGuesses = 10;
    currentGuessCount = 0;
    remainingGuessCount()
    displayMessage('')
    result.style.color = '';
    result.style.textShadow = '';
    userInput.removeAttribute('disabled');
    submitBtn.removeAttribute('disabled');
    guesses = []
    guessDisplay(guesses)
    
}

const displayMessage = (message) => {
    if (flag === 1) {
        result.style.color = '#00ff88';
        result.style.textShadow = '0 0 10px #00ff88, 0 0 20px #00ff88';
    }
    result.innerHTML = message;

}

const displayGuessDirection = (inputValue) => {
    if(inputValue < randomNumber){
        displayMessage("Go Higher >>")
    } else{
        displayMessage("Go Lower <<")
    }
}


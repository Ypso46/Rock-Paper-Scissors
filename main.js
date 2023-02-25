//let prompt = require('prompt-sync')()

//function to get a random choise for the computer
/*
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice = ""
    if (randomNumber == 0) {
        computerChoice = "Rock"
    } else if (randomNumber == 1) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice
}

//ask a user input
let userInput = prompt("Choose between Rock, Paper or Scissors")
console.log("You chose: " + userInput)

let computerChoice = getComputerChoice()
console.log("Computer choice: " + computerChoice)


//making the core of the program
if (computerChoice == "Rock" && userInput == "Paper") {
    console.log("You won!")
} else if (computerChoice == "Rock" && userInput == "Scissors") {
    console.log("Computer won!") 
} else if (computerChoice == "Paper" && userInput == "Rock") {
    console.log("Computer won!") 
} else if (computerChoice == "Paper" && userInput == "Scissors") {
    console.log("You won!")
} else if (computerChoice == "Scissors" && userInput == "Paper") {
    console.log("Computer won!")
} else if (computerChoice == "Scissors" && userInput == "Rock") {
    console.log("You won!") 
} else {s
    console.log("It's a draw!")
}
*/


function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        console.log('Player plays Rock');
    } else if (playerSelection == 'paper') {
        console.log('Players plays Paper');
    } else if (playerSelection == 'scissors') {
        console.log('Player plays Scissors') 
    } else {
        console.log('Something went wrong, contact Stan!');
    }
    // if (computerSelection == 'Rock') {
    //     console.log('Player plays Rock');
    // } else if (computerSelection == 'Paper') {
    //     console.log('Players plays Paper');
    // } else if (computerSelection == 'Scissors') {
    //     console.log('Player plays Scissors') 
    // } else {
    //     console.log('Something went wrong, contact Stan!');
    // }
}

const buttons = document.querySelectorAll('button');

const content = document.querySelector('.playerResult');

const result = document.createElement('div');
result.classList.add('result');

content.appendChild(result);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result.textContent = 'Player plays: ' + button.id;
    });
});



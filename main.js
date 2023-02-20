let prompt = require('prompt-sync')()

//function to get a random choise for the computer
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
} else {
    console.log("It's a draw!")
}

//TODO try with a switch instead of if statements
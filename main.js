let prompt = require('prompt-sync')()

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 0) {
        console.log("Computer chose: Rock")
    } else if (randomNumber == 1) {
        console.log("Computer chose: Paper")
    } else {
        console.log("Computer chose: Scissors")
    }
}


let userInput = prompt("Choose between Rock, Paper or Scissors")
console.log("You chose: " + userInput)

console.log(getComputerChoice())


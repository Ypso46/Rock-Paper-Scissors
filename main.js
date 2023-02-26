//function to get a random choice for the computer
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = "";
    if (randomNumber == 0) {
        computerSelection = "Rock";
    } else if (randomNumber == 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}

function playRound(playerSelection) {
    if (playerSelection == 'rock') {
        console.log('Player plays Rock');
    } else if (playerSelection == 'paper') {
        console.log('Players plays Paper');
    } else if (playerSelection == 'scissors') {
        console.log('Player plays Scissors'); 
    } else {
        console.log('Something went wrong, contact Stan!');
    }
    return playerSelection;
}

const buttons = document.querySelectorAll('button');
const content = document.querySelector('.playerResult');
const resultPlayer = document.createElement('div');
resultPlayer.classList.add('resultPlayer');
content.appendChild(resultPlayer);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        resultPlayer.textContent = 'Player plays: ' + button.id;
        
    });
});

const resultComputer = document.createElement('div');
resultComputer.classList.add('resultComputer');
content.appendChild(resultComputer);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        resultComputer.textContent = 'Computer plays ' + getComputerChoice();
        
    });
});


//making the code to determine the winner
function determineWinner(playerSelection, computerSelection) {
    if (computerSelection == "Rock" && playerSelection == "Paper") {
        return 'Player won';
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        return 'Computer won!'; 
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        return 'Computer won!'; 
    } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        return 'You won!';
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        return 'Computer won!';
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        return 'You won!'; 
    } else {
        return "It's a draw!";
    }
}

//display the results in a new div
const endGame = document.querySelector('.playerResult');
const endResult = document.createElement('div');
endGame.appendChild(endResult);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        endResult.textContent = determineWinner();
    })
})

//function to get a random choice for the computer
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = '';
    if (randomNumber == 0) {
        computerSelection = 'Rock';
    } else if (randomNumber == 1) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

function playRound(playerSelection) {
    if (playerSelection == 'rock') {
        playerSelection = 'Rock';
    } else if (playerSelection == 'paper') {
        playerSelection = 'Paper';
    } else if (playerSelection == 'scissors') {
        playerSelection = 'Scissors';
    } else {
        console.log('Something went wrong, contact Stan!');
    }
    return playerSelection;
}

const buttons = document.querySelectorAll('button');
const content = document.querySelector('.gameResult');
const resultPlayer = document.createElement('div');
resultPlayer.classList.add('gamePlayer');
content.appendChild(resultPlayer);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        resultPlayer.textContent = 'Player plays: ' + button.value;
        
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


//display the results in a new div
const endGame = document.querySelector('.gameResult');
const endResult = document.createElement('div');
endGame.appendChild(endResult);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        resultComputer.textContent = 'Computer plays ' + computerChoice;
        endResult.textContent = determineWinner(button.value, computerChoice);
    });
});

//making the code to determine the winner
function determineWinner(playerSelection, computerSelection) {
    if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        return 'Player won';
    } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        return 'Computer won!'; 
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        return 'Computer won!'; 
    } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        return 'You won!';
    } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        return 'Computer won!';
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        return 'You won!'; 
    } else {
        return "It's a draw!";
    }
}
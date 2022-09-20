const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    randomChoices = choices[Math.floor(Math.random() * choices.length)];
    return randomChoices;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You WIN!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You WIN!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You LOOSE!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You LOOSE!";
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return "You WIN!";
    } else {
        return "That's DRAW!";
    }
}

function game() {
    return playRound(playerSelection, computerSelection); 
}

const playerSelection = prompt("Your turn: ");
const computerSelection = getComputerChoice();

document.getElementById('comp-choice').innerHTML = 
`The computer's choice: ${getComputerChoice()} and you enter: ${playerSelection}, so the result is: ${game()}`;


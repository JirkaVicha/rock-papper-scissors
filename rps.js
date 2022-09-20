const choices = ["rock", "paper", "scissors"];

let playerSelection = prompt("Your choice: ");
let computerSelection = choices[Math.floor(Math.random() * 3)];

// function getComputerChoice() {
//     let randomChoices = choices[Math.floor(Math.random() * 3)];
//     return randomChoices;
// }

function game() {
    return playRound(playerSelection, computerSelection); 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You WIN!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You WIN!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You WIN!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You LOOSE!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You LOOSE!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You LOOSE!";
    } else {
        return "It's TIE!!";
    }
}

document.getElementById('comp-choice').innerHTML = 
`${game()}, Player: ${playerSelection} Computer: ${computerSelection}`;


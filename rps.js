const choices = ['ROCK', 'PAPER', 'SCISSORS'];

// Buttons
document.getElementById('rockBtn').addEventListener('click', rockButton);
document.getElementById('paperBtn').addEventListener('click', paperButton);
document.getElementById('scissorsBtn').addEventListener('click', scissorsButton);
document.getElementById('resetBtn').addEventListener('click', resetAll);

// Function to make random number from choices array, rock, paper, or scissors
function getCompChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let compScore = 0;

// when any btn's are clicked, player's choice is make, computer's is random
function rockButton() {
    const player =  document.getElementById('player-choice').textContent = `${choices[0]}`;
    const comp = document.getElementById('comp-choice').textContent = `${getCompChoice()}`;
    if (player === 'ROCK' && comp === 'SCISSORS') {
        document.getElementById('result').innerHTML = "Player WIN!";
        playerScore++;
        document.getElementById('player-score').textContent = `${playerScore}`;
    } else if (player === 'ROCK' && comp === 'PAPER') {
        document.getElementById('result').innerHTML = "Computer WIN!";
        compScore++;
        document.getElementById('comp-score').textContent = `${compScore}`;
    } else {
        document.getElementById('result').innerHTML = "TIE!!";
    }
    checkWinner();
    return player, comp;
}

function paperButton() {
    checkWinner()
    const player = document.getElementById('player-choice').textContent = `${choices[1]}`;
    const comp = document.getElementById('comp-choice').textContent = `${getCompChoice()}`;
    if (player === 'PAPER' && comp === 'ROCK') {
        document.getElementById('result').innerHTML = "Player WIN!";
        playerScore++;
        document.getElementById('player-score').textContent = `${playerScore}`;
    } else if (player === 'PAPER' && comp === 'SCISSORS') {
        document.getElementById('result').innerHTML = "Computer WIN!";
        compScore++;
        document.getElementById('comp-score').textContent = `${compScore}`;
    } else {
        document.getElementById('result').innerHTML = "TIE!!";
    }
    checkWinner();
    return player, comp;
}

function scissorsButton() {
    checkWinner()
    const player = document.getElementById('player-choice').textContent = `${choices[2]}`;
    const comp = document.getElementById('comp-choice').textContent = `${getCompChoice()}`;
    if (player === 'SCISSORS' && comp === 'PAPER') {
        document.getElementById('result').innerHTML = "Player WIN!";
        playerScore++;
        document.getElementById('player-score').textContent = `${playerScore}`;
    } else if (player === 'SCISSORS' && comp === 'ROCK') {
        document.getElementById('result').innerHTML = "Computer WIN!";
        compScore++;
        document.getElementById('comp-score').textContent = `${compScore}`;
    } else {
        document.getElementById('result').innerHTML = "TIE!!";
    }
    checkWinner();
    return player, comp;
}

// function to check the Winner. Winner is who first reach 5 points.
function checkWinner() {
    if (playerScore === 5) {
        document.getElementById('winner').textContent = "PLAYER!";
    } else if (compScore === 5) {
        document.getElementById('winner').textContent = "COMPUTER!";
    } 
} 

// function to reset all values
function resetAll() {
    return document.getElementById('player-choice').textContent = '',
           document.getElementById('comp-choice').textContent = '',
           document.getElementById('result').innerHTML = '',
           document.getElementById('player-score').textContent = '0',
           document.getElementById('comp-score').textContent = '0',
           document.getElementById('winner').textContent = '',
           document.getElementById('winner').textContent = '';

           playerScore = 0, compScore = 0;
    }











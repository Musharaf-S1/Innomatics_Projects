const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const resultPara = document.getElementById('result');
const scorePara = document.getElementById('score');

let userScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => playGame("rock"));
paperButton.addEventListener('click', () => playGame("paper"));
scissorsButton.addEventListener('click', () => playGame("scissors"));

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    resultPara.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
    updateScore(result);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function updateScore(result) {
    if (result === "You win!") {
        userScore++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }
    scorePara.textContent = `Score - You: ${userScore}, Computer: ${computerScore}`;
}

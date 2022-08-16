let userScore = 0;
let computerScore = 0;
let cScore = document.getElementById("cScore");
let pScore = document.getElementById("pScore");
let announceResult = document.getElementById("announceResult");
const cImg = document.getElementById("cImg");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

const buttonRock = document.getElementById("rock").addEventListener("mouseup", () => {
    playRound("Rock")
});
const buttonPaper = document.getElementById("paper").addEventListener("mouseup", () => {
    playRound("Paper")
});
const buttonScissors = document.getElementById("scissors").addEventListener("mouseup", () => {
    playRound("Scissors")
});


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (userScore < 5 && computerScore < 5) {
        cImg.src = "./img/" + computerSelection.toLowerCase() + ".png";
        if (playerSelection === computerSelection) {
            announceResult.textContent = (`It's a tie! ${playerSelection} vs. ${computerSelection}`);
        } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
            playerSelection === "Paper" && computerSelection === "Scissors" ||
            playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore++;
            announceResult.textContent = (`You lose! ${computerSelection} beats ${playerSelection}`);
            cScore.textContent = computerScore;
        } else {
            userScore++;
            announceResult.textContent = (`You win! ${playerSelection} beats ${computerSelection}`);
            pScore.textContent = userScore;
        }
    } else { endGame() }
}

function endGame() {
    if (userScore === 5) {
        announceResult.textContent = ("Congratulations! You won the game!")
    } if (computerScore === 5) {
        announceResult.textContent = ("You lost the game :(");
    } announceResult.style.color = "#FF6666";
}

const reset = document.getElementById("reset")
reset.addEventListener("mouseup", () => {
    newGame()
});

function newGame() {
    userScore = 0;
    computerScore = 0;
    announceResult.textContent = ("Click icon below to choose your weapon");
}










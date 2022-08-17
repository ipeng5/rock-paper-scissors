let userScore = 0;
let computerScore = 0;
let cScore = document.getElementById("cScore");
let pScore = document.getElementById("pScore");
let announceResult = document.getElementById("announceResult");
const cImg = document.getElementById("cImg");
const buttonRock = document.getElementById("rock")
const buttonPaper = document.getElementById("paper")
const buttonScissors = document.getElementById("scissors")
cScore.textContent = 0;
pScore.textContent = 0;

buttonScissors.addEventListener("mouseup", () => {
    playRound("Scissors", getComputerChoice())
});
buttonPaper.addEventListener("mouseup", () => {
    playRound("Paper", getComputerChoice());
});
buttonRock.addEventListener("mouseup", () => {
    playRound("Rock", getComputerChoice());
});

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

function playRound(playerSelection, computerSelection) {
    cImg.src = "./img/" + computerSelection.toLowerCase() + ".png";
    if (playerSelection === computerSelection) {
        announceResult.textContent = (`It's a tie! ${playerSelection} versus ${computerSelection}`);
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        announceResult.textContent = (`You lose! ${computerSelection} beats ${playerSelection}`);
        cScore.textContent = computerScore;
        if (computerScore === 5) {
            computerWin();
        }
    } else {
        userScore++;
        announceResult.textContent = (`You win! ${playerSelection} beats ${computerSelection}`);
        pScore.textContent = userScore;
        if (userScore === 5) {
            playerWin();
        }
    }
}

function playerWin() {
    announceResult.textContent = ("Congratulations! You won the game!");
    announceResult.style.color = "#FF6666";
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
}
function computerWin() {
    announceResult.textContent = ("Sorry. You just lost the game :(");
    announceResult.style.color = "#FF6666";
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
}

const reset = document.getElementById("reset")
reset.addEventListener("mouseup", () => {
    newGame()
});

function newGame() {
    userScore = 0;
    computerScore = 0;
    cScore.textContent = 0;
    pScore.textContent = 0;
    cImg.src = "img/q-mark.png";
    announceResult.textContent = ("Click icon below to choose your weapon");
    announceResult.style.color = "#fff";
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
}
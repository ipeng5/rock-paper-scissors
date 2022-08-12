let userScore = 0;
let computerScore = 0;

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
    if (playerSelection === computerSelection) {
        console.log(`Draw! ${playerSelection} vs. ${computerSelection}`);
    } else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
        userScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        let userinput = prompt("Choose what to throw:", "'Rock', 'Paper' or 'Scissors'");
        while (userinput.toLowerCase() !== "rock" && userinput.toLowerCase() !== "paper" && userinput.toLowerCase() !== "scissors") {
            userinput = prompt("Choose what to throw:", "'Rock', 'Paper' or 'Scissors'");
        }
        const playerSelection = userinput.slice(0, 1).toUpperCase() + userinput.slice(1).toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i}`);
        playRound(playerSelection, computerSelection);
        console.log(`Your score: ${userScore} vs. computer score: ${computerScore}`)
    }
}

game()

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const result = document.querySelector("#result-text");
const explanation = document.querySelector("#explanation-text");

const humanScore = document.querySelector("#player-score-number");
const computerScore = document.querySelector("#computer-score-number");

const buttons = document.querySelectorAll("button");

const scoreboard = [0, 0];

rock.addEventListener("click", () => {
  const weaponChoice = document.querySelector("#player-weapon-choice");
  weaponChoice.src = "./images/rock.png";
  playGame("rock");
});

paper.addEventListener("click", () => {
  const weaponChoice = document.querySelector("#player-weapon-choice");
  weaponChoice.src = "./images/paper.png";
  playGame("paper");
});

scissors.addEventListener("click", () => {
  const weaponChoice = document.querySelector("#player-weapon-choice");
  weaponChoice.src = "./images/scissors.png";
  playGame("scissors");
});

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    const weaponChoice = document.querySelector("#computer-weapon-choice");
    weaponChoice.src = "./images/rock.png";
    return "rock";
  } else if (choice > 0.33 && choice < 0.66) {
    const weaponChoice = document.querySelector("#computer-weapon-choice");
    weaponChoice.src = "./images/paper.png";
    return "paper";
  } else {
    const weaponChoice = document.querySelector("#computer-weapon-choice");
    weaponChoice.src = "./images/scissors.png";
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "paper") {
    result.textContent = "You won!";
    explanation.textContent = "Paper beats Rock";
    scoreboard[0]++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    result.textContent = "You lost!";
    explanation.textContent = "Paper beats Rock";
    scoreboard[1]++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    result.textContent = "You lost!";
    explanation.textContent = "Rock beats Sciccors";
    scoreboard[1]++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    result.textContent = "You won!";
    explanation.textContent = "Rock beats Scissors";
    scoreboard[0]++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    result.textContent = "You lost!";
    explanation.textContent = "Scissors beat Paper";
    scoreboard[1]++;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    result.textContent = "You won!";
    explanation.textContent = "Scissors beat Paper";
    scoreboard[0]++;
  } else if (computerChoice === "rock" && humanChoice === "rock") {
    result.textContent = "It's a tie!";
    explanation.textContent = "No point earned";
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    result.textContent = "It's a tie!";
    explanation.textContent = "No point earned";
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    result.textContent = "It's a tie!";
    explanation.textContent = "No point earned";
  }
}

function playGame(humanChoice) {
  playRound(humanChoice, getComputerChoice());
  humanScore.textContent = scoreboard[0];
  computerScore.textContent = scoreboard[1];
  if (scoreboard[0] == 5 || scoreboard[1] == 5) {
    result.textContent = "Game Over";
    if (scoreboard[0] == 5) {
      explanation.textContent = "What a Victory!";
    } else {
      explanation.textContent = "Defeat...";
    }
    rock.disabled = true;
    rock.style.cursor = "default";
    paper.disabled = true;
    paper.style.cursor = "default";
    scissors.disabled = true;
    scissors.style.cursor = "default";
  }
}

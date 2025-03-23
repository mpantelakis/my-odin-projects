let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) return "rock";
  else if (choice > 0.33 && choice < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("What is your choice? Rock, Paper or Scissors?");
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice.toLowerCase() === "paper") {
    console.log("You win! Paper beats rock");
    humanScore++;
  } else if (
    computerChoice === "paper" &&
    humanChoice.toLowerCase() === "rock"
  ) {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (
    computerChoice === "rock" &&
    humanChoice.toLowerCase() === "scissors"
  ) {
    console.log("You lose! Rock beats Sciccors");
    computerScore++;
  } else if (
    computerChoice === "scissors" &&
    humanChoice.toLowerCase() === "rock"
  ) {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (
    computerChoice === "scissors" &&
    humanChoice.toLowerCase() === "paper"
  ) {
    console.log("You lose! Scissors beat Paper");
    computerScore++;
  } else if (
    computerChoice === "paper" &&
    humanChoice.toLowerCase() === "scissors"
  ) {
    console.log("You win! Scissors beat Paper");
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice.toLowerCase() === "rock")
    console.log("It's a tie!");
  else if (
    computerChoice === "scissors" &&
    humanChoice.toLowerCase() === "scissors"
  )
    console.log("It's a tie!");
  else if (computerChoice === "paper" && humanChoice.toLowerCase() === "paper")
    console.log("It's a tie!");
}

function playGame() {
  for (let i = 0; i < 4; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(
      "The score is Human " + humanScore + " - " + computerScore + " Computer"
    );
  }
  playRound(getHumanChoice(), getComputerChoice());
  console.log(
    "The final score is Human " +
      humanScore +
      " - " +
      computerScore +
      " Computer"
  );
}

playGame();

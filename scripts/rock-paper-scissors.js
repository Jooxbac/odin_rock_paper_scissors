let computerScore = 0;
let humanScore = 0;
let roundNumber = 1;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  let shape;
  let value = Math.floor(Math.random() * 3);

  switch (value) {
    case 0:
      shape = "rock";
      break;
    case 1:
      shape = "paper";
      break;
    case 2:
      shape = "scissors";
      break;
    default:
      break;
  }
  return shape;
}

function getHumanChoice() {
  let shape = prompt(
    "Round #" +
      roundNumber +
      '\nWrite your choice: "rock", "paper" or "scissors"'
  );
  return shape.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  console.log("The computer chose: " + computerChoice);
  console.log("You chose " + humanChoice);

  if (computerChoice === humanChoice) {
    console.log("It's a draw!");
  } else {
    switch (computerChoice) {
      case "rock":
        if (humanChoice === "paper") {
          console.log("You win! Paper beats rock");
          humanScore++;
        } else if (humanChoice === "scissors") {
          console.log("You lose! Rock beats scissors");
          computerScore++;
        }
        break;
      case "paper":
        if (humanChoice === "rock") {
          console.log("You lose! Paper beats rock");
          computerScore++;
        } else if (humanChoice === "scissors") {
          console.log("You win! Scissors beats paper");
          humanScore++;
        }
        break;
      case "scissors":
        if (humanChoice === "rock") {
          console.log("You win! Rock beats scissors");
          humanScore++;
        } else if (humanChoice === "paper") {
          console.log("You lose! Scissors beats paper");
          computerScore++;
        }
        break;
      default:
        break;
    }
  }

  console.log(
    "\nSCORES:\nComputer score: " +
      computerScore +
      "\nYour score " +
      humanScore +
      "\n\n"
  );
}

playRound(computerSelection, humanSelection);

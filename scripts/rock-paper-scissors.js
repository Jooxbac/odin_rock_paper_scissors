/************
 * VARIABLES
 ************/

let roundNumber = 1;
let humanSelection;
let computerSelection;

/************
 * FUNCTIONS
 ************/

/**
 * Gets the shape chosen randomly by the computer
 * @returns shape chosen by the computer
 */
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

/**
 * Gets the shape chosen by the human player
 * @returns shape chosen by the human player
 */
function getHumanChoice() {
  let shape = prompt(
    "Round #" +
      roundNumber +
      '\nWrite your choice: "rock", "paper" or "scissors"'
  );
  return shape.toLowerCase();
}

/**
 * Allow to play multiple rounds
 * Stores scores, increments round number and show messages with the final results
 */
function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  /**
   * Allows to play a single round
   * Compares the shapes, increments scores and show messages with info for the round
   * @param {string} computerChoice the shape chosen by the computer
   * @param {string} humanChoice the shape chosen by the human player
   */
  function playRound(computerChoice, humanChoice) {
    console.log(
      "ROUND #" +
        roundNumber +
        "\nThe computer chose: " +
        computerChoice +
        "\nYou chose " +
        humanChoice
    );

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

  for (let index = 0; index < 5; index++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    roundNumber++;
  }

  if (computerScore > humanScore) {
    console.log(
      "Final result: " +
        computerScore +
        "-" +
        humanScore +
        "\nYou lost the game, better luck next time!"
    );
  } else if (humanScore > computerScore) {
    console.log(
      "Final result: " +
        computerScore +
        "-" +
        humanScore +
        "\nCongratulations, you won the game!"
    );
  } else {
    console.log(
      "Final result: " +
        computerScore +
        "-" +
        humanScore +
        "\nIt has been a draw!"
    );
  }
}

/************
 * MAIN
 ************/

// Timeout added to let the browser load the HTML
setTimeout(() => {
  playGame();
}, 1000);

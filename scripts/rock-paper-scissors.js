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
    let shape = prompt('Write your choice: "rock", "paper" or "scissors"');
    return shape;
}


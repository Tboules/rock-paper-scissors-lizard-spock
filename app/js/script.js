const closeRules = document.querySelector(".rule-close");
const openRules = document.querySelector(".rules__butt");
const ruleModal = document.querySelector(".rules__overlay");
const gameButtons = document.querySelectorAll("[data-game-buttons]");
const playerChips = document.querySelectorAll("[data-player-chip");
const computerChips = document.querySelectorAll("[data-computer-chip");
const hexSection = document.querySelector(".hex");
const resultsSection = document.querySelector(".results");
const playAgainSection = document.querySelector(
  ".results__picked__final-reset"
);
const playAgainButton = document.querySelector(".play-again");
const resultTitle = playAgainSection.childNodes[1];
const winningCircles = document.querySelectorAll(".winning-circles");
const scoreTotal = document.querySelector("#score-total");

//initialized Variables
let playerChose = null;
let computerChose = null;
let score = 0;
const choiceList = Array.from(gameButtons).map((button) => button.id);
const gameMap = {
  scissors: ["rock", "spock"],
  paper: ["scissors", "lizard"],
  rock: ["paper", "spock"],
  lizard: ["scissors", "rock"],
  spock: ["lizard", "paper"],
};

closeRules.addEventListener("click", () => {
  ruleModal.classList.add("hide");
});

openRules.addEventListener("click", () => {
  ruleModal.classList.remove("hide");
});

gameButtons.forEach((button) => {
  button.addEventListener("click", () => playerChooses(button));
});

playAgainButton.addEventListener("click", resetGame);

function computerChooses(item) {
  const randomNumber = Math.floor(Math.random() * 4);
  let newList = choiceList.filter((choice) => choice != item);
  computerChose = newList[randomNumber];
}

function playerChooses(button) {
  playerChose = button.id;
  computerChooses(playerChose);
  hexSection.classList.add("hide");
  resultsSection.classList.remove("hide");
  showPlayerChip(true);

  setTimeout(() => showComputerChip(true), 2000);

  setTimeout(showResults, 2000);

  console.log(doesPlayerWin());
}

function doesPlayerWin() {
  let playerLosesTo = gameMap[playerChose];
  return !playerLosesTo.find((item) => item === computerChose);
}

function showPlayerChip(hide) {
  let playerChip = Array.from(playerChips).filter(
    (chip) => chip.id === playerChose
  );
  if (!hide) {
    playerChip[0].classList.add("hide");
  } else {
    playerChip[0].classList.remove("hide");
  }
}

function showComputerChip(hide) {
  let computerChip = Array.from(computerChips).filter((chip) => {
    return chip.id === computerChose;
  });
  if (!hide) {
    computerChip[0].classList.add("hide");
  } else {
    computerChip[0].classList.remove("hide");
  }
}

function showResults() {
  if (doesPlayerWin()) {
    winningCircles[0].classList.remove("hide");
    resultTitle.innerText = "YOU WIN";
    score++;
  } else {
    winningCircles[1].classList.remove("hide");
    resultTitle.innerText = "YOU LOOSE";
    score--;
  }

  playAgainSection.classList.remove("hide");
  scoreTotal.innerText = score;
}

function resetGame() {
  hexSection.classList.remove("hide");
  resultsSection.classList.add("hide");
  showPlayerChip(false);
  showComputerChip(false);
  winningCircles[0].classList.add("hide");
  winningCircles[1].classList.add("hide");
  resultTitle.innerText = "";
  playAgainSection.classList.add("hide");
}

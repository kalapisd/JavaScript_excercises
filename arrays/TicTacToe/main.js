const cells = document.querySelectorAll(".cell");
const statusDisplay = document.getElementById("status");
const restartButton = document.getElementById("restart-btn");

let currentplayer = "X";
let isGameActive = true;
let board = ['', '', '', '', '', '', '', '', ''];

const winnerLayouts = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(clickedCellEvent) {
  let clickedCell = clickedCellEvent.target;
  let clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

  if (board[clickedCellIndex] != "" || !isGameActive) {
    return;
  }

  board[clickedCellIndex] = currentplayer;
  clickedCell.textContent = currentplayer;

  if (checkWin()) {
    statusDisplay.textContent = `Player ${currentplayer} won!`;
    isGameActive = false;
    return;
  }

  if (!board.includes("")) {
    statusDisplay.textContent = "It's a draw!";
    isGameActive = false;
    return;
  }

  currentplayer = currentplayer === "X" ? "O" : "X";
  statusDisplay.textContent = `The next player is ${currentplayer}`;
}

function checkWin() {
  return winnerLayouts.some((layout) => {
    return layout.every((index) => {
      return board[index] === currentplayer;
    });
  });
}

function restartGame() {
  currentplayer = "X";
  isGameActive = true;
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => (cell.textContent = ""));
  statusDisplay.textContent = `The next player is ${currentplayer}`;
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
restartButton.addEventListener("click", restartGame);

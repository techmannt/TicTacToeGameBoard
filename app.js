let cells = document.querySelectorAll('.cell');
let boardSymbol = "X";
let squaresUsed = 0;
let winner = false;
let draw = false;

cells.forEach(function (cell) {
  cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
  if (winner == false && draw == false) {
    if (e.target.textContent.length != 1) { // If the cell clicked doesn't contain a character (hence the length of 1), then place a symbol there.
      e.target.textContent = boardSymbol;
      changeSymbol();
      squaresUsed++; // Count the squares that are being filled up so we can check for a DRAW later.
      checkForWin();
    }
  } else {  // If there is a WINNER or a DRAW and a cell is clicked on, then reset the board for another game!
    resetGameBoard();
  }
}

function resetGameBoard() {
  cells.forEach(function (cell) { // Blank all of the cells.
    cell.innerHTML = "";
    document.querySelector('.result').innerHTML = "";
  });
  winner = false;  // Reset the variables.
  draw = false;
  boardSymbol = "X";
  squaresUsed = 0;
}

function changeSymbol() {
  if (boardSymbol == "X") {  // If the previously placed symbol was an "X", then change to "O" for next time.
    boardSymbol = "O";
  } else {
    boardSymbol = "X";  // If the previously placed symbol was an "O", then change to "X" for next time.
  }
}

function checkForWin() {
  let top = document.querySelectorAll('.top');
  let center = document.querySelectorAll('.center');
  let bottom = document.querySelectorAll('.bottom');
  let left = document.querySelectorAll('.left');
  let middle = document.querySelectorAll('.middle');
  let right = document.querySelectorAll('.right');
  let topRight = document.querySelector('.top.right').innerHTML;
  let centerMiddle = document.querySelector('.center.middle').innerHTML;
  let bottomLeft = document.querySelector('.bottom.left').innerHTML;
  let topLeft = document.querySelector('.top.left').innerHTML;
  let bottomRight = document.querySelector('.bottom.right').innerHTML;

  // If the top line has either all X's or all O's, then declare a winner.
  if ((top[0].innerHTML == "X" && top[1].innerHTML == "X" && top[2].innerHTML == "X") || (top[0].innerHTML == "O" && top[1].innerHTML == "O" && top[2].innerHTML == "O")) {
    declareWinner();  // If the center line has either all X's or all O's, then declare a winner.
  } else if  ((center[0].innerHTML == "X" && center[1].innerHTML == "X" && center[2].innerHTML == "X") || (center[0].innerHTML == "O" && center[1].innerHTML == "O" && center[2].innerHTML == "O")) {
    declareWinner();
  } else if ((bottom[0].innerHTML == "X" && bottom[1].innerHTML == "X" && bottom[2].innerHTML == "X") || (bottom[0].innerHTML == "O" && bottom[1].innerHTML == "O" && bottom[2].innerHTML == "O")) {
    declareWinner();
  } else if ((left[0].innerHTML == "X" && left[1].innerHTML == "X" && left[2].innerHTML == "X") || (left[0].innerHTML == "O" && left[1].innerHTML == "O" && left[2].innerHTML == "O")) {
    declareWinner();
  } else if ((middle[0].innerHTML == "X" && middle[1].innerHTML == "X" && middle[2].innerHTML == "X") || (middle[0].innerHTML == "O" && middle[1].innerHTML == "O" && middle[2].innerHTML == "O")) {
    declareWinner();
  } else if ((right[0].innerHTML == "X" && right[1].innerHTML == "X" && right[2].innerHTML == "X") || (right[0].innerHTML == "O" && right[1].innerHTML == "O" && right[2].innerHTML == "O")) {
    declareWinner();  // If either of the diagonals has either all X's or all O's, then declare a winner.
  } else if ((topRight == "X" && centerMiddle == "X" && bottomLeft == "X") || (topLeft == "X" && centerMiddle == "X" && bottomRight == "X") || ((topRight == "O" && centerMiddle == "O" && bottomLeft == "O") || (topLeft == "O" && centerMiddle == "O" && bottomRight == "O")) ) {
    declareWinner();
  }

  if (squaresUsed == 9 && winner == false) { // If all of the squares on the board are filled and there's no winner, then it's a DRAW.
    document.querySelector('.result').innerHTML = "Draw!";
    draw = true;
  }
}

function declareWinner() {
  document.querySelector('.result').innerHTML = "Winner!";
  winner = true;
}

const gridSize = 512;
let squares = [];
let squareRows = [];
let mouseDown = false;
let mode = "black";
let gradient = false;
let gridSquares = Number(prompt("Please enter the grid size (1-100)"));

while (isNaN(gridSquares) || gridSquares <= 0 || gridSquares > 100)
  gridSquares = Number(prompt("Please enter a valid grid size (1-100)"));

let squareSize = gridSize / gridSquares;

function clearGrid() {
  for (let i = 0; i < gridSquares; i++) {
    for (let k = 0; k < gridSquares; k++) {
      squares[i][k].style.backgroundColor = "white";
    }
  }
}

function changeColor(e) {
  let opacity = Number(getComputedStyle(e.target).opacity);
  if (!mouseDown && e.type !== "click") return;
  else {
    if (mode == "black") {
      if (gradient && opacity < 1) {
        console.log(opacity);
        e.target.style.backgroundColor = "black";
        e.target.style.opacity = opacity + 0.1;
      } else {
        e.target.style.backgroundColor = "black";
        e.target.style.opacity = 1;
      }
    } else if (mode == "eraser") e.target.style.backgroundColor = "white";
    else if (mode == "rainbow")
      if (gradient && opacity < 1) {
        console.log(opacity);
        e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255})`;
        e.target.style.opacity = opacity + 0.1;
      } else {
        e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255})`;
        e.target.style.opacity = 1;
      }
  }
}

const body = document.querySelector("body");
body.addEventListener("mousedown", () => {
  mouseDown = true;
});
body.addEventListener("mouseup", () => {
  mouseDown = false;
});

const squaresContainer = document.querySelector(".squares-container");

const blackButton = document.querySelector("#black");
blackButton.style.border = "solid black 5px";
blackButton.addEventListener("click", (e) => {
  mode = "black";
  e.target.style.border = "solid black 5px";
  eraserButton.style.border = "0";
  rainbowButton.style.border = "0";
});

const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", (e) => {
  mode = "rainbow";
  e.target.style.border = "solid black 5px";
  eraserButton.style.border = "0";
  blackButton.style.border = "0";
});

const gradientButton = document.querySelector("#gradient");
gradientButton.addEventListener("click", (e) => {
  if (gradient) {
    gradient = false;
    e.target.style.border = "0";
  } else {
    gradient = true;
    e.target.style.border = "solid black 5px";
  }
});

const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", (e) => {
  mode = "eraser";
  e.target.style.border = "solid black 5px";
  blackButton.style.border = "0";
  rainbowButton.style.border = "0";
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => clearGrid());

for (let i = 0; i < gridSquares; i++) {
  squareRows[i] = document.createElement("div");
  squareRows[i].className = "square-row";
  squareRows[i].style.height = `${gridSize / gridSquares}px`;
  squares[i] = [];
  for (let k = 0; k < gridSquares; k++) {
    squares[i][k] = document.createElement("div");
    squares[i][k].className = "square";
    squares[i][k].style.height = `${squareSize}px`;
    squares[i][k].style.width = `${squareSize}px`;
    squares[i][k].addEventListener("mouseenter", (e) => changeColor(e));
    squares[i][k].addEventListener("click", (e) => changeColor(e));

    squareRows[i].appendChild(squares[i][k]);
  }
  squaresContainer.appendChild(squareRows[i]);
}

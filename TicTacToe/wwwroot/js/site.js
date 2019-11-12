// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var currentTurn = "X";

var turnElement = document.getElementById("turn");
turnElement.innerText = "Player " + currentTurn + "'s turn.";

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", onClick);
}

function onClick(event) {
    event.preventDefault();
    if (event.target.innerText !== "X" && event.target.innerText !== "O") {
        event.target.innerText = currentTurn;
        nextTurn();
    }
}

function nextTurn() {
    currentTurn = (currentTurn === "X") ? "O" : "X";
    turnElement.innerText = "Player " + currentTurn + "'s turn.";
}

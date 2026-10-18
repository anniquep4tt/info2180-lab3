document.addEventListener("DOMContentLoaded", function() {

    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");

    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameOver = false;


    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach(function(square, index) {

        square.classList.add("square");

        square.addEventListener("click", function() {

            if (board[index] === "") {

                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                board[index] = currentPlayer;

                checkWinner();


                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }
            }

        });


        square.addEventListener("mouseenter", function() {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });

    });

    function checkWinner() {

        for (let combination of winningCombinations) {

            let a = combination[0];
            let b = combination[1];
            let c = combination[2];

            if (board[a] !== "" &&
                board[a] === board[b] &&
                board[b] === board[c]) {

                status.textContent =
                    "Congratulations! " + board[a] + " is the Winner!";

                status.classList.add("you-won");

                gameOver = true;
                return;
            }
        }
    }

});
document.addEventListener("DOMContentLoaded", function() {

    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];

    squares.forEach(function(square, index) {

        square.classList.add("square");

        square.addEventListener("click", function() {

            if (board[index] === "") {

                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                board[index] = currentPlayer;

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
});
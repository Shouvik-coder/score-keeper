const player1Score = document.querySelector("#score1");
const player2Score = document.querySelector("#score2");
const dropdown = document.querySelector("#dropdown");
document.querySelector("#player1").addEventListener("click", function () {
    player1Score.textContent++;
    if (player1Score.textContent == dropdown.value) {
        player1Score.style.color = "green";
        player2Score.style.color = "red";
        document.querySelector("#player1").disabled = true;
        document.querySelector("#player2").disabled = true;
        document.querySelector("#instruction").textContent = "Player 1 Wins, Congrats!!";

    }


})

document.querySelector("#player2").addEventListener("click", function () {
    player2Score.textContent++;
    if (player2Score.textContent == dropdown.value) {
        player2Score.style.color = "green";
        player1Score.style.color = "red";
        document.querySelector("#player1").disabled = true;
        document.querySelector("#player2").disabled = true;
        document.querySelector("#instruction").textContent = "Player 2 Wins, Congrats!!";
    }
})

document.querySelector("#reset").addEventListener("click", function () {
    player2Score.textContent = 0;
    player1Score.textContent = 0;
    document.querySelector("#player1").disabled = false;
    document.querySelector("#player2").disabled = false;
    player2Score.style.color = "black";
    player1Score.style.color = "black";
    document.querySelector("#instruction").textContent = "Click on the below player buttons to increment the score";
})
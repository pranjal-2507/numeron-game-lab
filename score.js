// Iteration 5: Store the player score and display it on the game over screen

const scoreBox = document.getElementById("score-board");
let passcode = localStorage.getItem("squad56");
console.log(passcode)
scoreBox.innerText = passcode;

const playagainButton = document.getElementById("play-again-button");
playagainButton.addEventListener("click" , ()=>{
    location.href = "./game.html"
})
function computerPlay() {

    // Made an array with the possible selections from the computer
    let answers = ["Rock", "Paper", "Scissors"];
    // Generate a random number between 0 and 2 which are the possible indexes from answers
    let pick = Math.random() * (2);
    // Take the number and use it as index to take a selection from array
    pick = Math.round(pick);
    // Return the string from the array
    return answers[pick];

}

// Create two variables to record the wins and loses
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {

    // Convert both selections into lowercase for better handling
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay().toLowerCase();
    let scoreResult = "";

    
    // Create all possible game combinations
    if (playerSelection === computerSelection) {
          scoreResult = "Tie";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            scoreResult = "Paper beats Rock";
        }
        else {
            playerScore++;
            scoreResult = "Rock beats Scissors";
        }
    }    
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            scoreResult = "Scissors beats Paper";
        }
        else {
            playerScore++;
            scoreResult = "Paper beats Rock";
        }        
    }    
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            scoreResult = "Rock beats Scissors";
        }
        else {
            playerScore++;
            scoreResult = "Scissors beats Paper";
        }        
    }  

    if (playerScore === 5) {
        scoreText(`${playerScore} - ${computerScore}`);
        scoreInfo("You win! Play again?"); 
        selections(playerSelection, computerSelection);
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorsButton").disabled = true;
    }
    else if (computerScore === 5) {
        scoreText(`${playerScore} - ${computerScore}`);
        scoreInfo("You lose! Play again?"); 
        selections(playerSelection, computerSelection);
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorsButton").disabled = true;
    }
    else {
        scoreText(`${playerScore} - ${computerScore}`);
        scoreInfo(scoreResult); 
        selections(playerSelection, computerSelection);
    }
        
}

function scoreText(scores) {
    let tempScores = document.getElementById("scores");
    tempScores.innerHTML = scores;
}

function scoreInfo(info) {
    let tempInfo = document.getElementById("scoreInfo");
    tempInfo.innerHTML = info;
}

function selections(playerSelection, computerSelection) {
    document.getElementById("playerSelection").innerHTML =
     `<img src='images/${playerSelection}picture.png' width='150' height='150'>`;
    document.getElementById("computerSelection").innerHTML = 
    `<img src='images/${computerSelection}picture.png' width='150' height='150'>`;

}

function reset() {
    document.getElementById("playerSelection").innerHTML = "";
    document.getElementById("computerSelection").innerHTML = "";
    document.getElementById("scoreInfo").innerHTML = "Make a selection!";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("scores").innerHTML = `${playerScore} - ${computerScore}`;
    document.getElementById("rockButton").disabled = false;
    document.getElementById("paperButton").disabled = false;
    document.getElementById("scissorsButton").disabled = false;

}

document.getElementById("rockButton").addEventListener("click", () => { console.log(playRound("rock")) });
document.getElementById("paperButton").addEventListener("click", () => { console.log(playRound("paper")) });
document.getElementById("scissorsButton").addEventListener("click", () => { console.log(playRound("scissors")) });

document.getElementById("resetButton").addEventListener("click", () => { reset() });







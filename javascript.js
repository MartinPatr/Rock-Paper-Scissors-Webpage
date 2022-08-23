//Function to get either rock, paper or scissors
function getComputerChoice() {
    //This will give a number between 1-3
    let ComputerChoice = Math.floor(Math.random() * 3) + 1;
    //This will turn that number into either rock, paper or scissors
    if (ComputerChoice === 1) {
        ComputerChoice =  "Rock";
    }
        else if (ComputerChoice === 2){
            ComputerChoice =  "Paper";
        }
        else {
            ComputerChoice = "Scissors";
        }
    return ComputerChoice;

}


let ComputerChoice = getComputerChoice();

//Function that will display what happens if you tie
function playerTie() {
    console.log("It was a tie you both chose, "  + ComputerChoice);
    getComputerChoice();
}
//Function that will display what happens if you lose
function playerLose() {
    console.log("You have lost, the computer chose " + ComputerChoice);
    getComputerChoice();
}
//Function that will display what happens if you win
function playerWin() {
    console.log("You have won, the computer chose " + ComputerChoice)
    getComputerChoice();
}



//Function that will review both inputs and determine a winner
function playRound(playerSelection) {
    let ComputerChoice = getComputerChoice();
    if (playerSelection == ComputerChoice) {
        playerTie();
    }
        else if (playerSelection == "Rock" && ComputerChoice == "Paper") {
            playerLose();
        }
        else if (playerSelection == "Scissors" && ComputerChoice == "Paper") { 
            playerWin();
        }
        else if (playerSelection == "Rock" && ComputerChoice == "Scissors") {
            playerWin();
        }
        else if (playerSelection == "Paper" && ComputerChoice == "Scissors") {
            playerLose();
        }
        else if (playerSelection == "Scissors" && ComputerChoice == "Rock") {
            playerLose();
        }
        else if (playerSelection == "Paper" && ComputerChoice == "Rock") {
            playerWin();
        }
}       
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

//Function that will review both inputs and determine a winner
function playRound(playerSelection) {
    //Function that will take the string and capitalize the first letter
    function capitalize(playerSelection) {
        let fix_string = playerSelection.toLowerCase()
        return fix_string.charAt(0).toUpperCase() + fix_string.slice(1);
    }
    
    let playerSelection_fix = capitalize(playerSelection);
    let ComputerChoice = getComputerChoice();
    
    
    
    //Function that will display what happens if you tie
    function playerTie() {
        console.log("It was a tie, the computer chose " + ComputerChoice);
    }
    //Function that will display what happens if you lose
    function playerLose() {
        console.log("You have lost, the computer chose " + ComputerChoice);
    }
    //Function that will display what happens if you win
    function playerWin() {
        console.log("You have won, the computer chose " + ComputerChoice)
    }
    
    if (playerSelection_fix == ComputerChoice) {
        playerTie();
    }
        else if (playerSelection_fix == "Rock" && ComputerChoice == "Paper") {
            playerLose();
        }
        else if (playerSelection_fix == "Scissors" && ComputerChoice == "Paper") { 
            playerWin();
        }
        else if (playerSelection_fix == "Rock" && ComputerChoice == "Scissors") {
            playerWin();
        }
        else if (playerSelection_fix == "Paper" && ComputerChoice == "Scissors") {
            playerLose();
        }
        else if (playerSelection_fix == "Scissors" && ComputerChoice == "Rock") {
            playerLose();
        }
        else if (playerSelection_fix == "Paper" && ComputerChoice == "Rock") {
            playerWin();
        }
}       
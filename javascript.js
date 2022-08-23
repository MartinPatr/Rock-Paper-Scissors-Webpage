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
//Add a variable to count the amount of rounds played
let i = 0;
//Add variables to track individual score of both the computer and the player
let playerScore = 0;
let computerScore = 0;

//Function that will review both inputs and determine a winner
function playRound(playerSelection) {
    
    //First five rounds
    if (i < 5) {

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
            console.log('Player Score:' + playerScore +  '  ComputerScore:' + computerScore);
            i++;

        }
        //Function that will display what happens if you lose
        function playerLose() {
            console.log("You have lost, the computer chose " + ComputerChoice);
            computerScore++;
            console.log('Player Score:' + playerScore +  '  ComputerScore:' + computerScore);
            i++;
        }
        //Function that will display what happens if you win
        function playerWin() {
            console.log("You have won, the computer chose " + ComputerChoice);
            playerScore++ 
            console.log('Player Score:' + playerScore +  '  ComputerScore:' + computerScore);
            i++;
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
        //The response to reveal the overall winner
        else if(i >= 5){
                if (playerScore > computerScore) {
                    console.log('You have won')
                    console.log('Final Score = Player Score:' + playerScore +  '  ComputerScore:' + computerScore);
                }
                    else if (playerScore < computerScore){
                        console.log('You have lost')
                        console.log('Final Score = Player Score:' + playerScore +  '  ComputerScore:' + computerScore);
                    }
                    else {
                        console.log('You have tied')
                        console.log('FInal Score = Player Score:' + playerScore +  '  ComputerScore:' + computerScore);
                    }
        }
}



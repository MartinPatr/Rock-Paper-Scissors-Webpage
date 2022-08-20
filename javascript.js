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
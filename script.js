function computerPlay(){

    let num = Math.floor(Math.random()*3);
    let answer;

    switch(num){
        case 0:
            answer = "Rock";
            break;
        case 1:
            answer = "Paper";
            break;
        case 2:
            answer = "Scissors";
            break;
    }
    return answer;
}

function playRound(playerSelection, computerSelection){

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result;

    if(player === computer){
        result = "It is a tie!";
 
    }else if(player == "rock" && computer == "scissors" || player == "papper" && computer == "rock" || player == "scissors" && computer == "papper"){
        result = "You win this round!";
  
    }else{
        result = "I win!";
    }
    return result;
}

function Game(){
    let playerScore = 0;
    let computerScore = 0;

        for(let i = 0; i < 5; i++){

            let playerSelection = prompt("What do you choose?");
            let computerSelection = computerPlay();
            let result = playRound(playerSelection,computerSelection);

            if(result == "You win this round!"){
                playerScore++;
            }else if(result == "I win"){
                computerScore++;
            }
            console.log(result);
            console.log("Computer score:" + computerScore);
            console.log("Player score:" + playerScore);
            console.log("---------------------------------");

        }

        
}


Game();


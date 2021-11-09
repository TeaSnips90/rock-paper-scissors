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

let answer = computerPlay();
console.log(answer);


function playRound(playerSelection, computerSelection){

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if(player === computer){
        console.log("It is a tie!");

    }else if(player == "rock" && computer == "scissors" || player == "papper" && computer == "rock" || player == "scissors" && computer == "papper"){
        console.log("You win this round!");
        
    }else{
        console.log("I win!");
    }
}
let playerSelection = computerPlay();
let computerSelection = "papper";
playRound(playerSelection,computerSelection);
computerPlay();

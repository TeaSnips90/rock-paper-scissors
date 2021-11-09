function computerPlay(){
    let num = Math.floor(Math.random()*3);
    console.log(num);
    
    let answer;
    switch(num){
        case 0:
            answer = "Rock!";
            break;
        case 1:
            answer = "Paper!";
            break;
        case 2:
            answer = "Scissors!";
            break;
    }
    console.log(answer);

}

computerPlay();
/*console.log(randomNumber());*/
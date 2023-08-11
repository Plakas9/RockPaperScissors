const Rbtn = document.querySelector('#R');
const Pbtn = document.querySelector('#P');
const Sbtn = document.querySelector('#S');
let pResult = document.createElement('p');
let cResult=document.createElement('p');
let playerTracker = 0;
let computerTracker=0;
let drawTracker = 0;
let resultClass = document.querySelector('.resultClass');

Rbtn.addEventListener ('click',function(e){

let result = playRound("rock");
ScoreDisplay(result);
game(computerTracker,playerTracker);

});


Pbtn.addEventListener('click',function(e){
let result = playRound("paper");
ScoreDisplay(result);
game(computerTracker,playerTracker);
});

Sbtn.addEventListener('click', function(e){
let result = playRound("scissors");
ScoreDisplay(result);
game(computerTracker,playerTracker);
});


function getComputerChoice(){  
    const RSP_array = ["rock","paper","scissors"]; 
    const randomIndex = Math.floor(Math.random()*RSP_array.length);
    const CompChoice = RSP_array[randomIndex]; // will pick random item in array either R/S/P
    return CompChoice;

}

function ScoreDisplay(result){ // This function will handle the output that the users see
  
  if (result == 'draw') {
    resultClass.textContent = "DRAW"; 
  }else  if (result =='Pwin' ){
    resultClass.textContent = 'YOU WON THIS ROUND!';
  }else{
    resultClass.textContent = "ROUND LOST!";
  }
  pResult.textContent = 'Your score: ' + playerTracker ;
  cResult.textContent = 'Machine score: ' + computerTracker
  resultClass.appendChild(pResult); 
  resultClass.appendChild(cResult);
}


function playRound(playerSelection , computerSelection = getComputerChoice()){
    console.log(playerSelection);
    let localPlayerSelection = playerSelection.toLowerCase(); // this is to make game case-insensitive
    
    if(localPlayerSelection == computerSelection){ 
      drawTracker++;
      return "draw";

      }else if(
        (localPlayerSelection === "rock" && computerSelection === "scissors") || // All Cases where Player beats computer
        (localPlayerSelection === "scissors" && computerSelection === "paper") ||
        (localPlayerSelection === "paper" && computerSelection === "rock")
      ){
        playerTracker++;
        return "Pwin";
    }else { // in any other case computer will win except if unknown string is entered. 
      computerTracker++;  
      return "Cwin";
    }
    
    
}



function game(localComputerTracker, localPlayerTracker){ // this function will declare a winner when either the computer or the player reaches 5 points.
  if(localPlayerTracker == 5){
    resultClass.textContent = 'WINNER!! YOU BEAT THE MACHINE!'
    pResult.textContent = 'The score is : ' + playerTracker + ' - '  + computerTracker;
    computerTracker = 0;
    playerTracker = 0;
    resultClass.appendChild(pResult); 
    return true;
  }else if(localComputerTracker == 5){
    resultClass.textContent = 'GAME OVER, YOU LOSE'
    pResult.textContent = 'The score is : ' + playerTracker + ' - '  + computerTracker;
    computerTracker = 0;
    playerTracker = 0;
    resultClass.appendChild(pResult); 
    return true;
  }
}







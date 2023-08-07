const Rbtn = document.querySelector('#R');
const Pbtn = document.querySelector('#P');
const Sbtn = document.querySelector('#S');
let pResult = document.createElement('p');
let playerTracker = 0;
let computerTracker=0;
let drawTracker = 0;
let resultClass = document.querySelector('.resultClass');

Rbtn.addEventListener ('click',function(e){
let result = playRound("rock");
ScoreDisplay(result);

});


Pbtn.addEventListener('click',function(e){
let result = playRound("paper");
ScoreDisplay(result);
});

Sbtn.addEventListener('click', function(e){
let result = playRound("scissors");
ScoreDisplay(result);
});


function getComputerChoice(){  
    const RSP_array = ["rock","paper","scissors"]; //  
    // get random index value:
    const randomIndex = Math.floor(Math.random()*RSP_array.length);//here we get a random index number
    const CompChoice = RSP_array[randomIndex]; // will pick random item in array either R/S/P
    return CompChoice;

}

function ScoreDisplay(result){ // This function will handle the output that the users see
  
  if (result == 'draw') {
    resultClass.textContent = "DRAW, You Both played rock!"; 
  }else  if (result =='Pwin' ){
    resultClass.textContent = 'This Round was yours';
  }else{
    resultClass.textContent = "Computer won this round, but it's not over yet";
  }
  pResult.textContent = 'The score is : ' + playerTracker + ' - '  + computerTracker;
  resultClass.appendChild(pResult); 
  
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



function game(){// this is a function without arrays.
  
  let message; //returned value of function stating who won/lost 
  let playerTracker = 0;
  let computerTracker=0;
  for(let i = 0; i < 6; i++){
    let round = playRound();

    if(round == "Computer Wins"){
      computerTracker++;

    }else if(round == "Player Wins"){
      playerTracker++;
      
    }
  } 

    let StringPlayerTracker = playerTracker.toString();
    let StringComputerTracker = computerTracker.toString();
    if(playerTracker > computerTracker){
      message = "you won the score was " + StringPlayerTracker + ":" + StringComputerTracker;
    }else if(playerTracker< computerTracker){
      message = "you lost the score was " + StringPlayerTracker + ":" + StringComputerTracker;
    }else{
      message = "draw" + StringPlayerTracker + ":" + StringComputerTracker;
    }
    return message;

}
//console.log(game());






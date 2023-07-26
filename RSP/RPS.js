/*1. Create a function that randomly gets a choice from the computer ( getComputerChoice())
  
 */



// 2. create a function that takes two parameters and plays one round of rock paper scissors.
// - first as input from computer
// - second as input from player
// - this function must declare a winner from that round, i.e. return a string declaring winner


/*3.
create a game() function.
- play 5 rounds in a game.
-keep a score
-report a winner or loser in the end
*/


function getComputerChoice(){
    const RSP_array = ["rock","paper","scissors"]; // RSP- short for rock, paper and scissors array 
    // get random index value:
    const randomIndex = Math.floor(Math.random()*RSP_array.length);//here we get a random index number
    const CompChoice = RSP_array[randomIndex]; // will pick random item in array either R/S/P
    return CompChoice;
}





function playRound(playerSelection = prompt("Rock, paper or scissors?"), computerSelection = getComputerChoice()){
    
    let localPlayerSelection = playerSelection.toLowerCase(); // this is to make game case-insensitive
    
    if(localPlayerSelection == computerSelection){ // case for draw
        return "draw";
      }else if(
        (localPlayerSelection === "rock" && computerSelection === "scissors") || // All Cases where Player beats computer
        (localPlayerSelection === "scissors" && computerSelection === "paper") ||
        (localPlayerSelection === "paper" && computerSelection === "rock")
      ){
        return "Player Wins";
    }else { // in any other case computer will win except if unknown string is entered. we'll deal with this later on.
        return "Computer Wins"
    }
    
}

/*function FirstToFive(){ // This is my own function, it is different to the assignment in that it plays at most 100 games but if someone reaches 5 points then the game is over.

  let playerTracker = 0;
  let computerTracker =0;
  let TrackerArray = [0,0];
  for(count = 0; count < 100; count++){
    console.log("count is: ", count);
    let result = playRound();
    if((TrackerArray[0]== 5)|| (TrackerArray[1]== 5)){
      break;
      
      }else if(result == "Player Wins" ){
        TrackerArray[0] = TrackerArray[0] +1;
      }else{
        TrackerArray[1] = TrackerArray[1] +1;
      }
      console.log(TrackerArray);
  }
  console.log("the tracker array is: " ,TrackerArray);
  return TrackerArray;
}

console.log(FirstToFive());
*/ 

function game(){// this is a function without arrays.
  
  let message; //returned value of function stating who won/lost 
  let playerTracker = 0;
  let computerTracker=0;
  for(let i = 0; i < 5; i++){
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
      message = "draw"
    }
    return message;

}
console.log(game());



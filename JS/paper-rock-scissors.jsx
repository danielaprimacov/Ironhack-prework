let rock = "rock";
let paper = "paper";
let scissors = "scissors";

// these two variables will be changed to test the conditional
let firstPlayerChoice = paper;
let secondPlayerChoice = paper;

let firstPossibility;
let secondPossibility;
let thirdPossibility;

let fourthPossibility;
let fifthPossibility;
let sixthPossibility;

let seventhPossibility;

// evaluating firstPlayerChoice and secondPlayerChoice
// first possible scenario
firstPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock; 
// second possible scenario
secondPossibility = firstPlayerChoice === paper && secondPlayerChoice === scissors; 
// third possible scenario
thirdsPossibility = firstPlayerChoice === rock && secondPlayerChoice === paper; 
// fourth possible scenario
fourthPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors; 
// fifth possible scenario
fifthPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
// sixth possible scenario
sixthPossibility = firstPlayerChoice === scissors && secondPlayerChoice === rock; 

// seventh possible scenario - where both choices are the same, resulting in a tie
seventhPossibility = firstPlayerChoice === secondPlayerChoice;

// checking if either one of the first three possibilities occured, giving the win to the first player
if (firstPossibility || fourthPossibility || fifthPossibility) {
    console.log("First player won!")
    } else if(secondPossibility || thirdPossibility || sixthPossibility) { // or the second player
      console.log("Second player won!");
    } else if(seventhPossibility) {
      console.log("Tie!");
    } else {
      console.log("Something went wrong!");
    }

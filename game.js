const prompt = require("prompt-sync")();

let gamNum = 25;
let userNum = prompt("Guess the game number : ");
while(userNum != gamNum){
    userNum  = prompt("wrong guess, Guess again: ");

}
console.log("congrulations, you guess th right number");
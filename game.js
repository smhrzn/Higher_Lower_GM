const input = require("readline-sync");

//taking 1sts players information
let name=input.question("Enter first player name: ");
let num1= Number(input.question("Enter your number: "));

//taking second player information
let name2=input.question("Enter first player name: ");
let num2= Number(input.question("Enter your number: "));


while(true){
//guessing logic
    let guess= Number(input.question("Player one guess the number "));

    if(guess==num2)
    {
        console.log("player one is winner ")
        break;
    }
    else if(guess>num2)
    {
        console.log("hint:Guessed num Higher")
    }
    else{
        console.log("hint:lower")
    }

    //player 2 guess
    guess= Number(input.question("Player two guess the number "));

    if(guess==num1)
    {
        console.log("player two is winner ")
        break;
    }
    else if(guess>num1)
    {
        console.log("hint:Guessed num Higher")
    }
    else{
        console.log("hint:GUessed num lower")
    }
}
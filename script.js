//Welcome

console.log("Welcome to the Number Guessing Game!")
console.log("I'm thinking of a number between 1 and 100.")
console.log("You have 5 chances to guess the correct number.")

//Computer Number

function generateNum(){
    const MIN = 1;
    const MAX = 100;
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
};
let computerNum = generateNum();

//Select Difficulty

console.log("Please select the Difficulty Level: ")
console.log("1. Easy (10 Chances)")
console.log("2. Medium (5 Chances)")
console.log("3. Hard (3 Chances)")

function selDif() {

}

//Game Logic

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = () => {
    rl.question("Enter your Choice: ", (answer) => {
        let modifiedAnswer;
        if(answer === "1"){
            modifiedAnswer = "Great you have selected the Easy difficulty level! Let's Start the Game!";
            const maxInput = 10;

        } else if (answer === "2"){
            modifiedAnswer = "Great you have selected the Medium difficulty level! Let's Start the Game!";
            const maxInput = 5;
           
        } else if (answer === "3"){
            modifiedAnswer = "Great you have selected the Hard difficulty level! Let's Start the Game!";
            const maxInput = 3;
            
        } else {
            modifiedAnswer = `${answer} is not a valid answer, please select from 1, 2 or 3.`;
            askQuestion();
        };
         console.log(modifiedAnswer);
         enterGuess();
    });
    };
    askQuestion();
    
    let guessCount = 0;

    const enterGuess = () => {
        rl.question('Enter your Guess: ', (guess) => {
            const userGuess = Number(guess);
            
            if (userGuess === computerNum){
                console.log(`Congratulations! You guessed the correct number in ${guessCount} attempts.!`);
                rl.close();
            } else if (userGuess > computerNum){
                console.log(`Incorrect! The number is less than ${userGuess}`);
                enterGuess();
                guessCount++;
            } else {
                console.log(`Incorrect! The number is higher than ${userGuess}`);
                enterGuess();
                guessCount++;
            }
        }) 
    };

//GameLoop doesnt work.

let playRound = () => {
    if (guessCount < maxInput){
        enterGuess();
    } else {
        console.log("You have reached the maximum number of Guess on the selected Difficulty. You Lose!")
        rl.question("Press 1 if you would like to play again!", (playAgain) => {
            if (playAgain === "1"){
                askQuestion();
            } else{
                rl.close();
            }
        })
    }
};


    


   












































































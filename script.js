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


//Select Difficulty

console.log("Please select the Difficulty Level:")
console.log("1. Easy (10 Chances)")
console.log("2. Medium (5 Chances)")
console.log("3. Hard (3 Chances)")

function selDif() {

}

//Get User Input

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const askQuestion = () => {
    rl.question("Enter your Choice:", (answer) => {
        let modifiedAnswer;
        if(answer === "1"){
            modifiedAnswer = "Great you have selected the Easy difficulty level!";
            rl.close();
        } else if (answer === "2"){
            modifiedAnswer = "Great you have selected the Medium difficulty level!";
            rl.close();
        } else if (answer === "3"){
            modifiedAnswer = "Great you have selected the Hard difficulty level!";
            rl.close();
        } else {
            modifiedAnswer = `${answer} is not a valid answer, please select from 1, 2 or 3.`;
            askQuestion();
        };
         console.log(modifiedAnswer);

    });
    };
    askQuestion();
    





































































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

rl.question("Enter your Choice:", (answer) => {
    console.log(`Great you have selected the ${answer} difficulty level.`)

    rl.close();
});








































// const easyButton = document.getElementById("easy");
// const mediumButton = document.getElementById("medium");
// const hardButton = document.getElementById("hard");

// let difficulty = 0;

// function setDifficulty(difficultyValue){
//     difficultyChoice = difficultyValue;
//     evaulateDifficulty();
// };

// function evaulateDifficulty(){
//     if (difficultyChoice === 1){
//         console.log("You Selected Easy! You Have 10 Chances.")
//     } else if (difficultyChoice === 2){
//         console.log("You Selected Medium! You Have 5 Chances.")
//     } else if (difficultyChoice === 3){
//         console.log("You Selected Hard! You Have 3 Chances.")
//     } else {
//         "Error"
//     }
// } ;

window.onload = function(){
    alert("Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number")
    console.log("Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number")
}

//Computer Number
let computerNum = Math.floor(Math.random() * 100) + 1
console.log(computerNum);

//Select Difficulty

const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");

let difficulty = 0;

function setDifficulty(difficultyValue){
    difficultyChoice = difficultyValue;
    evaulateDifficulty();
};

function evaulateDifficulty(){
    if (difficultyChoice === 1){
        console.log("You Selected Easy! You Have 10 Chances.")
    } else if (difficultyChoice === 2){
        console.log("You Selected Medium! You Have 5 Chances.")
    } else if (difficultyChoice === 3){
        console.log("You Selected Hard! You Have 3 Chances.")
    } else {
        "Error"
    }
} ;

const readlineSync = require("readline-sync");
let score = 0;
let currentHighScore = 4;
let highScore = [
  {
  name: "Sankalp",
  score: 4,
  },
  {
    name : "Sabeel",
    score: 3,
  },
]

let questions = [{
  question: " <Q1> Where do I live? ",
  answer: "Rourkela"  
},
{
  question: " <Q2> Where do I study",
  answer: "Chandigarh University"
},
{
  question: " <Q3> Who is my favorite super Hero? ",
  answer: "Iron Man"
},
{
  question: "<Q4> What is my favorite color?",
  answer: "Blue"
}];

function welcome(){
  let userName = readlineSync.question("What is your name?  ");
  console.log("Hey "+ userName + ". ---Welcome to DO YOU KNOW SANKALP! ---  ");
}




function playGame (question, answer){
  let userAns = readlineSync.question(question);

  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log('You are right!');
    score++;  
  } 
  else{
    console.log('Sorry! You are  Wrong!');
  }

  console.log('Current Score: ', score);
  console.log("***************************************");

}

function game(){
  for(let i = 0; i < questions.length; i++){
    let currentQues = questions[i];
    playGame(currentQues.question, currentQues.answer);
  }
}

function displayScore(){
  console.log("Your score is : ", score);
  if(score >= currentHighScore){
    console.log("Congratulations! You are the top Scorer!")
    console.log("Plz send me screenshot so that I can update top score list! Thank you!");
  }
  console.log("-------------");
  console.log("TOP SCORERS: ");
  console.log("-------------");
  highScore.map(score => console.log(score.name, " : ", score.score));

  }




welcome();
game();
displayScore();
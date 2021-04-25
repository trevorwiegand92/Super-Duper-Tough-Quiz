//Define variables.//
let startBtn = document.getElementById('start-button');
let saveScore = document.getElementById("save-score");
let questionAreaEl = document.getElementById("current-question");
let questionText = document.getElementById("text-of-question");
let firstChoice = document.getElementById("first-choice");
let secondChoice = document.getElementById("second-choice");
let thirdChoice = document.getElementById("third-choice");
let fourthChoice = document.getElementById("fourth-choice");
let choicesDiv = document.getElementById("choices")
let questionTitle = document.getElementById("question-title");
let timeRemainingEl = document.querySelector("#time-remaining");
let timerEl = 20 * questions.length;





//Functions.//////////
//start quiz - init.//
function startQuiz() {
    //hide quiz info and start button//
    document.querySelector("#quiz-starting-info").style = "display: none";

    //start timer(doesn't need to be a function).//
    //document.querySelector("#time-remaining").textContent = "Time: " + timerEl;//
    //find dom element to show the question.//
    document.querySelector("#current-question").style = "display: block";

    // Start timer//
    countdownEl = setInterval(function(){
        timerEl == 0;
        timerRemainingEl.textContent = "Time: " + timerEl;
        if (timeEl <= 0) {
            clearInterval(countdownEl);
            endGame();
    }
});

    //Show current/next question.//
    getQuestion(); 
    //find an area on html and show the first question.//
    //startTimer();
}

//get the next question.//
function getQuestion() {
    //get the current question
    let currentQuestion = Question(0);
    //to change let currentQuestion = questions[questionIndex]
    //Show the question
    questionTitle.textContent = currentQuestion.title;
    //loop show the choices(buttons).//
    currentQuestion.choices.forEach(choice => {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.setAttribute("value", choice);
        choiceButton.onclick = answerCheck;
        choicesDiv.appendChild(choiceButton);

}); 
    //.add event listener for each button created.//
    answerCheck();

}

//check user selection.//
function answerCheck() {
    alert(this.value);
    //check user selection against correct answer.//
    //incorrect remove seconds.//
    //set score.//
    //get next question.//
    getQuestion();
    //if questions.length.//
    endGame();
}

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
          //this tests if the win condition has been met.//
        if (isWin && timerCount > 0) {
          clearInterval(timer);
          winGame();
        }
      }
      //tests if the timer has run out.//
      if (timerCount === 0) {
          //clears interval.//
          clearInterval(timer);
          loseGame();
      }
    }, 1500);
  }


function renderFinalPage() {
    let initials = window.prompt("Enter your initials to record your high score!");


    let highScores = [];

    let highScoreObject = {
        name: initials,
        score: timerCount
    }
}

//end game.//
function endGame() {
    //set their score.//
    //show end screen.//
    //clear out timer.//
}


function saveHighScore() {
    //prompt for initials.//
    window.prompt("Write your initials to record your high score");
    //save score to local storage.//
}










//Event Listeners.//


//start button click.//
startBtn.addEventListener('click', startQuiz);

//

//save high score.//
saveScore.addEventListener("click", saveHighScore);











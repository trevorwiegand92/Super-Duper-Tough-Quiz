//global variables//
let startBtn = document.getElementById('start-button');
let quizInfo = document.getElementById('quiz-starting-info');
let questionAreaEl = document.getElementById('current-question');
let questionText = document.getElementById("text-of-question");

//answer buttons for the user to click//
let firstChoice = document.getElementById('answer-button-0');
let secondChoice = document.getElementById('answer-button-1');
let thirdChoice = document.getElementById('answer-button-2');
let fourthChoice = document.getElementById('answer-button-3');


let form = document.getElementById('form');
let initialInput = document.getElementById('initials');
let saveScore = document.getElementById('save-score');

let body = document.body;

let questionsIndex = 0;
let countdown = 100;

let scoresArray = JSON.parse(localStorage.getItem('scoresArray')) || [];

  

// Initial page that gives quiz info, start button and link to the high scores page.//
function init() {
    quizInfo.style.display = 'block';
	questionAreaEl.style.display = 'none';
    questionText.style.display = 'none';
	form.style.display = 'none';
}

// Begins the quiz by loading the first question and possible answers and starting the timer//
function startQuiz() {
	quizInfo.style.display = 'none';
	questionAreaEl.style.display = 'block';
    questionText.style.display = 'block';
	getQuestion();
	startTimer();
	if (startBtn.style.display === 'none') {
		startBtn.style.display = 'block';
	} else {
		startBtn.style.display = 'none';
	}
}

// this is the function that controls the timer//
function startTimer() {
	let interval = setInterval(function () {
		countdown--;
		document.getElementById('timer').textContent = countdown;
		if (countdown <= 0) {
			clearInterval(interval);
			endGame();
		}
	}, 1000);
}



// This function loops through the questions and answers//
function getQuestion() {
	let getQuestion = questions[questionsIndex];
	document.getElementById('current-question').innerHTML = getQuestion.title;

	let options = getQuestion.options;
	for (let i = 0; i < options.length; i++) {
		document.querySelector(`#answer-button-${i}`).innerHTML = options[i];
		document.querySelector(`#answer-button-${i}`).setAttribute('value', options[i]);
	}
}

// this function checks if the user selected the correct answer and subtracts 10 points for each incorrect guess.//
function checkAnswer() {
	if (this.value === questions[questionsIndex].theAnswer) {
		questionsIndex++;
		if (questionsIndex < questions.length) {
			getQuestion();
		}
	} else {
        countdown -=10;
	}
}


// function that ends the game, removes the current question and answers//
function endGame() {
	questionAreaEl.style.display = 'none';
    questionText.style.display = 'none';
	form.style.display = 'block';
	document.getElementById('finalScore').innerHTML = countdown;
}

// saves the high score to localStorage
function saveHighScore(event) {
	event.preventDefault();
	let initialInput = document.getElementById('initials').value;
	let highScores = {
		name: initialInput,
		score: countdown,
	};

	scoresArray.push(highScores);
	localStorage.setItem('scoresArray', JSON.stringify(scoresArray));
	linkToHighScores();
}


// links to another HTML page with the high scores displayed
function linkToHighScores() {
	window.location.href = './highscores.html';
}

// event listeners
firstChoice.addEventListener('click', checkAnswer);
secondChoice.addEventListener('click', checkAnswer);
thirdChoice.addEventListener('click', checkAnswer);
fourthChoice.addEventListener('click', checkAnswer);
startBtn.addEventListener('click', startQuiz);
saveScore.addEventListener('click', saveHighScore);

init();
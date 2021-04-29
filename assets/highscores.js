//  variables from my other script file//
let highScores = document.getElementById('high-scores');
let scoresArray = JSON.parse(localStorage.getItem('scoresArray')) || [];

// displays the top ten scores in order from best to worst//
function displayScores() {
	scoresArray.sort((a, b) => b.score - a.score);
	scoresArray.splice(10);

	highScores.innerHTML = scoresArray
		.map((score) => {
			return `<li><p>${score.name}<span></span></p><p>${score.score}<span></span></p></li>`;
		})
		.join('');
}

displayScores();
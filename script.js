// Creating the array of questions
var questions = [
	{
		question: "What is the answer?",
		options: [
			"This",
			"That",
			"The other",
			"Yet another"
			],
		correctAnswer: 0
	},
	{
	question: "What is the second answer?",
	options: [
		"One",
		"Two",
		"Three"
		],
	correctAnswer: 2
	},
	{
	question: "What is the third answer?",
	options: [
		"asdf",
		"asdfasfd",
		"assdddd"
		],
	correctAnswer: 2
	},
	{
	question: "What is the fourth answer?",
	options: [
		"asdf",
		"asdfasfd",
		"assdddd"
		],
	correctAnswer: 2
	},
	{
	question: "What is the fifth answer?",
	options: [
		"asdf",
		"asdfasfd",
		"assdddd"
		],
	correctAnswer: 2
	},
	{
	question: "What is the sixth answer?",
	options: [
		"asdf",
		"asdfasfd",
		"assdddd"
		],
	correctAnswer: 2
	}
]

var score = 0;
var questionNumber = 1;
var button = document.getElementById('quizButton');
var form = document.getElementById('theForm');
var questionText = document.getElementById('questionText');
var feedbackSpot = document.getElementById('feedbackSpot');
var answerArray = document.getElementsByTagName('input');

// Setting up some variables which will be useful when looping through the questions and checking for the right answer


// The function to build questions
function buildQuestion(questionNumber) {
	var html = '';
	var currentQuestion = questions[questionNumber-1];
	for ( var option in currentQuestion.options ) {
		var opt = currentQuestion.options[option];
		html += '<input type="radio" name="answers" value="' + opt + '">' + opt + '<br/>'
	}
	form.innerHTML = html;
	questionText.innerHTML = currentQuestion.question;
}

// Check if the answer supplied is correct
function checkCorrectAnswer() {
	var currentQuestion = questions[questionNumber-1];
	if ( answerArray[currentQuestion.correctAnswer].checked ) {
		score += 1;
		setAlert("alert alert-success","Congratulations, that's the right answer! Here's the next question.");
	} else {
		setAlert("alert alert-danger", "Sorry, that's the wrong answer. Let's hope you have better luck next time. Here's the next question.");
	}
}

// Check if one of the radio buttons has been submitted
function answered() {
	var answered = false;
	for ( var i=0; i<answerArray.length; i++ ) {
		if ( answerArray[i].checked ) {
			answered = true;
		}
	}
	return answered;
}

function setAlert(className,text){
	feedbackSpot.className = className;
	feedbackSpot.innerHTML = text;
}

// Adding event listener for the button
button.addEventListener('click', function(e) {
	e.preventDefault();
	if ( answered() && (questionNumber<questions.length) ) {
			checkCorrectAnswer();
			questionNumber += 1;
			buildQuestion(questionNumber);
	} else if ( answered() ) {
		checkCorrectAnswer();
		form.innerHTML = '';
		questionText.innerHTML = '';
		button.parentNode.removeChild(button);
		setAlert("alert alert-info","You finished the game. You answered a total of " + score + " correct questions out of " + questions.length);
	} else {
		setAlert("alert alert-warning","You must select one of the answers to continue");
	}
});

buildQuestion(1);
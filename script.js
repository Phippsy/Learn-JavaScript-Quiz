/*
quiz application
Radio button choices
Shows user score on completion
Add and remove questions dynamically when user clicks the next button


Get question text, append to label element or h1 element in page
Get question options, append to radio buttons in page. Each radioButton should have ID of array index.

When user presses submit button
	Compare Radiobutton index with correctAnswer index
		If they match, add 1 to user score and display a 'correct' message, to be shown underneath the submit button.
		If they don't match, add nothing to user score and display a 'bad luck' message underneath the submit button.
	After comparing, build the new webpage based on the next set of questions and repeat the steps above.
	Once all questions in the questions array have been completed, display the final score with a 'well done' message and give the user a chance to take the test again. Change the submit button to display 'Start test again' and prompt the user with 'Are you sure you want to start again' before resetting the questions.


Create the user score counter
*/


var score = 0;

var questions = [
	{
		question: "What is the answer?",
		options: [
			"This",
			"That",
			"The other"
			],
		correctAnswer: 0
	}
]

// Setting up some variables which will be useful when looping through the questions and checking for the right answer
var currentQuestion = questions[0];
var currentRightAnswer = currentQuestion.options[currentQuestion.correctAnswer];

console.log("This" === currentRightAnswer);
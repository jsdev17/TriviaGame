//variable declarations

//this is the global array that holds all questions, corrects answers, and choices
var questions = [
	//Question 1, index 0
	{
		question: "What is 2+2",
		answer: 4,
		choices: [
			4, 5, 9, 18
		]

	},
	//Question 2, index 1
	{
		question: "What is the capital of the United States?",
		answer: "Washington D.C.",
		choices: [
			"New York City", "Seattle", "Washington D.C.", "Charlotte"
		]
	},
	//Question 3, index 2
	{
		question: "Canada is made up of how many provinces?",
		answer: 10,
		choices: [
			12,15,10,19
		]
	},
	//Question 4, index 3
	{
		question: "In what year did Fidel Castro die?",
		answer: 2016,
		choices: [
			2015, 2005, 2006, 2016
		]
	},
	//Question 5, index 4
	{
		question: "In Computer Science, what does 'GUI' stand for?",
		answer: "Graphical User Interface",
		choices: [
			"Google Under Intentions", "Gross Underpresentation of Idioms", "Graphical User Interface",
			"Getting Updated Information"
		]
	},
	//Question 6, index 5
	{
		question: "The US Military installation Area 51 is located in which state?",
		answer: "Nevada",
		choices: [
			"Arizona", "Nevada", "New Mexico", "California"
		]
	},
	//Question 7, index 6
	{
		question: "The Yangtze River is entirely located in which country?",
		answer: "The People's Republic of China",
		choices: [
			"The People's Republic of China", "Mongolia", "South Korea", "Taiwan"
		]
	},
	//Question 8, index 7
	{
		question: "Guiness Beer was first brewed in which country?",
		answer: "Ireland",
		choices: [
			"Scotland", "England", "Germany", "Ireland"
		]
	},
	//Question 9, index 8
	{
		question: "What is the most abundant element in the Earth's atmosphere?",
		answer: "Nitrogen",
		choices: [ 
			"Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"
		]
	},
	//Question 10, index 9
	{
		question: "Who is the author of the novella 'The Metamorphosis', first published in 1915?",
		answer: "Franz Kafka",
		choices: [
			"Hermann Hesse", "Gregor Samsa", "Franz Kafka", "Fyodor Dostoyevsky"
		]
	}
];

//global variables

//this is the time from which the timer starts counting backwards. currently set to 5 for testing
//purposes
var counter = 30;


var correctTally = 0;
var incorrectTally = 0;
var unanswenredTally = 0;

//this variable determines which question we're in, and displays it with its respective possible answers
var questionCounter = 0;


//functions

// When the start button is clicked, the HTML content of the welcome screen will change 
function generateHTML(array){

	$('#timer').css('display', '');

	var htmlString = "";

	//displays current question within a <p> tag
	htmlString += "<p>" + array[questionCounter].question + "</p>";

	htmlString += "<ul>"

	//iterates through choices in current index and displays them as an unordered list with a
	//class="answer"
	for (var ii = 0; ii < array[ii].choices.length; ii++) {

		htmlString += "<li class='answer'>" + array[questionCounter].choices[ii] + "</li>";

	};

	//closes the <ul> tag
	htmlString += "</ul>";

	//displays the content of the htmlString variable to the div with #content id.
	//at this point, this variable should hold the question with its respective choices
	$('#content').html(htmlString);


};



//starts the timer when called
function timer(){
	//runs the thirtySeconds function every 1 second
	clock = setInterval(thirtySeconds, 1000);
	//basically stops the time whenever it hits zero. otherwise, it keeps decreasing
	function thirtySeconds(){
		if(counter === 0){
			clearInterval(clock);
			generateLossDueToTimeout();
		}
		else if(counter > 0){
			counter--;
		}
		$('#timer').html("Time remaining: " + counter + " seconds");
	}
}

function generateWin(){
	correctTally++;
	
	notification = "<p> Correct! The answer is " + questions[questionCounter].answer + "</p>";
	$('#content').html(notification);
	setTimeout(transition, 3000);

}

function generateLose(){
	incorrectTally++;

	notification = "<p> Wrong! The correct answer is " + questions[questionCounter].answer + "</p>";
	$('#content').html(notification);
	setTimeout(transition, 3000);
}

function generateLossDueToTimeout(){
	unanswenredTally++;

	notification = "<p> You ran out of time! The correct answer is " + questions[questionCounter].answer + "</p>";
	$('#content').html(notification);
	setTimeout(transition, 3000);
}


function transition() {
	// if the questionCounter hits 9, the game ends.
	if (questionCounter < 9) {

		questionCounter++;
		generateHTML(questions);
		counter = 30;
		timer();
	}
	else {
		finalScreen();
	}
}

function finalScreen(){
	$('#timer').css('display', 'none');

	finalText = "<p> The game's finished! Here are the results </p>" + "<br />" +
				"<p> Correct answers: " + correctTally + "</p>" +
				"<p> Incorrect answers: " + incorrectTally + "</p>" +
				"<p> Unanswered questions: " + unanswenredTally + "</p>" + "<br />" +
				"<button id='reset-button'><span>Start Over</span></button>"

	$('#content').html(finalText);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML(questions);
	timer();
}

//jQuery code
$(document).ready(function(){

	
	$('#start-button').on("click", function(){
		//hides the the title on start button is clicked
		$('#game-title').css('display', 'none');
		//hides the start button once it's clicked
		$(this).css("display", "none");
		//starts the timer
		timer();
		//displays HTML
		generateHTML(questions);

	});

	// $('.answer').on("click", function(){
	// 	//stores user choice
	// 	var selectedAnswer = $('.answer').text();
	// 	console.log(selectedAnswer);

	// })

	$(document).on("click", '.answer', function(){
		// console.log($(this));
		//stores user choice
		var selectedAnswer = $(this).text();
		console.log(selectedAnswer);
		console.log(questions[questionCounter].answer);

		//using ==== didn't work here... using == did. why? because selected answer
		//is a string. the value in questions[questionCounter].answer is an integer...
		if(selectedAnswer == questions[questionCounter].answer){
			clearInterval(clock);
			generateWin();
			console.log("correct");
		}
		else{
			clearInterval(clock);
			generateLose();
			console.log("incorrect");
		}

	})


	$(document).on("click", "#reset-button", function(){

		resetGame();
			
	})

})//end of document.ready function


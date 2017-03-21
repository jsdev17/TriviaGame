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
var counter = 5;


var correctTally = 0;
var incorrectTally = 0;
var unanswenredTally = 0;

//this variable determines which question we're in, and displays it with its respective possible answers
var questionCounter = 0;


//functions

// When the start button is clicked, the HTML content of the welcome screen will change 
function generateHTML(array){

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


})

};

//starts the timer when called
function timer(){
	//runs the thirtySeconds function every 1 second
	clock = setInterval(thirtySeconds, 1000);
	//basically stops the time whenever it hits zero. otherwise, it keeps decreasing
	function thirtySeconds(){
		if(counter === 0){
			clearInterval(clock);
			// generate a loss due to timeout
		}
		else if(counter > 0){
			counter--;
		}
		$('#timer').html("Time remaining: " + counter + " seconds");
	}
}

function checkForWin(){
	//nothing here yet
}

function checkForLose(){
	//nothing here yet
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

	$('.answer').on("click", function(){
		//stores user choice
		var selectedAnswer = $('.answer').text();
		console.log(selectedAnswer);

	})

})

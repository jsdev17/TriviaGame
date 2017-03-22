//Pseudo-code

// The game will begin with a welcome screen, stating the name of the game atop the center box,
// which will also have a "START" button.

// When the start button is clicked, the HTML content of the welcome screen will change to the 


function generateHTML(array){
	var htmlString = "";

	for (var i = 0; i < array.length; i++) {
		htmlString += "<p>" + array[i].question + "</p>";

		htmlString += "<ul>"

		for (var ii = 0; ii < array.length; ii++) {
			 htmlString += "<li>" + array[ii] + "</li>";
		};

		htmlString += "</ul>";
	};
};

// Javascript code

var counter;


var correctTally = 0;
var incorrectTally = 0;
var unanswenredTally = 0;

//this variable determines which question we're in, and displays it with its respective possible answers
var questionCounter = 0;


//objects

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

//objects

var timer = {


	time: 30,


	start: function(){

		counter = setInterval(timer.count, 1000);

	},

	count: function() {

	    // increment time by 1
	    timer.time--;

	    // Get the current time, pass that into the timer.timeConverter function,
	    //        and save the result in a variable.
	    var convertedTime = timer.timeConverter(timer.time);
	    //  TODO: Use the variable you just created to show the converted time in the "display" div.
	    $('#timer').html(convertedTime);
	},


	timeConverter: function(t) {

	    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);

	    if (seconds < 10) {
	    	seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	    	minutes = "00";
	    }

	    else if (minutes < 10) {
	    	minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
	}

}//end of timer object


}

$('#timer').html("00:30");
// timer.start();


//jQuery code
// $(document).ready(function{

	$('#start-button').on("click", function(){
		// $('#block').html('');
		console.log("start button has been clicked");
		// timer.start();
		$('#block').append("game has started. this is question one");
		$(this).css("display","none");
		generateHTML(questions);
		//note 1*
	})



console.log(questions);

// })







// ------ NOTES -----
// note 1* //a very interesting note worthy comment... the button is inside the html main tag. 
		//i tried giving the <main> tag an id of "#main". then, with jQuery, I made it so that
		//whenever the "Start" button were pressed, that the content's of the main tag be replaced
		//with some other content (the question, the backwards counting timer, and the possible answers).
		//this gave me a problem, as the inherent name of the <main> tag conflicted with the name of the 
		//attribute given to it. Nothing would happen whenever the button was clicked. The trickiest thing
		//about it was that the console did not register a single error message. it was blank once the page
		//became refreshed, implying everything was working well. when I changed the name of the id to "#block",
		//the problem was solved.
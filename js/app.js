
$(document).ready(function(){
	
	$('.new').on('click', function(){
			newGame();
	});

	$('#guessButton').on('click', function(){
			guess();
		
			return false;
	});
	
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

var randomNum;
var guessCount = 0;
var guessDistance = [];
var distance;
var distanceTwo;
var negativeDistance;
var negativeDistanceTwo;

var newGame = function(){
	randomNum = Math.floor(Math.random()*101);	
	guessCount = 0;
	$("#guessList").empty();
	guessDistance = [];
	console.log(randomNum);
	$('#feedback').replaceWith("<h2 id='feedback'>Make your Guess!</h2>");
};



var guess = function(){
	var userInput = $('#userGuess').val();
	$('#userGuess').val("");
	guessCount++;
	$('#guessList').append("<li>" +userInput+ "</li>");
	$('#userGuess').focus();
	hotOrCold(+userInput);
};

var firstRanges = function (guess) {

	if (randomNum + 5 > guess && randomNum - 5 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>Your really Hot!</h2>");
	} else if (randomNum + 10 > guess && randomNum - 10 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>Your pretty Hot!</h2>");
	} else if (randomNum + 20 > guess && randomNum - 20 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>Your cooling off!</h2>");
	} else if (randomNum + 30 > guess && randomNum - 30 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>Your getting pretty cold!</h2>");
	} else if (randomNum + 40 > guess && randomNum - 40 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>Your really cold!</h2>");
	} else if (randomNum + 50 > guess && randomNum - 50 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>Your probably going to freeze!</h2>");
	} else if (randomNum + 60 > guess && randomNum - 60 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>Not even close!</h2>");
	} else if (randomNum + 70 > guess && randomNum - 70 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>Is that your best guess!</h2>");
	} else if (randomNum + 80 > guess && randomNum - 80 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>That was an awful guess!</h2>");
	} else if (randomNum + 90 > guess && randomNum - 90 < guess) {
		$('#feedback').replaceWith("<h2 id='feedback'>Do you even know how to count!</h2>");
	}
};


var hotOrCold = function(guess){

	if (guess === randomNum) {
		$('#feedback').replaceWith('<h2 id="feedback">You guessed correctly!</h2>');
	} else {

		if(guessCount == 1) {
			firstRanges(guess);
			distanceTwo = Math.abs(randomNum - guess);
		} else {

			distance = distanceTwo;
			distanceTwo = Math.abs(randomNum - guess);
			if (distance > distanceTwo) {
				$('#feedback').replaceWith('<h2 id="feedback">Your getting closer!</h2>');
			} else {
				$('#feedback').replaceWith('<h2 id="feedback">Your moving away!</h2>');	
				}
		}
	}
	
 
};


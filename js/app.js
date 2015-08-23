
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
};



var guess = function(){
	var userInput = $('#userGuess').val();
	$('#userGuess').val("");
	guessCount++;
	console.log("this is first guess" + " " +userInput);
	console.log("this is guessCount" + " " +guessCount);
	$('#guessList').append("<li>" +userInput+ "</li>");
	$('#userGuess').focus();
	hotOrCold(+userInput);
};


var hotOrCold = function(guess){

	guessDistance.push(guess);
	distance = randomNum - guessDistance[0];
	distanceTwo = randomNum - guessDistance[1];

	

	if (distance < distanceTwo && guessCount > 1){
		console.log('Your going the wrong way!');
	}else if(distance > distanceTwo && guessCount > 1){
		console.log('this might work');
	} else if (guess === randomNum) {
		console.log("You guessed correctly!")
	} else if (randomNum + 5 > guess && randomNum - 5 < guess) {
		console.log('Your really Hot!');
	} else if (randomNum + 20 > guess && randomNum - 20 < guess) {
		console.log('Your cooling off!');
	} else if (randomNum + 30 > guess && randomNum - 30 < guess) {
		console.log('Your getting pretty cold!')
	} else if (randomNum + 40 > guess && randomNum - 40 < guess) {
		console.log('Your really cold!')
	} else if (randomNum + 50 > guess && randomNum - 50 < guess) {
		console.log('Your probably going to freeze!')
	} else if (randomNum + 60 > guess && randomNum - 60 < guess) {
		console.log('Not even close!')
	} else if (randomNum + 70 > guess && randomNum - 70 < guess) {
		console.log('Is that your best guess!')
	} else if (randomNum + 80 > guess && randomNum - 80 < guess) {
		console.log('That was an awful guess!')
	} else if (randomNum + 90 > guess && randomNum - 90 < guess) {
		console.log('Do you even know how to count!')
	}
 
};

/*
var secondGuess = function(guess){
	if (guessCount <= 1){
		var firstGuess = guess;
	}

	var firstDistance = randomNum - firstGuess;
	if (guessCount > 1) {
		var secondDistance = randomNum - guess;
	}

	if (secondDistance > firstDistance){
		conole.log("Your going the wrong way");
	}
		
};
*/
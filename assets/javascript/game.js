// 1. [Watch the demo](https://youtu.be/qTc45Lox97g).

// 2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

// 3. Guess what letter I'm thinking of

// 4. Wins: (# of times the user has guessed the letter correctly)

// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// Variables  ( wins , losses , guessLeft , userGuess , computerGuess)
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];
var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This uses the a number to grab the letter in the computerguess array to generate random choice . This displays the array in the console 
lettersGuessed = computerGuess[Math.floor(Math.random() * computerGuess.length)];
console.log(computerGuess);


//This function will tell you the guesses you have made so far 
var newuserGuess = function() {
    document.getElementById("guessesLeft").html  = "Guesses so far: " + userGuess.join(",");
}

var guessLeft = function() {
    document.getElementById("guessesLeft").html = "Guesses Left: " + guessesLeft;
}

var game = function() {
    userGuess = [];
    guessesLeft = 9;
    newuserGuess ();
    guessLeft ();

}


// Win if statement if wins(userGuess === computerGuess)
document.onkeyup = function (event) {

    var userGuess = event.key;

    if( userGuess === computerGuess) {
        wins++;
    } else {
        losses--;
    }
    if(guessesLeft === 0) {
        losses++;
    } else if ( guessesLeft === 0 ) {
        losses++;
        game();
    }
    // html sections  these are the call ID's for each section when guesses are made these id's will be used 
    // document.getElementById('wins') = "Wins: " + wins;
    // document.getElementById('losses') = "Losses: " + losses;
    // document.getElementById('guessesLeft') = "Guesses Left: " + guessesleft;
    // document.getElementById('userGuess') = "Guessed: " + guessed;
    // document.getElementById('computerGuess') = "Comp Guess: " + computerGuess;
}


//


//wins increases by one  and updates on screen 
//Loss if losses(userGuess !== computerGuess)
// loss increases by one and updates screen

// Reset function when guesses left has to change and guesses so far has to be emptied . 
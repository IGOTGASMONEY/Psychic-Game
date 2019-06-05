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
var usedLetters = [];
var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Chooses a random letter from the array !
var computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];
console.log(computerGuess);


//This function will tell you the guesses you have made so far 
var newuserGuess = function () {
    document.getElementById("guessesLeft").html = "Guesses so far: " + userGuess;
}

var guessLeft = function () {
    document.getElementById("guessesLeft").html = "Guesses Left: " + guessesLeft;
}




// Win if statement if wins(userGuess === computerGuess)
document.onkeyup = function (event) {

    var userGuess = event.key;
    console.log("userGuess" + userGuess)

    document.getElementById('guess').textContent = userGuess;

    //Add letters to array of usedLetters
    usedLetters.push(userGuess)
    console.log(usedLetters);
    document.getElementById("guessesMade").textContent = usedLetters;


    if (userGuess === computerGuess) {
        console.log("You Win !");
        document.getElementById('win').textContent =  + wins; // this line prints the amount of wins 

        wins++; // this counts the amount of wins
        Reset();
    } else {
        console.log("Try Again!");
        // alert ("Incorrect Guess Please Try Again")
        guessesLeft--; // guesses left print to screen ( work on )
        document.getElementById('loss').textContent =  + losses; // prints out how many times the player has lost
    }
    if (guessesLeft === 0) {
        console.log("YOU LOST")
        losses++; // losses print to screen
        document.getElementById('left').textContent =  - guessesLeft; //prints out the amount of guesses left 
        Reset();
    }


}

function Reset() {
    guessesLeft = 9;
    usedLetters = [];
    console.log("RESET");

}
// clear html in reset . 
// guess made, user guess , guess left ;;


//wins increases by one  and updates on screen 
//Loss if losses(userGuess !== computerGuess)
// loss increases by one and updates screen

// Reset function when guesses left has to change and guesses so far has to be emptied . 
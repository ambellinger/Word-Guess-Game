
//Number of Wins starts at 0
var wins = 0;
//Number of Losses starts at 0
var losses = 0;
//Number of Guesses start at 12
var numberOfGuessesRemaining = 12;

// Create an array of words

var words = ["Pumpkin", "Witch", "Spooky", "Vampire", "Candy", "Ghost", "Boo"]
console.log(words)

//Create a variable to store the generated word
var generatedword = "";
var guess = [];
var logOfLettersGuessed = [];

//Computer picks randomly from the word bank **might have to multiply by 0 because you're not getting the first letter *make sure to lowercase
var generatedword = words[Math.floor(Math.random() * words.length )].toLowerCase();
console.log(generatedword);

//Counts the number of letters in the generated word
var blankletters = [];
for (i=0; i< generatedword.length; i++) {

    //Provides an '_' for every letter in the word
    blankletters[i] = "_";
    console.log(blankletters); 
}
//Comparing the user's guess to those in the word

/* Make a control so that remaining guesses
    decreases only when the letter is wrong */
var guessesRemainingControl = false;

/* Make a variable to store guesses */
guess = "";
wrongGuesses = "";
correctletters = "";
 
document.onkeyup = function(event) {
    var guess = event.key;
    console.log("letter guessed: " + guess);

    
//Step 3, Going thru each letter of the word, one by one
for (var j = 0; j < generatedword.length; j++) {      
//if it matches, it shows.     
if (generatedword[j] === guess) {
    blankletters[j] = guess;
    // store the correct letters into a variable; correctletters = blankletters[j];
    correctletters += blankletters[j];
    console.log("CORRECT LETTERS:  " + correctletters);
    console.log("BLANK LETTERS: " + blankletters);
    guessesRemainingControl = true;
    console.log(guessesRemainingControl);
    checkForWins();
        
    
} else {
    guessesRemainingControl = false; 
}

   //number of guesses decreases by 1
if (guessesRemainingControl == false && wrongGuesses.indexOf(guess) === -1)  {
    wrongGuesses += guess + "  ",
    numberOfGuessesRemaining--;
    checkForLosses();
    console.log("wrong guesses: " + wrongGuesses)
    console.log("number of Guesses Remaining" + numberOfGuessesRemaining)


 //Display

 //Shows the wins
 document.getElementById("showWins").textContent = wins;

 //Shows the losses
 document.getElementById("showLosses").textContent = losses;

 //Shows the current word with the "_"s for the blank letters
 document.getElementById("current-word").textContent = blankletters;

 //Shows the number of guesses remaining
 document.getElementById("guesses-remaining").textContent = numberOfGuessesRemaining;

 //Shows the letters guessed 
 document.getElementById("guessed-letters").textContent = wrongGuesses;
}
} 
}

//Checking for Wins

function checkForWins (){    
    if (correctletters == generatedword) {
        alert("youve won");
        wins++;  
        console.log("you've won");}          
}    

//Checking for Losses
function checkForLosses() {
    if(numberOfGuessesRemaining === 0) {
        alert("You've Lost")
        losses++;
        resetgame();
    }
}
//Reseting the game
function resetgame() {
    numberOfGuessesRemaining = 12;
    generatedword = "";
    wrongGuesses = "";
    blankletters = [];
    guess = "";

  // This is copied and pasted for the initial code up above   
    //Picking a new word
    generatedword = words[Math.floor(Math.random() * words.length )].toLowerCase();
    
    //getting the blanks
   for (i=0; i< generatedword.length; i++) {
    //Provides an '_' for every letter in the word
    blankletters[i] = "_";
    console.log(blankletters); 
}

}


/*Issues remaining, taking out guesses that are correct
    1. The correct letter won't display on the screen until another button is pushed.
    2. Cannot get it to only take away guess chances on incorrect guesses.
    3. Have to figure out how to check for wins
    5. Need to display wins
    7. Need to reset the game for wins
    8. Need to design the bootstrap to make it look pretty
*/

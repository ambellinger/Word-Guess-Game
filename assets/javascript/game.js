
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

/* Make a variable to store wrong guesses */
wrongGuesses = "";

//FIX 

document.onkeyup = function(event) {
     var guess = event.key;
    console.log("letter guessed: " + guess); 
    
//Step 3, Going thru each letter of the word, one by one
for (var j = 0; j < generatedword.length; j++) {        
//if it matches, it shows.     
if (generatedword[j] === guess) {
    blankletters[j] = guess;
    console.log("let guessed:" + guess);
    console.log("blank letters" + blankletters);
    //number of guesses decreases by 1
    console.log("Number of guesses remaining: " + numberOfGuessesRemaining);
    guessesRemainingControl = true;
    console.log(guessesRemainingControl);
} else {
    guessesRemainingControl = false; 
}

if (guessesRemainingControl == false && wrongGuesses.indexOf(guess) === -1)  {
    wrongGuesses += guess + "  ",
    numberOfGuessesRemaining--;
    console.log("wrong guesses: " + wrongGuesses)
    console.log("number of Guesses Remaining" + numberOfGuessesRemaining)
}
} //*LOOK INTO THE LOTTERY CODE*
}
//FIX

 console.log("kokobutter");
    //display incorrect letter
    // var wrongGuesses = document.getElementById("wrongguesses");
    // var wrongGuessesList = document.createElement ("div");
    // wrongGuessesList.textContent = wrongGuesses[j];
    // wrongGuesses.appendChild(wrongGuessesList);
    // console.log(wrongGuesses);
 //*LOOK INTO THE LOTTERY CODE*

console.log("Number of guesses remaining: " + numberOfGuessesRemaining);
//Display blank game, containing letters the length of the word in underscore blank spaces, and "play any key to start" on screen, placeholder image in left box, game default screen on right, initialize all variables to empty arrays or 0, create variables and functions within object
    //Game object containing methods
    
    var wins = 0;
    var loss = 0;
    var guessRemaining = 12;
    // var guessR = "";
    var mtnNames =["timponogos", "olympus", "jupiter", "sunset", "superior", "wolverine", "lone peak", "gobblers knob"]
    var compGuess = "";
    var compGuessArr = [];
    var compGuessStr = [];
    var userGuess = "";
    var correctGuess = [];
    var incorrectGuess = [0];
    var isPlaying = false;
    var winsDisplay = document.getElementById("numWins");
    var lossDisplay = document.getElementById("numLosses");
    var guessRemainDisplay = document.getElementById("guess-remaining"); 
        
    //Set Computer Guess to select a peak name within array of mountain names based on math.ramdom function   
    //Creates empty list within #word-container to place a series of list elements containing "_ "corresponding with the total number of letters in the word 
    
    //Functions in order to store computer guess as an array rather than a string
    function selectWord() {
        compGuess = mtnNames[Math.floor(Math.random()*mtnNames.length)];
        isPlaying = true;
        compGuessArr = compGuess.split("");
        // console.log(compGuessArr);
    }

    function wrongGuess() {
        incorrectGuess.push(userGuess);
        var letter = document.createElement("li");
        var guess = document.createTextNode(userGuess + " ");
        letter.appendChild(guess);
        document.getElementById("guess-wrong").appendChild(letter);
    }

    function createListPlaceholder() {
        for (let i = 0; i < compGuess.length; i++) { 
            compGuessStr.push("_ ");
        }
        // var letter = document.createElement("span");
        // var placeholder = document.createTextNode(compGuessStr);
        // console.log(compGuessStr);
        // letter.appendChild(placeholder);
        // document.getElementById("word-container").appendChild(letter);
        document.getElementById("word-container").textContent = compGuessStr;
        
    }
    function guessCount() {
        guessRemaining = guessRemaining - 1;
        guessR = guessRemaining.toString();
        // console.log("Guesses remaining" + guessR);
    }
    
    function matchCheck(userGuess) {
        if (compGuess.includes(userGuess)) {
            for (let i = 0; i < compGuess.length; i++) {
                if (userGuess === compGuess[i]) {
                    // console.log(i);
                    compGuessStr.splice(i, 1, userGuess);
                    

                }

            }
                // console.log(compGuessStr);


                // compGuessArr[i].replace(compGuess[i]);
                // console.log("Matching index " + i);
                document.getElementById("word-container").textContent = compGuessStr;
                // var outcome = true;
                
            } else {
                var outcome = false;
                wrongGuess();
        
            }       
        // console.log(outcome);
    }



    
    
    //win and loss count function

    // User guess to list replacement, will mess with pending recognizing guest index matching
    
 
    
       
    // look up nth child in js for the list items
    //Initializes game, generates placeholders for 
    document.onkeypress = function(event) { 
        userGuess = event.key;
      
      //these two are running for every case
        if (isPlaying === false)   {
            // isPlaying = true;
            selectWord(mtnNames);
            createListPlaceholder(compGuessArr);
            document.getElementById("begin").textContent = "press a key, take a guess";
            matchCheck(userGuess);
    

        
    //     // For loop that runs through each letter of compguess to check to match l to a letter within the array
    //     //check index, split word
        } else if (isPlaying === true) {
            matchCheck();
            
        
        }
        if(guessRemaining === 0){
            alert("You Lose");
            loss = loss + 1;
            guessRemaining = 12;
            isPlaying = false;
            lossDisplay.textContent = "Losses: " + loss
            
        }
        guessCount();
        guessRemainDisplay.textContent = guessR; //does not work
        winsDisplay.textContent = "Wins: " + wins
    }

            
   

    

    
    



    
 
 
    
    
  
    
    
//Upon key stroke, select random number to key to array of possible words


// Take the indexed value within the array and create a new string variable


// Split mountain name into an array of its letters

        
   
//compare key guess against work
//win conditions / loss conditions
//save already guessed letters
//set parameters for user guess
//increment wins or losses
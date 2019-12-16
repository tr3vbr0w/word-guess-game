//Display blank game, containing letters the length of the word in underscore blank spaces, and "play any key to start" on screen, placeholder image in left box, game default screen on right, initialize all variables to empty arrays or 0, create variables and functions within object
    //Game object containing methods
    
    var wins = 0;
    var loss = 0;
    var guessRemaining = 12;
    // var guessR = "";
    var mtnNames =["timponogos", "olympus", "jupiter", "sunset", "superior", "wolverine", "lone peak", "gobblers knob"]
    var compGuess = "";
    var compGuessArr = [];
    var displayArr = [];
    var compGuessStr = [];
    var userGuess = "";
    var correctGuess = [];
    var incorrectGuess = [];
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
        console.log('Comp guess array set here '+compGuessArr);
    }
//Remove, empty or clear function for game reset
    function wrongGuess() {
        incorrectGuess.push(userGuess);
        var letter = document.createElement("li");
        var guess = document.createTextNode(userGuess + " ");
        letter.appendChild(guess);
        document.getElementById("guess-wrong").appendChild(letter);
        guessRemaining--;

    }

    function createListPlaceholder() {
        for (let i = 0; i < compGuess.length; i++) { 
            displayArr.push("_ ");
        }
        compGuessStr = displayArr.join(" ");
        document.getElementById("word-container").textContent = compGuessStr;
        console.log('Display array set in createListPlaceholder'+ displayArr);
    }
   
    function matchCheck(userGuess) {
        if (compGuess.includes(userGuess)) {
            for (let i = 0; i < compGuess.length; i++) {
                if (userGuess === compGuess[i]) {
                    displayArr.splice(i, 1, userGuess);
                }
            }
                document.getElementById("word-container").textContent = displayArr;
            } else {
                wrongGuess();
            }    
        }

    //win and loss count function
    function gameReset() {
        guessRemaining = 12;
        isPlaying = false;
        compGuessArr = [];
        displayArr = [];
        incorrectGuess = [];
        document.getElementById("guess-wrong").innerHTML = "";
        document.getElementById("word-container").innerHTML = "";
    }

    // User guess to list replacement, will mess with pending recognizing guest index matching
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
            matchCheck(userGuess);
            
        
        }
        // guessCount();
        if(guessRemaining === 0){
            alert("You Lose");
            loss++;
            lossDisplay.textContent = "Losses: " + loss;
            gameReset();
            
        
        } else if (displayArr.toString() === compGuessArr.toString()){
            alert("You Win");
            wins++;
            winsDisplay.textContent = "Wins: " + wins;
            gameReset();
        }
        
        guessRemainDisplay.textContent = guessRemaining; 
    }

            
   

    

    
    



    
 
 
    
    
  
    
    

//Display blank game, containing letters the length of the word in underscore blank spaces, and "play any key to start" on screen, placeholder image in left box, game default screen on right, initialize all variables to empty arrays or 0, create variables and functions within object
    //Game object containing methods
    var game = {
        wins: 0,
        loss: 0,
        guessRemaining: 12,
        guessR: "",
        mtnNames:["timponogos", "olympus", "jupiter", "sunset", "superior", "wolverine", "lone peak", "gobblers knob"],
        compGuess: "",
        compGuessArr: [],
        compGuessStr: [],
        userGuess: "",
        correctGuess:[],
        incorrectGuess:[0],
        isPlaying: false,
        
        //Set Computer Guess to select a peak name within array of mountain names based on math.ramdom function   
        
        //Creates empty list within #word-container to place a series of list elements containing "_ "corresponding with the total number of letters in the word
        

        
        
                
    }
    
    var winsDisplay = document.getElementById("numWins");
    var lossDisplay = document.getElementById("numLosses");
    var guessRemainDisplay = document.getElementById("guess-remaining"); 

    //Functions in order to store computer guess as an array rather than a string
    function selectWord() {
        game.compGuess = game.mtnNames[Math.floor(Math.random()*game.mtnNames.length)];
        game.isPlaying = true;
        game.compGuessArr = game.compGuess.split("");
        console.log(game.compGuessArr);
    }
    function wrongGuess() {
        game.incorrectGuess.push(game.userGuess);
        var letter = document.createElement("li");
        var guess = document.createTextNode(game.userGuess + " ");
        letter.appendChild(guess);
        document.getElementById("guess-wrong").appendChild(letter);
    }
    function createListPlaceholder() {
        for (let i = 0; i < game.compGuess.length; i++) { 
            game.compGuessStr.push("_ ");
        }
        // var letter = document.createElement("span");
        // var placeholder = document.createTextNode(game.compGuessStr);
        // console.log(game.compGuessStr);
        // letter.appendChild(placeholder);
        // document.getElementById("word-container").appendChild(letter);
        document.getElementById("word-container").textContent = game.compGuessStr;
        
    }
    function guessCount() {
        game.guessRemaining = game.guessRemaining - 1;
        game.guessR = game.guessRemaining.toString();
        console.log("Guesses remaining" + game.guessR);
    }
    
    function matchCheck() {
        // for (let i = 0; i < game.compGuess.length; i++) {
            if (game.compGuess.includes(game.userGuess)) {
                // game.compGuessArr[i].replace(game.compGuess[i]);
                // console.log("Matching index " + i);
                document.getElementById("word-container").textContent = game.compGuessStr;
                var outcome = true;
                
            } else {
                var outcome = false;
                wrongGuess();
        
            }       
        console.log(outcome);
    }



    
    
    //win and loss count function

    // User guess to list replacement, will mess with pending recognizing guest index matching
    
 
    
       
    // look up nth child in js for the list items
    //Initializes game, generates placeholders for 
    document.onkeypress = function(event) { 
        game.userGuess = event.key;
      
      //these two are running for every case
        if (game.isPlaying === false)   {
            // game.isPlaying = true;
            selectWord(game.mtnNames);
            createListPlaceholder(game.compGuessArr);
            document.getElementById("begin").textContent = "press a key, take a guess";
            matchCheck();
    

        
    //     // For loop that runs through each letter of game.compguess to check to match l to a letter within the array
    //     //check index, split word
        } else if (game.isPlaying === true) {
            matchCheck();
            
        
        }
        if(game.guessR === 0){
            alert("You Lose");
            game.losses = game.losses + 1;
            game.guessR = 12;
            
        }
        guessCount();
        guessRemainDisplay.textContent = game.guessR; //does not work
        winsDisplay.textContent = "Wins: " + game.wins
        lossDisplay.textContent = "Losses: " + game.loss
    }

            
   

    

    
    



    
 
 
    
    
  
    
    
//Upon key stroke, select random number to key to array of possible words


// Take the indexed value within the array and create a new string variable


// Split mountain name into an array of its letters

        
   
//compare key guess against work
//win conditions / loss conditions
//save already guessed letters
//set parameters for user guess
//increment wins or losses
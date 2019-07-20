//Display blank game, containing letters the length of the word in underscore blank spaces, and "play any key to start" on screen, placeholder image in left box, game default screen on right, initialize all variables to empty arrays or 0, create variables and functions within object
    //Game object containing methods
    var game = {
        wins: 0,
        losses: 0,
        guessRemaining: 12,
        mtnNames:["timponogos", "olympus", "jupiter", "sunset", "superior", "wolverine", "lone peak", "gobblers knob"],
        compGuess:[],
        userGuess: [],
        correctGuess:[],
        incorrectGuess:[],
        isPlaying: false,
        
        //Set Computer Guess to select a peak name within array of mountain names based on math.ramdom function   
        
        //Creates empty list within #word-container to place a series of list elements containing "_ "corresponding with the total number of letters in the word
        

        
        
                
    }
//This code works on refresh, but having difficulty setting to onkeypress
    function selectWord() {
        game.compGuess = game.mtnNames[Math.floor(Math.random()*game.mtnNames.length)];
        isPlaying = true;
        console.log(game.compGuess);
    }
    function createListPlaceholder() {
        for (let i = 0; i < game.compGuess.length; i++) { 
            var letter = document.createElement("li");//need something here to assign id to each individual list item
            var placeholder = document.createTextNode("_ ");
            letter.appendChild(placeholder);
            document.getElementById("word-container").appendChild(letter);
            isPlaying = true;
        }
    }
    function guessCount() {
        game.guessRemaining = game.guessRemaining - 1;
        return  game.guessRemaining;
    }

    
    
       
    
    //Runs through code and checks userGuess vs individual letters in computerGuess
    document.onkeypress = function(event) {
        selectWord(game.mtnNames);
        createListPlaceholder(game.compGuess);
        guessCount(game.guessRemaining);
        document.getElementById("begin").textContent = "press a key, take a guess";
        game.guessRemaining = document.getElementById("guess-remaining"); //does not work
        game.isPlaying = true;
        
        var l = event.key.toLowerCase();
        // For loop that runs through each letter of game.compguess to check to match l to a letter within the array  
        for (let i = 0; i < game.compGuess.length; i++) {
            if (l === game.compGuess[i])
                
        }
            
        // }

    }

    
    



    
 
 
    
    
  
    
    
//Upon key stroke, select random number to key to array of possible words


// Take the indexed value within the array and create a new string variable


// Split mountain name into an array of its letters

        
   
//
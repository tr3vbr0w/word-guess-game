//Display blank game, containing letters the length of the word in underscore blank spaces, and "play any key to start" on screen, placeholder image in left box, game default screen on right, initialize all variables to empty arrays or 0, create variables and functions within object
    //Game object containing methods
    var game = {
        wins: 0,
        losses: 0,
        guessRemaining: 12,
        guessR: "",
        mtnNames:["timponogos", "olympus", "jupiter", "sunset", "superior", "wolverine", "lone peak", "gobblers knob"],
        compGuess: "",
        compGuessArr: [],
        userGuess: "",
        correctGuess:[],
        incorrectGuess:[0],
        isPlaying: false,
        
        //Set Computer Guess to select a peak name within array of mountain names based on math.ramdom function   
        
        //Creates empty list within #word-container to place a series of list elements containing "_ "corresponding with the total number of letters in the word
        

        
        
                
    }
    //Functions in order to store 
    function selectWord() {
        game.compGuess = game.mtnNames[Math.floor(Math.random()*game.mtnNames.length)];
        game.isPlaying = true;
        game.compGuessArr = game.compGuess.split("");
        console.log(game.compGuessArr);
    }
    function createListPlaceholder() {
        for (let i = 0; i < game.compGuess.length; i++) { 
            var letter = document.createElement("li");//need something here to assign id to each individual list item
            var placeholder = document.createTextNode("_ ");
            letter.appendChild(placeholder);
            document.getElementById("word-container").appendChild(letter);
            
        }
    }
    function guessCount() {
        game.guessRemaining = game.guessRemaining - 1;
        game.guessR = game.guessRemaining.toString();
        console.log(game.guessR);
    }
    
    function matchCheck() {
        for (let i = 0; i < game.compGuess.length; i++) {
            if (game.userGuess === game.compGuessArr[i]){
                console.log(i);
            }
             
            if (game.userGuess !== game.compGuessArr[i]){
            game.incorrectGuess.push(game.userGuess);
            // document.getElementById()
            var letter = document.createElement("li");
            var guess = document.createTextNode(game.userGuess);
            letter.appendChild(guess);
            document.getElementById("guess-wrong").appendChild(letter);
            }
        }
        guessCount(game.guessRemaining);    
    }
    
    //win and loss count function

    // User guess to list replacement, will mess with pending recognizing guest index matching
    
    // if (game.userGuess === game.compGuessArr[i]) {
    //     var letter = document.createTextNode(event.key);
    //     var item = document.getElementById("word-container").childNodes[i];
    //     letter.replaceChild(event.key, item.game.compGuessArr[i]);
    //     game.compGuessArr[i].replaceChild(game.userGuess); 
    // }
    
    
       
    // look up nth child in js for the list items
    //Initializes game, generates placeholders for 
    document.onkeypress = function(event) {
        if (game.isPlaying === false)   {
            selectWord(game.mtnNames);
            // game.compGuessArr = game.compGuess.split(); //Setting compGuess Variable to array to view index of your string
            createListPlaceholder(game.compGuessArr);
            guessCount(game.guessRemaining);
            document.getElementById("begin").textContent = "press a key, take a guess";
            document.getElementById("guess-remaining").textContent = game.guessR; //does not work
        }           
        
        game.userGuess = event.key.toLowerCase();
     
        // For loop that runs through each letter of game.compguess to check to match l to a letter within the array
        //check index, split word
        if (game.isPlaying === true) {
            console.log(matchCheck(game.userGuess));
        }
        // findLetter(this);
    }

            
   

    

    
    



    
 
 
    
    
  
    
    
//Upon key stroke, select random number to key to array of possible words


// Take the indexed value within the array and create a new string variable


// Split mountain name into an array of its letters

        
   
//compare key guess against work
//win conditions / loss conditions
//save already guessed letters
//set parameters for user guess
//increment wins or losses
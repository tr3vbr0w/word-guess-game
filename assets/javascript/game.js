//Display blank game, containing letters the length of the word in underscore blank spaces, and "play any key to start" on screen, placeholder image in left box, game default screen on right, initialize all variables to empty arrays or 0, create variables and functions within object
    var game = {
        wins: 0,
        losses: 0,
        mtnNames:["timponogos", "olympus", "jupiter", "sunset", "superior", "wolverine", "lone peak", "gobblers knob"],
        compGuess:[],
        correctGuess:[],
        incorrectGuess:[],
        
        
                
    }

    //Set Computer Guess to select a peak name within array of mountain names based on math.ramdom function   
    game.compGuess = game.mtnNames[Math.floor(Math.random()*game.mtnNames.length)];
    console.log(game.compGuess);

    //Creates empty list within #word-container to place a series of list elements containing "_ "corresponding with the total number of letters in the word
    
    for (let i = 0; i < game.compGuess.length; i++) { 
        var letter = document.createElement("li");
        var placeholder = document.createTextNode("_ ");
        letter.appendChild(placeholder);
        document.getElementById("word-container").appendChild(letter);
             
    }
    
    
    
    //Runs through code and checks userGuess vs individual letters in computerGuess
    // document.onkeypress(event.keyCode {

    // })
    
    
 
 
    
    
  
    
    
//Upon key stroke, select random number to key to array of possible words


// Take the indexed value within the array and create a new string variable


// Split mountain name into an array of its letters

        
   
//
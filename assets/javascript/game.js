//Display blank game, containing letters the length of the word in underscore blank spaces, and "play any key to start" on screen, placeholder image in left box, game default screen on right, initialize all variables to empty arrays or 0, create variables and functions within object
    var game = {
        wins: 0,
        losses: 0,
        mtnNames:["timponogos", "olympus", "jupiter", "sunset", "superior", "wolverine"],
        compGuess:[],
        correctGuess:[],
        incorrectGuess:[],
    
    }

  //Set Computer Guess to select a peak name within array of mountain names based on math.ramdom function   
    compGuess = game.mtnNames[Math.floor(Math.random()*game.mtnNames.length)];
    console.log(compGuess);

    for (let i = 0; i < compGuess.length; i++) {
        
        
    }
    
    // console.log(game.mtnNames.length);
    
    // var userGuess = document
//Upon key stroke, select random number to key to array of possible words


// Take the indexed value within the array and create a new string variable
    // document.onkeyup 
    
    // var mtn = 

// Split mountain name into an array of its letters
    // for (let i = 0; i < mtnName.length; i++) {
    //     console.log(mtnName.charAt(i));
        
    // }

//
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
    compGuess = game.mtnNames[Math.floor(Math.random()*game.mtnNames.length)];
    console.log(compGuess);

    //Creates empty list within #word-container to place a series of list elements corresponding with the total number of letters in the word
    
    var compGuessList = document.getElementById("word-container");
    
    
    //Creates a placeholder of _ for each letter within compGuess; make sure to change <li> to inline element to display on same line in css
    function createListItem (text) {
        for (let i = 0; i < compGuess.length; i++){ 
            var letter = document.createElement("li");
            var placeholder = document.createTextNode("_");
            letter.appendChild(placeholder);
            console.log(letter);
    }}
    // function addListItem (parent, children) {
    //     children.
    // }

    // }
    
    
  
    
    
//Upon key stroke, select random number to key to array of possible words


// Take the indexed value within the array and create a new string variable


// Split mountain name into an array of its letters

        
   
//
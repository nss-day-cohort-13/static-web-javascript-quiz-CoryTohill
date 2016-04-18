// Instructions

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.
// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character,
// the user can either then just press the enter key (as long as the cursor is in one of the input fields),
// or click a button that is labeled "Grow your tree" and the tree should be shown in the console.
// This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key,
// or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree
// defines the object and 2 empty keys to be filled in by the user's input
var userInput = {
  height: "",
  character: ""
}

// selects the button labeled "Grow your Tree"
var growButton = document.getElementById("growTree");


// function to build the console tree based on user input
var treeBuilder = function() {

  // converts the user input from a string to a number and inserts it into userInput object
  userInput.height = parseInt(document.getElementById("inputHeight").value);

  // inserts the user's character into the userInput object
  userInput.character = document.getElementById("inputChar").value;

  // sets starting values for counters inside the for loops
  var charCounter = 1;
  var treeHeight = userInput.height;

  // loop that contains sub loops; first sub loop determines how much spacing, and 2nd sub loops determines characters to add per line
  for (i = 0; i < userInput.height; i ++) {
    holder = "";

    for(j = 0; j < treeHeight; j++) {
      holder += " ";
    }
    for(c = 0; c < charCounter; c++){
      holder += userInput.character;
    }
    charCounter += 2;
    treeHeight -= 1;
    console.log(holder);
  }
}

// runs the treeBuilder function when the "Grow your tree" button is clicked
growButton.addEventListener("click", treeBuilder);
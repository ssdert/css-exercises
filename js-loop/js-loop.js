console.log("-- init script");

var myTitle;
/* the varible is undefined because it has no value assigned to it */
console.log(myTitle);

myTitle = document.getElementById('name');
/* the varible returns as null because it has a wrong value assigned to it */
console.log(myTitle);

myTitle = document.getElementById('appTitle').innerText;
/* the value of the variables gets logged */
console.log(myTitle);


/* Say my Name APP */

var allTheNames = [];

// DEFINE A VARIABLE

var nameButton = document.getElementById('nameButton');
var nameInput = document.getElementById('myName');
var messageBox = document.getElementById('messageBox');

nameButton.addEventListener('click', sayMyName);

function sayMyName() {
  
  // console.log(nameInput.value.length);
  
  if( nameInput.value.length > 0 ) {
    // if there are more than 0 characters in the input field
    allTheNames.push(nameInput.value);
    // empty the input
    nameInput.value = "";
    // put the cursor in the input field 
    nameInput.focus();

    // pick the la
    var lastNameAdded = allTheNames[allTheNames.length - 1];
    // SUCCESS
    updateTheMessage(
      "You have successfuly added " + lastNameAdded + " to the list", true);
/*     console.log(allTheNames[allTheNames.length - 1]); */
    /* console.log(allTheNames); */
  } else {
    /* console.log('No name'); */

    // ERROR
    updateTheMessage("No name entered", false);
  }

  // check if it's not empty
  // allTheNames.push(nameInput.value);

  // empty the input and focus on it

  // console.log(allTheNames);


  // STORE IN THAT VARIABLE USING
  // THE .push('value') METHOD
}

function updateTheMessage(messageText, messageSuccess) {
  messageBox.innerText = messageText;

  if (messageSuccess == true) {
    messageBox.classList.add('message-success');
    messageBox.classList.remove('message-error');
  } else {
    messageBox.classList.add('message-error');
    messageBox.classList.remove('message-success');
  }

}




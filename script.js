// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = 'lightblue';
}

// Function to reset the background color when the reset button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay');
  display.textContent = `You pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const input = document.getElementById('textInput');
  const display = document.getElementById('textInputDisplay');
  const text = input.value;
  display.textContent = text;

  // Bonus: If user types "green", change background color
  if (text.toLowerCase() === 'green') {
    document.body.style.backgroundColor = 'green';
  }
}

// Attach Event Listeners

// Change background on button click
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor);

// Reset background on double-click
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor);

// Display key pressed
document.addEventListener('keydown', displayKeyPress);

// Show user input live
document
  .getElementById('textInput')
  .addEventListener('input', displayUserInput);

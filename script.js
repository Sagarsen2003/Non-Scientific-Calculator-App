let inputDisplay = document.getElementById("inputBox");

// To Track all the Buttons
let buttons = document.querySelectorAll("button");
console.log(buttons);

// To store all the button list names in an array to easily access it as a variable
let buttonsArray = Array.from(buttons);
// console.log(buttonsArray);

// To Store the expression of every value operation
let str = "";

//Array Function

// To access all buttons in the array
buttonsArray.forEach((btn) => {
  // To Perform action when the button is clicked
  btn.addEventListener("click", (e) => {

    // When the DEL button is clicked, then from the display, value of the number got decreased by one
    if (e.target.innerHTML === "DEL") {
      str = str.substring(0, str.length - 1);
      inputDisplay.value = str;
    } 
    
    // To Clear the Overall Input Display
    else if (e.target.innerHTML === "AC") {
      str = "";
      inputDisplay.value = str;
    } 
    
    // To evaluate any expression and display it in the Input Display
    else if (e.target.innerHTML === "=") {
      try {
        str = eval(str);
        inputDisplay.value = str;
      } catch (error) {
        // If the expression is invalid, show "Error" in the input display
        inputDisplay.value = "Error";
        str = ""; // Clear the expression to reset
      }
    } 
    
    // To input on the Input Display
    else {
      str += e.target.innerHTML;
      inputDisplay.value = str;
    }
  });
});


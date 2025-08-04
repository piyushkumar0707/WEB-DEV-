// Playing with Types
// Task 1:

// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
function stringToNumber(input) {
    let num=parseInt(input);
    return isNaN(num) ? "Not a number" : num;
}


// Task 2:

// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
function flipBoolean(input) {
    return !Boolean(input)
}


// Task 3:

// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
  // Try to convert to number
 function whatAmI(input) {
  const num = Number(input);

  if (!isNaN(num) && input !== "") {
    return "I'm a number!";
  }

  // Convert to string and check
  if (typeof input === "string" || input != null) {
    return "I'm a string!";
  }

  return "Unknown type!";
}


// Task 4:

// Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
  return input ? "It's truthy!" : "It's falsey!";
}



// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() 
{
    let Add= a+b;
    return Add;
}

// Subtract small value from larger one
function subtract() {
    let Subtract=b-a;
    return Subtract;
}

function multiply() {
    let Multiply=a*b;
    return Multiply;
}

// Divide larger value by small
function divide() {
    let Divide=b/a;
    return Divide;
}


// Increase value of a by 1
function increment() {
    let Increment=a;
    Increment+= 1;
    return Increment;
}

// Decrease value of b by 1
function decrement() {
    let Decrement=b;
    Decrement-= 1;
    return Decrement;
}

// Divide larger value by small to find the reminder
function reminder() {
    let Reminder=b%a;
    return Reminder;
}

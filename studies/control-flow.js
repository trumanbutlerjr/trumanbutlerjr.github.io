
/*
* Stop lights control the flow of traffic at intersections to ensure that all directions do not proceed at once. 
* Similarly, we can control the flow of code in the event that we want different programs to run under 
* established conditions. Two ways to accomplish this in Javascript are with if-else-if chains and switch statements. 
*/

// To demonstrate this, let's create a variable that represents the color of a stoplight
var light = 'green';

// Now let's create some directions based on the light
var green = 'Please go.';
var yellow = 'Please go slow.';
var red = "Please stop.";



// IF STATEMENT
// Printing all of the directions at once causes confusion, so we will print on that which corresponds with the light
// Because the condition in parentheses is true, the console wiil log "Please go."
if (light === 'green') {
    console.log(green);
}

// But what if the light is not green? That is, what if the condition is false?
light = 'yellow';
if (light === 'green') {
    console.log(green);
}
// Nothing will print because the program terminates at a false condition.
// However, we indeed have directions that correspond to yellow. We will need to consider an if/else-if Statement.



// IF/ELSE-IF STATEMENT
light = 'yellow';
if (light === 'green') {
    console.log(green);
} else if (light === 'yellow') {
    console.log(yellow);
} 



// IF/ELSE-IF
// Because there is another color by which we can control the flow, we can create an additional else-if statement.
light = 'red';
if (light === 'green') {
    console.log(green);
} else if (light === 'yellow') {
    console.log(yellow);
} else if (light === 'red') {
    console.log(red);
}



// IF/ELSE-IF/ELSE
// In our previous example, there is a defined range of lights. The closing else statement is typically used when users have a free range of 
// inputs not defined by the programer. Consider the following function:
function direction(number) {
    if (number > 0) {
    console.log('positive');
} else if (number === 0) {
    console.log('zero');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('Please enter a numerical value');
}
}
direction(-3);
// This control flow has an appropriate response for all possible entries. 



// SWITCH STATEMENTS
// A switch statement is an alternative method to the if/else-if chain. If we were to write the stoplight flow as a switch statement:
function stopLight(color) {
switch(color) {
  case green:
    console.log('Please go.');
    break;
  case yellow:
    console.log('Please go slow.');
    break;
  default:
    console.log("Please stop.");
}
}
// If the input color mathes the case, the command under that case will run. If a case is not defined, a default is set to run. 
// The break terminates the program. Notice that a break is not needed after the default statement.

stopLight(red);

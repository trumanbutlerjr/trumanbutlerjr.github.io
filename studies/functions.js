/* 
*   You should have notes for each of the sub-topics of each file, which you can find listed below.
*   NOTE:   The notes you make must be working JavaScript. You should have code examples that clearly show you understand the concept. 
*           Use single-line or multiline comments to explain your code. Ensure your code works and is valid by running the file you are 
*           writing in notes in!
*   Make sure these notes are in your own words, and using your own examples, so you can best understand them!
*/



// WHAT ARE THEY?
// Functions allows the reuse of code without typing the code repeatedly.
// The example below creates multiples of 5 and can be used with an indefinite amount of numbers.
function timesFive(multiple) {
    return multiple *= 5;
}
timesFive(8);
timesFive(11);

// This is called a FUNCTION DECLARATION
// The above function is NAMED (i.e timesFive) and makes use of 
// a PARAMETER (i.e. multiple), which is the "doorway" through which designated values enter the code
// The first FUNCTION CALL - or activation of the function's code, (i.e. timesFive(8) - passes in
// an ARGUMENT, the designated value, of 8.




var sayUncle = function () {
    var boss = 'Truman';
    console.log (`I give up ${boss}! You da man!`);
};
console.log(sayUncle);
// Unlike the previous example, this is 

// ANONYMOUS VS. NAMED


// PARAMETERS VS. NON-PARAMETRIC


// SINGLE VALUE




// FIRST-CLASS OBJECTS

// FUNCTION EXPRESSIONS



// HIGHER ORDER

/*
The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
What’s the difference between a function’s parameters and arguments PASSED to a function?
What’s the syntax for a NAMED function?
How do we assign a function to a variable?
Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!)
*/



// WHAT ARE THEY?
// Functions allows the reuse of code without typing the code repeatedly.
// The example below creates multiples of 5 and can be used with an indefinite amount of numbers.


function sayUncle(boss) {
    console.log(`I give up ${boss}! You da man!`);
}
sayUncle('Truman');
// This is called a FUNCTION DECLARATION
// The above function is NAMED (i.e sayUncle) by declaring its name after the function keyword and makes use of 
// a PARAMETER (i.e. boss), which is the "doorway" through which designated values enter the code
// The first FUNCTION CALL - or activation of the function's code, (i.e. sayUncle('Truman') - passes in
// an ARGUMENT, the designated value, of 'Truman'.
// This function is al



var sayItNow = function() {
    var inferior = 'boy';
    return (`Yield already, ${inferior}! I'm da man!`);
};
sayItNow();
// Unlike the sayUncle function, this is called a FUNCTION EXPRESSION
// The above function is not named, and is therefore considered ANONYMOUS, though the function is assigned to a variable.
// There are no parameters.
// This function can be used as a FIRST-CLASS OBJECT via the return statement, meaning we can insert it virtually
// anywhere in our code as a single value.



function manipulate(value, manip) {
  let arr = [];
  arr.push(value);
  arr.push(manip(value));
  return arr;
}
manipulate(8, multBy2);
manipulate(8, divBy2);
manipulate(8, addBy2);
manipulate(8, subBy2);
// The above function is a HIGHER ORDER FUNCTION (HOF) because it passes in another function
// HOFs can also return a function, a process known as CLOSURE. 
// In this case, smaller CALLBACK functions (see below) are passed in and used to manipulate the value passed in.

function multBy2(number) {
  return number * 2;
}

function divBy2(number) {
  return number / 2;
}

function addBy2(number) {
  return number + 2;
}

function subBy2(number) {
  return number - 2;
}




/*
One more note on Higher Order Functions:
Functions form closures around the data they house. If an object returned from 
the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can 
continue to exist in these closures! (See: our meeting-room app for an example!)
*/
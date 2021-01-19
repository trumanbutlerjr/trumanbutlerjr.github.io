/* 
*   You should have notes for each of the sub-topics of each file, which you can find listed below.
*   NOTE:   The notes you make must be working JavaScript. You should have code examples that clearly show you understand the concept. 
*           Use single-line or multiline comments to explain your code. Ensure your code works and is valid by running the file you are 
*           writing in notes in!
*   Make sure these notes are in your own words, and using your own examples, so you can best understand them!
*/

/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/*
Declaration and assignment
var, let, const
Hoisting
*/
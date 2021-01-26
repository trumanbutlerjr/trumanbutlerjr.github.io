


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

hoistedVar = 'On top, ya heard me';
console.log(hoistedVar);    // prints 'On top, ya heard me' even though it was declared at bottom

// 1. declaration //
var myName;
console.log(myName); // prints => undefined, because we have NOT yet initialized it



// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything using var 
var myVariable = 1;
myVariable = true;
myVariable = "someString";


// 4. Using let and const
let aName = 'Truman';       // let is like var except it is not hoisted 
const bName = 'Butler';     // const cannont be hoisted nor reassigned; however, collections can still be manipulated
console.log(aName);     
console.log(bName);


// 5. var gets hoisted globally, unlike let and const
var hoistedVar;     // see console.log(hoistedVar) at the top; only the declaration get hoisted






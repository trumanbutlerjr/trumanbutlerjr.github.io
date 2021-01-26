


// The while, for, and do loops all contain 4 fundamental exprssions: initialize, condition, execution, update.
// for-of and for-in loops contain declaration and execution only

// FOR (increment)
// variable i is initialized at 1; the loop will run as long as i is less than 5 (i.e. 4 or smaller); i will increment by 1 after each execution
for (var i = 1; i < 5; i++) {
// prints the current value of i; after the loop is complete, numbers 1, 2, 3 and 4 will all be printed
    console.log(i);
}

// FOR (decrement)
// variable i is initialized at 4; the loop will run as long as i is greater than 0 (i.e. 4 or smaller); i will increment by 1 after each execution
for (var i = 4; i > 0; i--) {
// prints the current value of i; after the loop is complete, numbers 4, 3, 2 and 1 will all be printed
    console.log(i);
}

// FOR-OF
// These loops work with arrays; they cannot utilize indeces nor decrement
var anArray = [1, 2, 3];
// 'anArray' is declared as the reference for the above array and its elements will be referenced with the declaration of 'element'
for (var element of anArray) {
// prints the current element value until the end of the array; after the loop is complete, numbers 1, 2, and 3 will all be printed
    console.log(element);
}

// FOR-IN
// These loops work with objects; they cannot utilize indeces nor decrement as well
var anObject = {one: 1, two: 2, three: 3};
// 'anObject' is declared as the reference for the above object and its keys will be referenced with the declaration of 'key'
for (var key in anObject) {
// prints the current key and value (separated by a colon) until the end of the object
// after the loop is complete, one:1, two: 2 and three:3 will all be printed
    console.log(`${key}: ${anObject[key]}`);
}



// I; Do {E; U;} While (C)

// WHILE
// variable i is initialized at 1
var w = 1;
// the loop will run while w is less than 5 (i.e. 4 or smaller);
while (w < 5){
// prints the current value of w; after the loop is complete, numbers 1, 2, 3 and 4 will all be printed
    console.log(w); 
// w will increment by 1 after each execution
    w++;
}



// WHILE
// variable d is initialized at 1
var d = 1;
do {
// prints the current value of d; after the loop is complete, numbers 1, 2, 3 and 4 will all be printed
    console.log(d); 
// d will increment by 1 after each execution
    d++;
}
// the loop will run while d is less than 5 (i.e. 4 or smaller);
while (d < 5)
    


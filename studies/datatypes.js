
/*
Computers work with information known as bits in its smallest form.
These work together to form what we call values, the fundamental units we work with to build programs in Javascript.
A value can be a number, text, a collection of text or even a process. 
Values are classified in either one of two categories: Simple/Primitive or Complex
*/


// SIMPLE
// Simple datatypes are "atomic," meaning they can't be broken down into anything meaningful, and "immutable," meaning they can't be changed.
// Here are samples of simple datatypes and their technical references:
typeof 7;           // number
typeof NaN;         // NaN, which stands for "not a number." However, NaN is recognized in Javascript as a special type of numerical value
                    // Infinity and -Infinity are not mathematically sound so they tend to lead to NaN values 
typeof 'Truman';    // string
typeof true;        // boolean (the other boolean value is false)
typeof undefined;   // undefined, an indicator that there is no meaningful information; meant for us to track UNDEFINED values
console.log(null);  // null also indicates no meaningful information; meant for us to track the ABSENCE of values; mistakenly recognized as an object type in Javascript, so console.log is used here

// COPY-BY-VALUE
// When we want to reuse simple data types throughout our code, they are COPIED. Think of me cloning myself so that I could occupy another house.
// See below for example
var a = 1;          // 1 is assigned to a
var b = a;          // new value of 1 is created by cloning/copying original 1 and assigned to b; each one occupies separate memory slots
console.log(a);     // prints original 1
console.log(b);     // prints copied 1
b = 2;          // the copied 1 is erased and replaced with 2; the original 1 is unaffected 
console.log(a);     // prints original 1 (unaffected)
console.log(b);     // prints 2, occupying the same memory as the copied 1

aFunction(a);       // returns 5; the 1 held by a is copied by value into the function. Thus...
console.log(a);     // ...still prints 1 although the copied 1 was altered to 5



// COMPLEX
// Complex datatypes are "aggregates," or combinations, of values (simple or complex) and have no specified size 
// Here are samples of complex datatypes and their technical references:
var anObject = {firtName: 'Truman', lastName: 'Butler'};    // Object: stores properties that are depicted in key-value pairs
                                                            // keys must be strings and values can be any value type, even an array or another object

var anArray = [[21, true, 'Hello World'], {planet: 'Earth'}];   // Array: a list of elements, each containing an index, which is how we reference the elements
                                                                // indeces begin at 0 and build up to the length of the array
console.log(anArray[0][1]);                                     // prints true; first index [0] references array in anArray and second index [1] references true in inner array
                                                                // arrays can contain any value type

function aFunction(multiple) {                                  // Function: can contain an indefinite amount of statements
    return multiple *= 5;                                       // See functions.js for more detailaFunction(8);
}

console.log(anObject);  // 

aFunction(a);           // returns value of function after passing in argument



// COPY-BY-REFERENCE
// When we want to reuse complex data types throughout our code, they are REFERENCED. Think of me giving multiple people my address and never leaving my house.
// See below for an example
var refForAnObject = anObject;              // the memory address held by anObject is given to another variable for reference
console.log(refForAnObject);                // references and prints the object literal
refForAnObject.school = 'Operation Spark';  // new property is added to the object literal via the second reference point
console.log(anObject);                      // notice the object literal is affected because only the address to a single object has been copied, not the object itself
console.log(refForAnObject);                // the second reference point prints the same object






/*

Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
*/
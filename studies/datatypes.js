
/*
Computers work with information known as bits in its smallest form.
These work together to form what we call values, the fundamental units we work with to build programs in Javascript.
A value can be a number, text, a collection of text or even a process. 
Values are classified in either one of two categories: Simple/Primitive or Complex
*/


// SIMPLE
// Simple datatypes are "atomic," meaning they can't be broken down into anything meaningful, and "immutable," meaning they can't be changed.
// Here are samples of simple datatypes and their technical references:
7;          // number
NaN;        // NaN, which stands for "not a number." However, NaN is recognized in Javascript as a special type of numerical value
            // Infinity and -Infinity are not mathematically sound so they tend to lead to NaN values 
'Truman';   // string
true;       // boolean (the other boolean value is false)
undefined;  // undefined, an indicator that there is no meaningful information; meant for us to track UNDEFINED values
null;       // null also indicates no meaningful information; meant for us to track the ABSENCE of values

// USE-BY-VALUE
// Note: The proper jargon is copy-by-value, but using this confuses me because complex data types are not copied as we will see
// When we want to reuse simple data types throughout our code, they are COPIED. Think of me cloning myself so that I could occupy another house.

// Example HERE


// COMPLEX
// Complex datatypes are "aggregates," or combinations, of values (simple or complex) and have no specified size 
// Here are samples of complex datatypes and their technical references:
var anObject = {firtName: 'Truman', lastName: 'Butler'};    // Object: stores properties that are depicted in key-value pairs
                                                            // keys must be strings and values can be any value type, even an array or another object

var anArray = [[21, true, 'Hello World'], {planet: 'Earth'}];   // Array: a list of elements, each containing an index, which is how we reference the elements
                                                                // indeces begin at 0 and build up to the length of the array
                                                                // arrays can contain any value type

function aFunction(multiple) {                                  // Function: can contain an indefinite amount of statements
    return multiple *= 5;                                       // See functions.js for more detailaFunction(8);
}

console.log(anObject);
console.log(anArray);
aFunction(8);
aFunction(11);

// USE-BY-REFERENCE
// Note: The proper jargon is copy-by-reference (though they are not copied...see...told ya)
// When we want to reuse complex data types throughout our code, they are REFERENCED. Think of me giving multiple people my address and never leaving my house.

// Example HERE





/*

Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
*/
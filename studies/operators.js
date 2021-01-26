

// Simply put, OPERATORS do things with our data
// Here are the various types:


// ASSIGNMENT operator
var assignment = '=' ;
console.log(assignment);


// ARITHMETIC
// used to handle math with numbers
2 + 2;  // addition
2 - 2;  // subtraction
2 * 2;  // multiplication
2 / 2;  // division
2 % 2;  // provides remainder of dividing two numbers


// COMPARISON
// used to compare two values and return a Boolean (i.e. true or false)
1 < 2;      // less than
1 > 2;      // greater than;
1 <= 2;     // less than or equal to
1 >= 2;     // greater than or equal to
1 === 2;    // strictly equals; non-strict version is ==
1 !== 2;    // strictly not equal to non-strict version is !=


// STRING
var thisIs = 'This is ';
console.log('This is ' + 'me.');    // used to concatenate two values
console.log(thisIs += 'me.');       // used to at once concatenate and assign a value


// LOGICAL
// use to for and, or and not
1 < 2 || 1 > 2;     // or
1 < 2 && 2 > 1;     // and
!false;             // returns the opposite of the truthiness or falseness of a value


// UNARY
// With the exception of the '!false' example, the above operators did things with two values, or operands, making them binary operators
// below are unary operators, used to modify or describe values
!true;      // again, returns the opposite of the truthiness or falseness of a value
-2;         // renders a number negative
typeof 7;   // returns the type of value


// TERNARY  (a ? b : c)
// this operator is an alternative to an if/else statement
if (1 === 2) {
    console.log(true);
} else {
    console.log(false);
}
// ... can be rewritten as...
1 === 2 ? console.log(true) : console.log(false);


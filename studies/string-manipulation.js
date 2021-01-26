


// Strings are character data in computer programs.
// Here are several sample methods of how a programmer would manipulate, or change, strings in Javascript

't'.toUpperCase();                  // capitalizes a character

'T'.toLowerCase();                  // lower cases a character

'What\'s up dude'.split(' ');       // converts string to array; elements separated by what is designated in parentheses

['Chick', 'Fil', 'A'].join('-');    // converts array to string; strings separated by what is designated in parentheses 

var a = 'I hate you';
var b = a.replace('hate', 'love');  // can be used to replace characters; original string not affected
console.log(b);

'      No space '.trim();           // used to get rid of space before first index and last index of string

// We can also manipulate strings with the + operator
console.log('This is ' + 'me.');    // used to concatenate two values
var thisIs = 'This is ';
console.log(thisIs += 'me.');       // used to at once concatenate and assign a value
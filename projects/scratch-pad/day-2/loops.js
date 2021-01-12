// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //Begin loop: array index 0 
  //End loop: last array index
  for (var i = 0; i < array.length; i++){
  //print array values to the console
    console.log(array[i]);
  }

  // YOUR CODE ABOVE HERE //
}




/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //Begin loop: last array index
  //End loop: array index 0
  for (var i = array.length - 1; i >= 0; i--){
  //print array values to the console
    console.log(array[i]);
  }  
  
  // YOUR CODE ABOVE HERE //
}





/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //declare array literal
  var array = [];
  //loop over passed-in object
  for (var key in object){
  //push object keys into array
    array.push(key)
  }
  return array;  
  
  // YOUR CODE ABOVE HERE //
}





/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //loop over passed-in object
  for (var key in object){
  //print object keys to the console
    console.log(key);
  }  
  
  // YOUR CODE ABOVE HERE //
}





/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //declare array literal
  var array = [];
  //loop over passed-in object
  for (var key in object){
  //push object values into array literal
    array.push(object[key]);
  }
  //return array after loop with object values
  return array;  
  
  
  // YOUR CODE ABOVE HERE //
}





/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //loop through passed-in object
  for (var key in object){
  //pring object values to the console
    console.log(object[key])
  }  
  
  // YOUR CODE ABOVE HERE //
}





/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //declare array literal
  var array = [];
  //loop through passed-in object
  for (var key in object){
  //push object keys into array literal
    array.push(key);
  }
  //return number of values in the array
  return array.length;
  
  // YOUR CODE ABOVE HERE //
}





/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //declare array literal
  var arr = [];
  //loop through passed-in object
  for (var key in object){
  //push object values into array literal
    arr.push(object[key]);
  }
  //loop through array with object values
  //Begin loop: last array index
  //End loop: array index 0
  for (var i = arr.length-1; i >=0; i--){
    console.log(arr[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

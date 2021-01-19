/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare variable named animal and assign empty object literal
var animal = {};
// give animal a property named species with a value of any animal species
animal.species = 'dog';
// give animal a property called name with a value of your animal`s name
animal['name'] = 'Oakley';
// give animal a property called noises with a value of empty array
animal.noises = [];
// Print  animal object to the console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a variable named noises and assign it to an empty array literal
var noises = [];
// give noises it’s first element - string representing a sound your animal might make
noises[0] = 'bark';
// add another noise to the end of noises
noises.push('whimper');
// Add an element to noises at the begining of the array
noises.unshift('scratch');
// add another element to the end of noises without hard coding
noises[noises.length] = 'howl';
// print the length of noises array
console.log(noises.length);
// print the last element without hard coding the index
console.log(noises[noises.length - 1]);
// print the whole array to verify accuracy
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign the noises property on animal to our new noises array
animal['noises'] = noises;
// add another noise to the noises property on animal
animal.noises.push('woof');
// print the whole array to verify accuracy
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  Properties on objects can be accessed via bracket notation or dot 
 *  notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *  Array elements can be accessed using bracket notation or the various 
 *  methods (e.g. .push, etc.)
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a variable named animals and assign it to an empty array literal
var animals = [];
// push our animal that we created to animals
animals.push(animal);
// Create a variable called duck and assign object data
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
// push duck to animals
animals.push(duck);
// Create two more animal objects each with a species, a name, and 
// at least two sounds sounds 
var tiger = { species: 'tiger', name: 'Tony', noises: ['roar', 'growl'] };
var cattle = { species: 'cattle', name: 'Cowboy Phil', noises: ['moo', 'graze'] };
// add each one of them to animals array
animals.push(tiger, cattle);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
Imagine that our website has a profile page for each animal. On this profile 
page we can see a list of each animal’s friend on the website. Just like how 
people have a list of friends or followers on facebook or instagram. What would 
be a good data structure to hold this list of friends?
Use array because it's a list. If the items had associative properties, I would use an object.
*/

// Create a variable called friends and assign it to array
var friends = [];
// Write a function called getRandom that takes our animals array
function getRandom(array) {
    // return a random index of the input array
    return Math.floor(Math.random() * array.length) + 0;
}
// get a random animal and add its name to friends
friends.push(animals[getRandom(animals)].name);

// add friends list as a property also named friends on one of the animals in the animals array
animals[0].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
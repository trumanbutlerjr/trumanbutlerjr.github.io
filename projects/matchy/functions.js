/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare function that takes in list of animals and a name to search list
function search(aniArr, aniName) {
    // search through animals array
    for (var i = 0; i < aniArr.length; i++) {
        // check if animal with name is in the list of animals
        if (aniName.toUpperCase() === aniArr[i].name.toUpperCase()) {
            // return animals properties if the name exists
            return aniArr[i];
        }
    }
    // return null if no animal with the name exists
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare function that takes in list of animals, a name, and an object with animal properties
function replace(animals, name, replacement) {
    // search through animals array
    for (var i = 0; i < animals.length; i++) {
        // check if animal with name is in the list of animals 
        if (name.toUpperCase() === animals[i].name.toUpperCase()) {
            // if animal with that name exists, replace with new object
             animals.splice(i, 1, replacement);
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare function that takes in list of animals and a name
function remove(animals, name) {
    // search through animals array
    for (var i = 0; i < animals.length; i++) {
        // check if animal with name is in the list of animals
        if (name.toUpperCase() === animals[i].name.toUpperCase()) {
            // remove that animal
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare function that takes in list of animals and a new-animal object
function add(animals, animal) {
    // check if name and species properties exist for new animal
    if (animal.name.length > 0 && animal.species.length > 0) {
        // if so, search through list of animals
        for (var i = 0; i < animals.length; i++) {
            // check if any of the animals have same name as new animal
            if (animals[i].name.toUpperCase() === animal.name.toUpperCase()) {
                // list of animals remains as is
                return animals;
            } else {
                // if not, push new animal to list of animals
                return animals.push(animal);
            }
        }
    }
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

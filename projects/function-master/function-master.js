//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for (var key in object) {
        arr.push(object[key]);
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = [];
    var string = "";
    for (var key in object) {
        arr.push(key);
    }
    for (var i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        string += arr[i];
      } else {
        string += `${arr[i]} `;
      }
    }
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
    var string = "";
    for (var key in object) {
        arr.push(object[key]);
    }
    for( var i = 0; i < arr.length; i++){
        if (typeof arr[i] !== 'string') {
            arr.splice(i, 1);
        }
    }
    for (var i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        string += arr[i];
      } else {
        string += `${arr[i]} `;
      }
    }
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.replace(string[0], string[0].toUpperCase());
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  var tempArray = string.split(' ');
  for (var i = 0; i < tempArray.length; i++) {
    tempArray[i] = tempArray[i][0].toUpperCase() + tempArray[i].slice(1);
  }
  return tempArray.join(' ');
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!';
}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name[0].toUpperCase() + object.name.slice(1) + ' is a ' + object.species[0].toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (!object.noises) {
      return 'there are no noises'  
    } else if (object.noises.length === 0) {
      return 'there are no noises';
    } else {
      return object['noises'].join(' ');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (!object.friends) {
        return false;
    } else if (object.friends.includes(name)) {
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// declare notFriends array to be returned later
    var notFriends = [];
//loop through array to get access to each object
    for (var i = 0; i < array.length; i++) {
// check if name is not the name from the object
// check if name is not inside of the friends array
        if (array[i].name !== name && !array[i].friends.includes(name)) {
// push people who do not have name inside of their friends array into the notFriends array
            notFriends.push(array[i].name);
        }
    }
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // check if object has key
    if (object.hasOwnProperty(key)) {
        // update value for matching key
        object[key] = value;
    } else {
        // add key-value pair if key is not present
        object[key] = value;
    }
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // search through object
    for (var key in object) {
        // search through array of possible key matches
        for (var i = 0; i < array.length; i++) {
            // remove object properties with keys listed in the array
            delete object[array[i]];
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // sort array
    array.sort();
    // search through array
    for (var i = 0; i < array.length; i++) {
        // if element matches previous element
        if (array[i] === array[i-1]) {
        // remove that element
        array.splice(i, 1);
        // move back the counter to account for missing element
        i--;
        }
    }
    return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
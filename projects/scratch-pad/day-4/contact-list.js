// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
var contact = {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
};
return contact;
} 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
        // take in contact
        addContact: function(contact) {
        // add contact to contact-list
            contacts.push(contact);
        },
        // take in a full name string
        findContact: function(fullName) {
        // render full name as separate strings and assign to array
            var nameArr = fullName.split(' ');
        // searches through contact objects
            for (var i = 0; i < contacts.length; i++) {
        // search values of contact object
                for (var key in contacts[i]) {
        // check if first or last name matches a contact
                    if (contacts[i][key] === nameArr[0] || contacts[i][key] === nameArr[1]) {
        // return contact object
                        return contacts[i];
                    }
                }
            }
        // return undefined if there is no match
            return undefined;
        },
        // takes in a contact object
        removeContact: function(contact) {
        // removes contact from contact-list
            contacts.pop();
        },
        printAllContactNames: function() {
        // create empty string
            var names = '';
        // search through contact objects
            for (var i = 0; i < contacts.length; i++){
        // check if the last contact object
                if (i === contacts.length - 1){
        // assign previous names plus current name without a new line
                    names += `${contacts[i].nameFirst} ${contacts[i].nameLast}`
                } else {
        // otherwise, assign previous names plus current name with a new line
                    names += `${contacts[i].nameFirst} ${contacts[i].nameLast}\n`
                }
            }
        // return the list of full names
            return names;
        }
    }
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

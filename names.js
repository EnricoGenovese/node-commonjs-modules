/* 1 - names.js
1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.
*/

// More verbose function; explicit return

// function fullNameObject(firstName, lastName) {
//     return {
//         firstName/*: fistName */,
//         lastName/*: lastName */
//     }
// };

// With an arrow function --> less verbose; implicit return

const fullNameObject = (firstName, lastName) => ({ firstName: firstName, lastName: lastName })

// Log of the object w/ placeholder parameters to the properties
// const fullNamePlaceholder = fullNameObject("firstNamePlaceholder", "lastNamePlaceholder")
// console.log(fullNamePlaceholder);

// Exporting the object w/ module.exports;
module.exports = fullNameObject;
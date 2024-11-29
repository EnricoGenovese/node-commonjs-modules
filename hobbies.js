/* 2 - hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
2. Esporta la funzione dal file.
*/

// More verbose function; explicit return

// function hobbiesObject(hobby1, hobby2, hobby3) {
//     return {
//         hobbies:
//             [
//                 hobby1/*: hobby1 */,
//                 hobby2/*: hobby2 */,
//                 hobby3/*: hobby3 */
//             ]
//     }
// };


// Arrow function --> less verbose, implic return

const hobbiesObject = (hobby1, hobby2, hobby3) => ({ hobbies: [hobby1, hobby2, hobby3] });

// Log of the object w/ placeholder parameters to the properties

// const userHobbiesPlaceholder = hobbiesObject("hobby1Placeholder", "hooby2Placeholder", "hobby3Placeholder");
// console.log(userHobbiesPlaceholder);

module.exports = hobbiesObject;
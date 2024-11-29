/*3 - people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

// 1 - Importing names function w/ require method (as opposed to the more modern 'import')
const names = require("./names");

// 2 - Importing hobbies function w/ require method (as opposed to the more modern 'import')
const hobbies = require("./hobbies");

// Function: accepts no parameters, uses imported function to create an object called user as an example

function userInfos() {
    const user = names("Cosimo", "Calligari");
    return {
        fullName: `${user.firstName} ${user.lastName}`,
        hobbies: hobbies("Cucina", "Cinema", "Cucito").hobbies.join(", ")
    }
};

console.log(userInfos());
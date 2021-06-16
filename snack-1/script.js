// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

var palla ={ 
    nome: "palla",
    peso: "10"
}
console.log(palla);

//PARTE 2
// Attraverso un prompt dare la possibilità all’utente 
// di modificare il peso della palla.

palla.peso = prompt("inserisci peso palla");
console.log(palla);

//PARTE 3
// Inserire  l’oggetto palla in una array var giochi = [];

var giochi=[]

giochi.push(palla);
console.log(giochi);

//PARTE 4
// Permettere all’utente di inserire un 
// nuovo oggetto all’interno dell’array giochi

var userObject = prompt("inserisci oggetto");
var newPeso = prompt("inserisci peso");

giochi.push({
    nome: userObject,
    peso: newPeso
});

console.log(giochi);
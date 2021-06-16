// Creare un array con tre numeri, calcolare la media di questi tre numeri.

var array = [1, 2, 3];
var result = 0;

for(x = 0; x < array.length; x++){
    result += array[x];
}
var finalResult = result / array.length;
console.log(finalResult);

//SECONDA PARTE
// Costruiamo un array di tre giocatori di basket.
//  Ogni giocatore avrà le seguenti proprietà:
// nome
// cognome
// anno
// punteggio
// Calcolare il punteggio medio dei tre giocatori.

var players = [
    {nome: "Pippo", cognome: "Baudo", anno: 1994, punteggio: 40},
    {nome: "Giacomo", cognome: "Uffa", anno: 1999, punteggio: 20},
    {nome: "Orazio", cognome: "Coso", anno: 1991, punteggio: 30},
]

var sum = 0;

for(i = 0; i < players.length; i++){
    sum += players[i].punteggio;
}
var avg = sum / players.length;
console.log(avg);
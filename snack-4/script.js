// Creare un array di 3 studenti (3 oggetti in un array, quindi)
//  con queste proprietà:
// nome
// cognome
// age
// descrizione
// Per nome, cognome ed age assegnate direttamente nel 
// codice i valori che volete.
// ATTENZIONE: la descrizione invece sarà l’unico 
// valore vuoto, stringa vuota.
// {
//   nome: ‘Pippo’,
//   cognome: ‘Baudo’,
//   age: 80,
//   descrizione: ‘’
// } 
// Successivamente, con dei prompt chiediamo
//  di volta in volta all’utente la descrizione
//   di ciascun studente, salviamola quindi all’interno
//    della sua proprietà.
var studentsResult = document.getElementById("studenti");
var students =[
    {nome: "Carl", cognome: "Brave", age: "25", description: ""},
    {nome: "Franco", cognome: "Centoventisei", age: "27", description: ""},
    {nome: "Flavio", cognome: "Pardini", age: "29", description: ""}
]
console.log(students);
for(x = 0; x < students.length; x++){
    students[x].description = prompt("inserisci descrizione");
}
for (var k in students){
    console.log(k, students[k]);
    studentsResult.innerHTML += "<li>" + students[k].nome + " " + students[k].cognome + " " + students[k].age + " " + students[k].description;
}
console.log(students);


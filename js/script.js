let userName = prompt('Inserisci il tuo nome');

let userLastName = prompt('Inserisci il tuo cognome');

let favouriteColor = prompt('Inserisci il tuo colore preferito');

let password = userName + userLastName + favouriteColor;


document.getElementById('output').innerHTML = `La tua nuova password &egrave ${password}`;
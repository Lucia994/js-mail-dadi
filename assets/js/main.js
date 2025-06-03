console.log("Hello");
/*Mail
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email
Gioco dei dadi*/ 


//Step

//Step 1- Crea una lista di email di invitati
const listPartyGuests = [
    "mario.rossi@gmail.com",
    "leonado_davinci@yahoo.com",
    "tolkien_jkk@libero.it",
    "matt_greoning@outlook.it",
    "yayoi.kusama@gmail.com",
    "jim_carrey@outlook.com",
    "adam_sandler@gmail.com",

]
// Step 2- Richiesta dell'email dell'utente
 const userEmail = prompt(("Inserisci la tua email"));

// Step 3 - Controlla che sia nella lista di chi può accedere
let isUserAuthorized  = false;

for (let i = 0; i < listPartyGuests.length; i++) {
    if (userEmail === listPartyGuests[i]) {  // Se  l'email è nella lista allora si può passare allo step successivo
        isUserAuthorized  = true;
        break;  // fermiamo il ciclo perché l'email è stata trovata
    }
}
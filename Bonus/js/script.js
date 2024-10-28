// DATI
// Input
const tripKm = prompt("Quanti chilometri devi percorrere?");
const passengerAge = prompt("Quanti anni ha il passegero?");

console.log(tripKm, passengerAge);

// ESECUZIONE LOGICA
// Conversione Dati
let result;

if ((isNaN(tripKm)) || (isNaN(passengerAge))) {
    alert("Devi inserire un dato numerico! Ricarica la pagina e prova di nuovo.");
} else {
    const kmNum = parseInt(tripKm);
    const ageNum = parseInt(passengerAge);
    console.log(kmNum, typeof kmNum, ageNum, typeof ageNum);

    const ticketPrice = tripKm * 0.21
    console.log(ticketPrice);

    if (ageNum < 18) {
        result = ticketPrice - (ticketPrice * 20 / 100);
        console.log(result);
    } else if (ageNum > 65) {
        result = ticketPrice - (ticketPrice * 40 / 100);
        console.log(result);
    } else {
        result = ticketPrice
        console.log(result);
    }
}

const finalResult = result.toFixed(2);
console.log(finalResult);

// OUTPUT
console.log(`Il prezzo del tuo biglietto è di ${finalResult} €`);






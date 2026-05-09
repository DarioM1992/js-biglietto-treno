const age = parseInt(prompt('dammi una età a caso'));
const kms = parseInt(prompt('dammi un kilometraggio a caso'));
const ticketPriceEveryKm = 0.21 ;
const total = (kms * ticketPriceEveryKm);

let finalPrice = total;

if (age < 18){
    const discount = (total * 20) / 100;
    finalPrice = total - discount;
} else (age >= 65 ) {
    const discount = (total *40) / 100;
    finalPrice = total - discount;
} 
    
console.log (`il prezzo finale del biglietto è : ${finalPrice.toFixed(2)}€`)


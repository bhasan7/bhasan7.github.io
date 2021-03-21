//ZADATAK KURSNA LISTA
/* Unos iznosa tipa 234, taj unos koji unese je uvijek default u KM, onda 234KM koliko je u tipa eura itd..*/
'use strict'
var euro = parseInt(1.96);
var dolar = parseInt(1.64);
var cad = parseInt(1.31);
var aud = parseInt(1.27);
var nok = parseInt(0.191);

var iznos = parseInt(prompt("Unesite iznos u KM"));
var valuta = prompt("Unesite valutu (euro,dolar,cad,aud,nok)");
function kursnalista(iznos, unesenaValuta) {
    if (unesenaValuta === "euro") {
        document.write(`Vaš iznos je ${iznos * 1.96}`)
    }
    else if (unesenaValuta === "dolar") {
        document.write(`Vaš iznos je ${iznos * 1.64}`)
    }
    else if (unesenaValuta === "cad") {
        document.write(`Vaš iznos je ${iznos * 1.31}`)
    }
    else if (unesenaValuta === "aud") {
        document.write(`Vaš iznos je ${iznos * 1.27}`)
    }
    else if (unesenaValuta === "nok") {
        document.write(`Vaš iznos je ${iznos * 0.191}`)
    }
    else {
        document.write("Valuta nije podržana")
    }
}
kursnalista(iznos, valuta)





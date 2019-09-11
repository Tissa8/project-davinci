//tijs van der haar
//applicatie ontwikkeling
const klein = 5;
const medium = 6;
const groot = 7;
alert('een kleine pizza is 5 euro');
alert('een medium pizza is 6 euro');
alert('een grote pizza is 7 euro');
var aantkl = prompt('hoeveel kleine pizzas');
var totaalkl = aantkl * klein;
document.write(totaalkl);
document.write('euro aan kleine pizzas');
document.write('<br/>')
var aantalme = prompt('hoeveel medium pizzas');
var totaalme = aantalme * medium;
document.write(totaalme);
document.write('euro aan kleine pizzas');
document.write('<br/>')
var aantalgr = prompt('hoeveel grote pizzas');
var totaalgr = aantalgr * groot;
document.write(totaalgr);
document.write('euro aan grote pizzas');
document.write('<br/>')
var totaal = totaalgr + totaalme + totaalkl;
document.write(totaal);
document.write('euro totaal aan pizzas')

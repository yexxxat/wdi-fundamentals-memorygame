console.log("Up and running!");
/*
let cardOne = "Queen";
let cardTwo = "Queen";
let cardThree = "King";
let cardFour = "King";
*/
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User flipped " + cardOne);
let cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2) { ; if (cardsInPlay[0] === cardsInPlay[1]) alert("You found a match!"); else alert("Sorry, try again"); }


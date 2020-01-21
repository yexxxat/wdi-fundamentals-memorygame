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

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
checkForMatch();



function flipCard(cardId) {
console.log("user flipped " + cards[cardId])};
var cardOne = [0];
cardsInPlay.push('cards[cardId]');
if (cardsInPlay.length === 2) { ; if (cardsInPlay[0] === cardsInPlay[1]) alert("You found a match!"); else alert("Sorry, try again"); }

flipCard(0);
flipCard(2);



	//function body ex; alert("");
//let cardOne = cards[0];
//cardsInPlay.push('cardOne');
//console.log("User flipped " + cardOne);
//let cardTwo = cards[2];
//cardsInPlay.push('cardTwo');
//console.log("User flipped " + cardTwo);
//if (cardsInPlay.length === 2) { ; if (cardsInPlay[0] === cardsInPlay[1]) alert("You found a match!"); else alert("Sorry, try again"); }


// then call function flipCard();


/*let cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User flipped " + cardOne);
let cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User flipped " + cardTwo);
*/


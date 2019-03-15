//
// Blackjack by itos
//

let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];

function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
      for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
      }
  }
  return deck;
}

function getNextCard() {
  return deck.shift();
}

let deck = createDeck();

for (i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}

let playerCards = [ getNextCard(), getNextCard() ];

console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);

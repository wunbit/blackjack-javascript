//
// Blackjack by itos
//

// Card variables
let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'],
    values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];

// DOM variables
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [ getNextCard(), getNextCard()];
  playerCards = [ getNextCard(), getNextCard()];

  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
})

function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
      for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        let card = {
          suit: suits[suitIdx],
          value: values[valueIdx]
        }
        deck.push(card);
      }
  }
  return deck;
}

function shuffleDeck (deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

function getCardString (card) {
  return card.value + ' of ' + card.suit;
}

function getNextCard() {
  return deck.shift();
}

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to Blackjack!';
    return;
  }

  for (var i = 0; i<deck.length; i++) {
    textArea.innerText += '\n' + getCardString(deck[i]);
  }
}

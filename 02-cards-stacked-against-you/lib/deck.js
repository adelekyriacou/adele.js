// Deck module
//
// Create a deck and deal from it.
//

// Main export is the Deck object
//
var Deck = {};

Deck.suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
Deck.values = 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',');

Deck.build = function () {
  return Deck.suits.reduce(addSuitToDeck, []);
};

module.exports = Deck;

// Helper functions
//
function buildSuit(suit) {
  return Deck.values.map(function (value) {
    return [suit, value];
  });
}

function addSuitToDeck(deck, suit) {
  return deck.concat(buildSuit(suit));
}

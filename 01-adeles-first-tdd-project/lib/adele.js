// Adele module
//
// This module contains the core logic of our project.
//

// Main export is the Adele object
//
var Adele = {};

Adele.randomCard = function () {
  return [randomSuit(), randomValue()];
};

module.exports = Adele;

// Helper functions
//
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomSuit() {
  var suits = ['hearts', 'spades', 'diamonds', 'clubs'];
  return suits[randomInt(0, 3)];
}

function randomValue() {
  var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  return values[randomInt(0, 12)];
}

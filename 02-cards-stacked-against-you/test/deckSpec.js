var Deck = require('../lib/deck');

describe('Deck', function () {
  describe('.build()', function () {
    it('should contain a full deck', function () {
      var deck = Deck.build();

      ['Spades', 'Hearts', 'Clubs', 'Diamonds'].forEach(function (suit) {
        Deck.values.forEach(function (value) {
          expect(deck).toContain([suit, value]);
        });
      });
    });
  });
});

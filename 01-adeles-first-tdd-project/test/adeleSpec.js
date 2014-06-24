var Adele = require('../lib/adele');

describe('Adele', function () {
  describe('.randomCard()', function () {
    it('should return an array of length 2', function () {
      expect(Adele.randomCard().length).toEqual(2);
    });

    it('should return an array whose first value is a valid suit', function () {
      var validSuits = ['hearts', 'spades', 'diamonds', 'clubs'];
      var card = Adele.randomCard();
      expect(validSuits).toContain(card[0]);
    });

    it('should return an array whose second value is a valid card value', function () {
      var validValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      var card = Adele.randomCard();
      expect(validValues).toContain(card[1]);
    });
  });
});

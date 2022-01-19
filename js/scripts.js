$(document).ready(function() {
  const cardNumbers = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
  const cardSuits = ["spades", "hearts", "diamonds", "clubs"];

  cardSuits.forEach(function(suit) {
    cardNumbers.forEach(function (number) {
      let card = number + " of " + suit;
      $("#showTheDeck").append("<li>" + card + "</li>");
    });
  });
});

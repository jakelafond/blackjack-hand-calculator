/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  var handArray = [];
  var handTotal = 0;
  hand.forEach(hand => {
    if (isNaN(hand) == false) {
      handArray.push(hand);
    } else if (hand === 'A') {
      handArray.push('11');
    } else if (hand === 'K' || 'Q' || 'J') {
      handArray.push('10');
    }
  });
  for (var i = 0; i < handArray.length; i++) {
    handTotal += Number(handArray[i]);
  }
  do {
    if (handTotal > 21 && hand.includes('A')) {
      handTotal = handTotal - 10;
    }
  } while (handTotal > 21);
  console.log(handTotal);
  return handTotal;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

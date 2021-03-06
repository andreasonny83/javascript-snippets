/**
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 */
function largestOfFour(arr) {
  var i;
  var largest;

  return arr.map(function(x) {
    largest = 0;

    for (i = 0; i < x.length; i++) {
      largest = x[i] > largest ? x[i] : largest;
    }

    return largest;
  });
}

module.exports = largestOfFour;

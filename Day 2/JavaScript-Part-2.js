// Variables
var input = 'INPUT_GOES_HERE'.split('\n')
var best = { score: 0 };
var bestStr = '';

// Loop every element
for (var i = 0; i < input.length; i++) {

  // Filter out instances of same element
  var testArray = input.filter(a => a !== input[i])
  
  // Score similarity of element
  for (var x = 0; x < testArray.length; x++) {
    var score = 0;
    for (var y = 0; y < testArray[x].length; y++) if (testArray[x][y] === input[i][y]) score++;
    if (score > best.score) best = { score: score, first: input[i], second: testArray[x]}
  }

}

// Get same characters
for (var i = 0; i < best.first.length; i++) if (best.first[i] == best.second[i]) bestStr += best.first[i];

// Output puzzle answer
console.log(bestStr);

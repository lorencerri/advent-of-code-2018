var input = 'INPUT_GOES_HERE'.split('\n');
var twice = 0;
var thrice = 0;

// Loop through every element
for (var i = 0; i < input.length; i++) {
  
  var instances = {};

  // Loop through every letter
  for (var x = 0; x < input[i].length; x++) {
    
    var letter = input[i][x];

    // Add to instances (if not already added)
    if (!instances[letter]) instances[letter] = 1;
    else instances[letter]++;

  }

  // Add to occurences
  var values = Object.values(instances);
  if (values.some(a => a == 2)) twice++;
  if (values.some(a => a == 3)) thrice++;

}

// Output product
console.log(twice * thrice);

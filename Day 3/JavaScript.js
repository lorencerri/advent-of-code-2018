var input = 'INPUT_GOES_HERE'.split('\n');

// Create Timer
console.time('Timer');

// Variables
var fabric = {}, puzzleOne = 0, puzzleTwo = '';

// Run through every input element (Part 1)
for (var i = 0; i < input.length; i++) {

  // Get cell information
  var { id, x, y, w, h } = getClaimInfo(input[i]); 

  // Run through every sq. inch of fabrich
  for (var a = 0; a < w; a++) {
    for (var b = 0; b < h; b++) {

      var coords = `${x + a}x${y + b}`;
      if (!fabric[coords]) fabric[coords] = [id];
      else fabric[coords].push(id);

    }
  }
  
}

// Run through every input element (Part 2)
for (var i = 0; i < input.length; i++) {

  // Get cell information
  var { id, x, y, w, h } = getClaimInfo(input[i]); 
  var overlapped = false;

  // Run through every sq. inch of fabrich
  for (var a = 0; a < w; a++) {
    for (var b = 0; b < h; b++) {

      var coords = `${x + a}x${y + b}`;
      var cell = fabric[coords];
      
      if (cell.length > 1) puzzleOne++;
      if (cell.length > 1 || cell[0] !== id) overlapped = true;

    }
  }

  if (!overlapped) puzzleTwo = id;

}

/**
* Returns the dimensions and coordinates of a given ID
*
* @param {string} claim - Claim from a line of the input 
* @returns {object} data - ID, Coordinates, & Dimensions
*/
function getClaimInfo(claim) {
  claim = claim.split(' ');
  var pos = claim[2].split(','), dim = claim[3].split('x');
  return {
    id: claim[0].replace('#', ''),
    x: parseInt(pos[0]),
    y: parseInt(pos[1]),
    w: parseInt(dim[0]),
    h: parseInt(dim[1])
  }
}

// Logging

console.log(`Puzzle #1: ${puzzleOne}`);
console.log(`Puzzle #2: ${puzzleTwo}`);
console.timeEnd('Timer');

var input = 'INPUT_GOES_HERE'.split('\n');

// Timer
console.time('Timer')

// Variables
var fabric = {}, puzzleTwo = '';

// Run through every input element (Part 1)
for (var i = 0; i < input.length; i++) {

  // Get cell information
  var { id, x, y, w, h } = getClaimInfo(input[i]); 

  // Run through every sq. inch of fabrich
  for (var a = 0; a < w; a++) {
    for (var b = 0; b < h; b++) {

      var cell = `${x + a}x${y + b}`;
      if (!fabric[cell]) fabric[cell] = [id];
      else fabric[cell].push(id);

    }
  }
  
}

// Run through every input element (Part 2)
for (var i = 0; i < input.length; i++) {

  // Get cell information
  var { id, x, y, w, h } = getClaimInfo(input[i]); 
  var overlapped = false;

  // Run through every sq. inch of fabrich
  for (var a = 0; a < w && overlapped; a++) {
    for (var b = 0; b < h && overlapped; b++) {

      var cell = `${x + a}x${y + b}`;
      if (fabric[cell].length > 1 || fabric[cell][0] !== id) overlapped = true;

    }
  }

  // Only one can hit the dab hard enough
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
console.log(`Puzzle #1: ${Object.values(fabric).filter(a => a.length > 1).length}`);
console.log(`Puzzle #2: ${puzzleTwo}`);
console.timeEnd('Timer')

var input = 'INPUT_GOES_HERE'.split('\n');
var fabric = {}, puzzleOne = 0, puzzleTwo = '';

for (var i = 0; i < input.length; i++) {
  var { id, x, y, w, h } = getClaimInfo(input[i]); 
  for (var a = 0; a < w; a++) {
    for (var b = 0; b < h; b++) {
      var coords = `${x + a}x${y + b}`;
      if (!fabric[coords]) fabric[coords] = [id];
      else fabric[coords].push(id);
    }
  }
}

for (var i = 0; i < input.length; i++) {
  var { id, x, y, w, h } = getClaimInfo(input[i]); 
  var overlapped = false;
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

console.log(`Puzzle #1: ${puzzleOne}`);
console.log(`Puzzle #2: ${puzzleTwo}`);

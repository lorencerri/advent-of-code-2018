var input = 'INPUT_GOES_HERE'.split('\n');

// Timer
console.time('Timer');

// Sort Input
input = input.sort();

// Variables
var currentID;
var startTime;
var minutes = {};
var guards = {};
var guard = { total: 0 };
var minute = { total: 0 };

// Iterate through every input element
for (var i = 0; i < input.length; i++) {
  var element = input[i].split(' ');
  if (element.includes('Guard')) currentID = element[3].replace('#', '');
  else if (element.includes('falls')) startTime = parseInt(element[1].split(':')[1]);
  else {
    var endTime = parseInt(element[1].split(':')[1]);
    for (var x = startTime; x < endTime; x++) {

      // Puzzle One
      if (!guards[currentID]) guards[currentID] = {};
      if (!guards[currentID][x]) guards[currentID][x] = 1;
      else guards[currentID][x]++;
      
      // Puzzle Two
      if (!minutes[x]) minutes[x] = [currentID];
      else minutes[x].push(currentID);

    }
  }
}

// Iterate through every guard element
for (var i in guards) {
  var total = Object.values(guards[i]).reduce((a,b) => a+b);
  if (total > guard.total) {
    guard = { total: total, id: i, date: { day: 0, amount: 0 } };
    for (var x in guards[i]) if (guards[i][x] > guard.date.amount) guard.date = { day: x, amount: guards[i][x] };
  }
}

// Iterate through every minute element
for (var i in minutes) {
  var instances = {};
  for (var x = 0; x < minutes[i].length; x++) {
    if (!instances[minutes[i][x]]) instances[minutes[i][x]] = 1;
    else instances[minutes[i][x]]++;
  }
  for (var x in instances) if (instances[x] > minute.total) minute = { total: instances[x], minute: i, id: x }
}

// Logging
console.log('Puzzle #1:', guard.id * guard.date.day);
console.log('Puzzle #2:', minute.id * minute.minute);
console.timeEnd('Timer'); // Averages 11-13ms

/*
Day 1 - Chronal Calibration [Part 2]
https://adventofcode.com

Declare Input Here: */
var input = '+7, +7, -2, -7, -4'.split(', ');

// Variables
var sum = 0, list = [], found;

// Calc Loop
while (!found) {
  for (var i = 0; i < input.length; i++) {
    sum += parseInt(input[i]);
    if (list.includes(sum)) {
      console.log(sum);
      found = true;
      break;
    } else list.push(sum);
  }
}

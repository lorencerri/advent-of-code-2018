/*
Day 1 - Chronal Calibration [Part 2]
https://adventofcode.com

Input: */
var input = '+7, +7, -2, -7, -4'.split(', ');

// Variables
var freq = 0, list = [], found;

// Calc Loop
while (!found) {
  for (var i = 0; i < input.length; i++) {
    freq += parseInt(input[i]);
    if (list.includes(freq)) {
      console.log(freq);
      found = true;
      break;
    } else list.push(freq);
  }
}

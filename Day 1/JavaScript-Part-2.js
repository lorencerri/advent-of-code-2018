/*
Day 1 - Chronal Calibration [Part 2]
https://adventofcode.com

Declare Input Here: */
var input = '+7, +7, -2, -7, -4';

// Init Sum
var freq = 0;
var list = [];
var found;
input = input.split(', ');

// Calc Loop
while (!found) {
  for (var i in input) {
    if (list.includes(freq += parseInt(input[i]))) {
      found = true;
      console.log(list[list.length-1] + parseInt(input[i]));
      break;
    } else list.push(freq);
  }
}

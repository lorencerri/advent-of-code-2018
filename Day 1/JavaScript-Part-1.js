/*
Day 1 - Chronal Calibration [Part 1]
https://adventofcode.com

Input: */
var input = '+1, +1, -2'.split(', ');

// Calculate
input = input.reduce((a, b) => (a + parseInt(b)), 0);

// Log
console.log(input);

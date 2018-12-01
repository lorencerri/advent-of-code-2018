/*
Day 1 - Chronal Calibration [Part 2]
https://adventofcode.com

Declare Input Here: */
const input = ``;

// Declare Variables
var frequencies, sum, i, found, sign, num;

// Initialize Variables
frequencies = [];
sum = 0;
i = 0
input = input.split(', ');

while (!found) {

  // Calculate Frequency
  sign = input[i].substring(0, 1);
  num = parseInt(input[i].substring(1, input[i].length));
  if (sign == '-') sum -= num;
  else sum += num;

  // Check if it has been a frequency
  if (stream.includes(sum)) {
    console.log(sum)
    notFound = false;
  } else frequencies.push(sum); // Otherwise, push to list

  // Increment
  i++

  // Check if end of list, if so reset index
  if (i == input.length) i = 0;

}

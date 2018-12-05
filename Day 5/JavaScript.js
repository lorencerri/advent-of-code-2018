// Log Time
console.time('Timer');

// Variables
let polymers = '*abcdefghijklmnopqrstuvwxyz';
let input = 'INPUT_GOES_HERE';
let values = [];
let str;
let len;

// Iterate through every character
for (var x = 0; x < polymers.length; x++) {

    // Replace all of a certain character
    str = input.replace(new RegExp(`[${polymers[x]}]`, 'gi'), '');

    do { // Loop until no pairs remaining
        len = str.length;
        for (var i = 0; i < str.length-1; i++) if (Math.abs(str.charCodeAt(i - 1) - str.charCodeAt(i)) == 32) str = str.substr(0, i - 1) + str.substr(i + 1);
    } while (len !== str.length);

    // Update Results
    values.push(str.length);

}

// Logging
console.log('Puzzle #1:', values.shift());
console.log('Puzzle #2:', Math.min(...values));
console.timeEnd('Timer'); // Averages 7429ms
